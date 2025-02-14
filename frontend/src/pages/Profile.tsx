import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({ name: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get(
          "http://localhost:5050/api/auth/profile",
          {
            headers: { Authorization: `${token}` },
          }
        );
        setUser(data);
      } catch {
        navigate("/login");
      }
    };
    fetchProfile();
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl">Profile</h1>
      {user ? <p>Welcome, {user.name}!</p> : <p>Loading...</p>}
    </div>
  );
};

export default Profile;
