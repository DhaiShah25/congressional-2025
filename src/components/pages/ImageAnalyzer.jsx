import React, { useState, useEffect } from "react";
import '../../App.css';

export default function ImageAnalyzer() {
    const [file, setFile] = useState(null);
    const [object, setObject] = useState("");
    const [responses, setResponses] = useState(""); // store streaming responses

    const handleFileChange = (e) => {
        setResponses("");
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    useEffect(() => {
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = async () => {
            const base64String = reader.result.split(",")[1];

            try {
                const response = await fetch("http://127.0.0.1:11434/api/generate", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        model: "qwen2.5vl:3b",
                        images: [base64String],
                        stream: true,
                        prompt: `Analyze how expensive it would be to build a ${object} here`
                    }),
                });

                if (!response.body) {
                    console.error("No response body returned from server");
                    return;
                }

                const reader = response.body.getReader();
                const decoder = new TextDecoder();
                let buffer = "";

                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;

                    buffer += decoder.decode(value, { stream: true });

                    const lines = buffer.split("\n");
                    buffer = lines.pop() || "";
                    console.log(buffer);

                    for (const line of lines) {
                        if (!line.trim()) continue;
                        try {
                            const json = JSON.parse(line);
                            console.log("Streamed chunk:", json);

                            // Append to state for UI updates
                            setResponses(prev => prev + json.response);

                            if (json.done) {
                                console.log("Stream completed");
                            }
                        } catch (e) {
                            console.warn("Failed to parse line:", line);
                        }
                    }
                }

                // Flush any remaining buffered data
                if (buffer.trim()) {
                    try {
                        const json = JSON.parse(buffer);
                        setResponses(prev => [...prev, json]);
                    } catch { }
                }

            } catch (err) {
                console.error("Upload failed:", err);
            }
        };

        reader.readAsDataURL(file);
    }, [file]);

    return (
        <div className="p-4 grid place-content-center">
            <input
                type="text"
                onChange={(e) => setObject(e.target.value)}
                className="border p-2 text-2xl rounded"
            />

            <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFileChange}
                className="border p-2 text-2xl rounded"
            />
            <div className="mt-4">
                <h2 className="font-bold text-lg">Streamed Responses:</h2>
                <p>{responses}</p>
            </div>
        </div>
    );
}
