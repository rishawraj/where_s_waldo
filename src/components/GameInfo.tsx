import { Link } from "react-router-dom";
import { getDoc, doc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import styles from "./GameInfo.module.css";

export const GameInfo = () => {
  interface DataItem {
    name: string;
    time: number;
  }

  const [data, setData] = useState<DataItem[]>([]);

  const getData = async () => {
    const newData: DataItem[] = [];
    const querySnapshot = await getDocs(collection(db, "game-one-leaderboard"));
    querySnapshot.forEach((doc) => {
      // setData((prev) => [
      //   ...prev,
      //   { name: doc.data().name, time: doc.data().time },
      // ]);
      newData.push({ name: doc.data().name, time: doc.data().time });
      newData.sort((a, b) => a.time - b.time);
      setData(newData);
    });
  };

  useEffect(() => {
    getData();

    return () => {
      setData([]);
    };
  }, []);

  return (
    <div style={styles} className={styles.container}>
      <div>
        <div className={styles.heroImage}>
          <Link to="/game">
            <button className={styles.bn3637}>Play</button>
          </Link>
        </div>

        <div className={styles.leaderboardContainer}>
          <h3>Leader Board</h3>

          <ul>
            {data.map((user) => {
              return (
                <li>
                  <div>{user.name}</div>
                  <div>{user.time}s</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
