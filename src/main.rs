use axum::{
    body::Body,
    extract::{Json, State},
    response::{Redirect, Response},
    routing::{get, post},
    Router,
};
use base64::prelude::*;
use serde::{Deserialize, Serialize};

#[tokio::main]
async fn main() {
    let service = tower_http::services::ServeDir::new("./static/");

    let app = Router::new()
        .route(
            "/favicon.ico",
            get(|| async { Redirect::to("/favicon.svg") }),
        )
        .fallback_service(service)
        // Now Api Stuff
        .route("/api/image", post(submit_image))
        .with_state(reqwest::Client::new());

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}

#[derive(Debug, Deserialize)]
struct ImageReq {
    structure: String,
    image: Vec<u8>,
}

async fn submit_image(
    State(client): State<reqwest::Client>,
    Json(payload): Json<ImageReq>,
) -> Response {
    let image = BASE64_STANDARD.encode(payload.image);

    let reqwest_resp = client
        .post("http://localhost:11434/api/generate")
        .json(&ModelReq {
            model: "gemma3:4b",
            prompt: &format!("Estimate the costs to create the following structure in image passed to you. The structure: {}", payload.structure),
            stream: true,
            images: &[&image],
        })
        .send()
        .await
        .unwrap();

    let mut response_builder = Response::builder().status(reqwest_resp.status());
    *response_builder.headers_mut().unwrap() = reqwest_resp.headers().clone();
    response_builder
        .body(Body::from_stream(reqwest_resp.bytes_stream()))
        .unwrap()
}

#[derive(Debug, Serialize)]
struct ModelReq<'a> {
    model: &'a str,
    prompt: &'a str,
    stream: bool,
    images: &'a [&'a str],
}
