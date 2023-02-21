import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { uuidv4 } from "@firebase/util";

import { useRef, useState } from "react";

type Prop = {
  finalTime: number;
};

export const Modal = ({ finalTime }: Prop) => {
  console.log(finalTime);

  const [show, setShow] = useState(false);

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
      await setDoc(doc(db, "game-one-leaderboard", `${uuidv4()}`), {
        name: name,
        time: finalTime,
      });
      setShow(!show);
    } catch {
      alert("failed to set data!");
    }
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
          backgroundColor: "red",
          padding: "40px",
        }}
      >
        <h1>Add Name to Leaderboard!</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="name">Name</label>
          <input type="text" ref={inputRef} /> <br />
          <button type="submit">send</button>
          <button onClick={closeModal}>cancel</button>
        </form>
      </div>
    </div>
  );
};
