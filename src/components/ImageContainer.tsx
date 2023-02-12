import { useEffect, useState } from "react";
import image from "../assets/img1.jpg";
import { data } from "./data";

type typeProp = {
  setNavStatus: (name: string) => void;
};

export default function ImageContainer({ setNavStatus }: typeProp) {
  const [pos, setPos] = useState([0, 0]);
  const [display, setDisplay] = useState(true);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  type obj = {
    top: number;
    left: number;
    right: number;
    bottom: number;
    name: string;
  };

  const handleButtonClick = ({ top, left, right, bottom, name }: obj): void => {
    if (left <= x && x <= right && top <= y && bottom >= y) {
      // alert(`You've found ${name}!`);
      setNavStatus(`${name}`);
    } else {
      // alert(`That is not ${name}`);
    }
    setDisplay(!display);
  };

  const handlelclick = (e: MouseEvent) => {
    const waldoImg = document.getElementById("waldo-img") as HTMLImageElement;

    setDisplay(!display);
    setPos([e.clientY + 10, e.clientX + 10]);

    let offsets = waldoImg.getBoundingClientRect();

    let posX = (e.clientX - offsets.left) / offsets.width;
    let posY = (e.clientY - offsets.top) / offsets.height;
    setX(posX);
    setY(posY);

    console.log(x.toFixed(2), y.toFixed(2));
  };

  useEffect(() => {
    const waldoImg = document.getElementById("waldo-img") as HTMLImageElement;
    waldoImg.addEventListener("click", handlelclick);
    return () => waldoImg.removeEventListener("click", handlelclick);
  });

  return (
    <div style={{ padding: "2em", width: "100%", height: "100%" }}>
      <img
        id="waldo-img"
        src={image}
        alt="find_waldo"
        style={{ border: "2px solid black", width: "100%", height: "100%" }}
      />
      <div
        style={{
          backgroundColor: "lightgray",
          width: "150px",
          padding: " 5px",
          position: "absolute",
          display: `${display ? "none" : "flex"}`,
          flexDirection: "column",
          top: `${pos[0]}px`,
          left: `${pos[1]}px`,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <button onClick={() => handleButtonClick(data.rick)}>Rick</button>
          <button onClick={() => handleButtonClick(data.morty)}>Morty</button>
          <button onClick={() => handleButtonClick(data.falmingo)}>
            Flamingo
          </button>
          <button onClick={() => handleButtonClick(data.strawberry)}>
            Strawberry
          </button>
          <button
            style={{ backgroundColor: "lightcoral" }}
            onClick={() => setDisplay(!display)}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
}
