import { useState } from "react";
import Markdown from 'react-markdown'
import '../../App.css';

export default function ImageAnalyzer() {
    const [file, setFile] = useState(null);
    const [object, setObject] = useState("");
    const [size, setSize] = useState("");
    const [responses, setResponses] = useState("");

    const submit = () => {
        setResponses("");
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
                        prompt: `Analyze how expensive it would be to build a ${size.toLowerCase()} ${object.toLowerCase()} at the location in the image. Be as consise as possible. Give an estimated cost in dollars along with steps they should take to build the object. Give a list of recommended materials they should get also and the approximate cost of each.`
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

                    for (const line of lines) {
                        if (!line.trim()) continue;
                        try {
                            const json = JSON.parse(line);

                            setResponses(prev => prev + json.response);
                        } catch (e) {
                            console.warn("Failed to parse line:", line);
                        }
                    }
                }

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
    };

    return (
        <div className="mx-auto sm:w-[80ch]">
            <div className="mx-auto">
                <label className="py-2 text-xl">
                    Object You Want To Build:<br />
                    <input
                        type="text"
                        onChange={(e) => setObject(e.target.value)}
                        placeholder="Deck"
                        className="border p-2 w-full rounded"
                    />
                </label>

                <label className="py-2 text-xl">
                    Size:<br />
                    <input
                        type="text"
                        onChange={(e) => setSize(e.target.value)}
                        placeholder="Large"
                        className="border p-2 w-full rounded"
                    />
                </label>

                <label className="py-2 text-xl">
                    Image Of Building Location:<br />
                    <input
                        type="file"
                        accept="image/*"
                        capture="environment"
                        onChange={(e) => {
                            const selectedFile = e.target.files[0];
                            if (selectedFile) {
                                setFile(selectedFile);
                            }
                        }}
                        className="border p-2 text-2xl rounded sm:w-full"
                    />
                </label>
                <button className="bg-zinc-700 text-white p-2 rounded my-2 block mx-auto" onClick={submit}>Submit</button>
            </div>
            <h1 className="font-bold text-3xl text-center">Cost Estimate & Instructions:</h1>
            <p className="text-wrap sm:w-[80ch]"><Markdown components={{
                h1: ({ node, ...props }) => <h1 className="text-3xl font-bold" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-2xl" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-lg" {...props} />,
                p: ({ node, ...props }) => <p className="p-2" {...props} />,
                ol: ({ node, ...props }) => <ol className="list-decimal" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc" {...props} />,
            }}>{responses}</Markdown></p>
        </div>
    );
}
