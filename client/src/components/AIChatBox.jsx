import { useState } from "react";


const AiChatBox = ({ historyData }) => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('symptoms', e.target);
    // ... (rest of the handleSubmit function remains the same)
    const response = await fetch("http://127.0.0.1:6969/consult", {
      method: "POST",
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
      },
      body: formData
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // below causes errors
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="component-container ai-chat-box">
      <h2 className="component-title">AI Chat Assistant</h2>
      <form onSubmit={handleSubmit} className="ai-chat-form">
        <div>
          <label className="ai-chat-label">
            Ask a question about the patient
          </label>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="ai-chat-textarea"
            rows="4"
            placeholder="Type your question here..."
          ></textarea>
        </div>
        <button type="submit" className="ai-chat-button">
          Get AI Response
        </button>
      </form>
      {response && (
        <div className="ai-response">
          <h3 className="ai-response-title">AI Response:</h3>
          <p className="ai-response-text">{response}</p>
        </div>
      )}
    </div>
    
  );
};

export default AiChatBox;