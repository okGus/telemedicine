import { useState } from "react";

const AiChatBox = ({ historyData }) => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      question: question,
      patientHistory: historyData,
    };

    fetch("YOUR_BACKEND_API_URL/ai-response", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data.aiResponse);
      })
      .catch((error) => {
        console.error("Error fetching AI response:", error);
      });

    // Clear the input field
    setQuestion("");
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">AI Chat Box</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Ask a question about the patient
          </label>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Get AI Response
        </button>
      </form>
      {response && (
        <div className="mt-4">
          <h3 className="text-xl font-bold">AI Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default AiChatBox;
