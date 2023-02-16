import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
// useAuth()?.currentUser
import { useNavigate } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const auth = useAuth();
  const currentUser = auth?.currentUser;
  const logout = auth?.logout;

  async function handleLogOut(e: FormEvent) {
    e.preventDefault();
    try {
      setLoading(true);
      await logout?.();
      navigate("/");
    } catch {
      alert("error");
    }
    setLoading(false);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <nav
        style={{
          backgroundColor: "lightblue",
          display: "flex",
          // flexDirection: "column",
          justifyContent: "space-around",
          padding: "12px",
          alignItems: "center",
        }}
      >
        <h1>Where's Waldo</h1>
        <div>{currentUser?.email}</div>
        <div style={{ display: "flex", gap: "10px" }}>
          {currentUser ? (
            <button disabled={loading} onClick={handleLogOut}>
              log out
            </button>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </div>
      </nav>
      <Link
        style={{
          padding: "10px",
          margin: "20px",
          backgroundColor: "lightcoral",
        }}
        to="/gamelist"
      >
        Game 1
      </Link>
    </div>
  );
};

export default Home;
