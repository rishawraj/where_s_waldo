import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const Nav = () => {
  const auth = useAuth();
  const currentUser = auth?.currentUser;
  const logout = auth?.logout;

  const navigate = useNavigate();
  const location = useLocation();

  async function handleLogOut() {
    if (!logout) {
      return;
    }

    try {
      await logout();
      navigate("/");
    } catch {
      alert("failed to log out!");
    }
  }

  function handleLoginClick(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    console.log("login button clicked!!");
    console.log(location.pathname);
    localStorage.setItem("prevLocation", location.pathname);
  }

  return (
    <div
      className="Nav"
      style={{
        padding: "10px",
        backgroundColor: "lightgreen",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <h1>
        <Link
          style={{
            color: "black",
            textDecoration: "none",
          }}
          to="/"
        >
          Where's Waldo
        </Link>
      </h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        {currentUser ? (
          <button
            style={{ backgroundColor: "lightcoral" }}
            onClick={handleLogOut}
          >
            Log out
          </button>
        ) : (
          <Link onClick={(e) => handleLoginClick(e)} to="/login">
            <button>Log In</button>
          </Link>
        )}
      </div>
    </div>
  );
};
