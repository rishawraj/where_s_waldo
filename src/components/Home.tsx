import { Link } from "react-router-dom";
import img from "../assets/img1.jpg";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>Game List</h2>
      </div>
      <div className={styles.gamelist}>
        <Link to="/gameinfo">
          <p>Rick And Morty</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
