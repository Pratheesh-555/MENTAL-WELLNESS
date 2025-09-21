import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(username, password);
      
      if (data.message === "User registered successfully") {
        setMsg(data.message);
        setTimeout(() => navigate("/login"), 1500); // Redirect after showing success
      } else {
        setMsg(data.detail || "Registration failed");
      }
    } catch (err) {
      console.error('Registration error:', err);
      setMsg("Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button
            className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition"
            type="submit"
          >
            Register
          </button>
          {msg && <p className="text-center text-sm text-blue-500">{msg}</p>}
        </form>
        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account? <a href="/login" className="text-green-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
