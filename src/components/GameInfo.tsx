import { Link } from "react-router-dom";
import { getDoc, doc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

export const GameList = () => {
  interface DataItem {
    name: string;
    time: number;
  }

  const [data, setData] = useState<DataItem[]>([]);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "game-one-leaderboard"));
    querySnapshot.forEach((doc) => {
      setData((prev) => [
        ...prev,
        { name: doc.data().name, time: doc.data().time },
      ]);
    });
  };

  useEffect(() => {
    getData();

    return () => {
      setData([]);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "lightblue",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h1>Game Info</h1>

      <div
        style={{
          display: "flex",
          gap: "40px",
        }}
      >
        <div>
          <h3>Image</h3>
          <Link to="/game">Play</Link>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3>Leader Board</h3>
          <ul
            style={{
              listStyle: "none",
            }}
          >
            {data.map((user) => {
              return (
                <li>
                  {user.name} , time: {user.time}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
