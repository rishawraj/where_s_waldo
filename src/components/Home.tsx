import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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
