// API configuration
const NODE_API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
const PYTHON_API_URL = import.meta.env.VITE_PYTHON_API_URL || "http://localhost:8000";

// Chat with Node.js server (OpenAI)
export const sendMessageToChatbot = async (message) => {
  const response = await fetch(`${NODE_API_URL}/api/send-message`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  return await response.json();
};

// Face emotion analysis with Python server
export const analyzeEmotion = async (imageFile) => {
  const formData = new FormData();
  formData.append('file', imageFile);

  const response = await fetch(`${PYTHON_API_URL}/analyze_emotion/`, {
    method: "POST",
    body: formData,
  });

  return await response.json();
};

// User authentication with Python server
export const registerUser = async (username, password) => {
  const response = await fetch(`${PYTHON_API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  return await response.json();
};

export const loginUser = async (username, password) => {
  const response = await fetch(`${PYTHON_API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  return await response.json();
};
