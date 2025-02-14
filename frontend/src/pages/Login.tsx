import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: { target: { name: any; value: any; }; }) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5050/api/auth/login",
        form
      );
      localStorage.setItem("token", data.token);
      navigate("/profile");
    } catch (error) {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
