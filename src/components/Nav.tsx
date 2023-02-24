import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import styles from "./Nav.module.css";
import styles from "./Nav.module.css";

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
      // style={styles}
      className="Nav"
      style={{
        padding: "10px",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <h1>
        <Link
          style={{
            color: "white",
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
        {location.pathname === "/" ? (
          ""
        ) : (
          <Link to="/">
            <button className={styles.button}>Home</button>
          </Link>
        )}
        {location.pathname === "/about" ? (
          ""
        ) : (
          <Link to="/about">
            <button className={styles.button}>About</button>
          </Link>
        )}
        {currentUser ? (
          <button
            // style={{ backgroundColor: "lightcoral" }}
            className={styles.logoutButton}
            onClick={handleLogOut}
          >
            Log out
          </button>
        ) : (
          <Link onClick={(e) => handleLoginClick(e)} to="/login">
            <button className={styles.button}>Log In</button>
          </Link>
        )}
      </div>
    </div>
  );
};
