const API_KEY = ""; // Replace with your OpenAI API key
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
