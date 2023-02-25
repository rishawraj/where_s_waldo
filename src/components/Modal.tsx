import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { uuidv4 } from "@firebase/util";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useRef, useState } from "react";

type Prop = {
  finalTime: number;
};

export const Modal = ({ finalTime }: Prop) => {
  // console.log(finalTime);

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const displayValue = show ? "none" : "flex";
  function closeModal() {
    setShow(!show);
  }

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submitted!");

    try {
      const name = inputRef.current?.value;

      if (!name) return;

      await setDoc(doc(db, "game-one-leaderboard", `${uuidv4()}`), {
        name: name,
        time: finalTime,
      });
      setShow(!show);
      navigate("/gameinfo");
    } catch {
      alert("failed to set data!");
    }
  };
  const buttonStyle = {
    background: "transparent",
    padding: "5px",
    border: "2px solid black",
    marginBottom: "10px",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        display: displayValue,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: "1",
        height: "100vh",
        width: "100vw",
        backgroundColor: " rgba(173, 216, 230, 0.5)",
        padding: "100px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "inline-block",
          backgroundColor: "white",

          padding: "40px",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Add Name to Leaderboard!</h1>

        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={(e) => handleSubmit(e)}
        >
          <label htmlFor="name">Name</label>
          <input
            style={{ padding: "5px" }}
            type="text"
            ref={inputRef}
            required
          />{" "}
          <br />
          <button style={buttonStyle} type="submit">
            send
          </button>
          <button style={buttonStyle} onClick={closeModal}>
            cancel
          </button>
        </form>
      </div>
    </div>
  );
};
