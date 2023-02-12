import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <h1>Home</h1>
      <div style={{ margin: "10px", gap: "20px", display: "flex" }}>
        <Link to="/game">Game</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </>
  );
};

export default Home;
