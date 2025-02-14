import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: { target: { name: any; value: any; }; }) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5050/api/auth/register", form);
      navigate("/login");
    } catch (error) {
      alert("Registration failed!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="p-2 border rounded"
        />
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
