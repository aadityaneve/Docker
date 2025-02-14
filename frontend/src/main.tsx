// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Profile from "./pages/Profile.tsx";

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

createRoot(document.getElementById("root")!).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
);
