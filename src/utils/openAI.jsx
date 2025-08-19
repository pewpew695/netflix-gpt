const API_KEY =
  "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"; // Replace with your OpenAI API key
const ENDPOINT = "https://api.openai.com/v1/responses";

async function getResponse(userMessage) {
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: userMessage },
        ],
      }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data.choices?.[0]?.message?.content || "No response";
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

// Example usage:
getResponse("Hello, who won the world series in 2023?")
  .then(console.log)
  .catch(console.error);
