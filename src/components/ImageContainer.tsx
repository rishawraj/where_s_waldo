import { useEffect, useState } from "react";
import image from "../assets/img1.jpg";

export default function ImageContainer() {
  const [pos, setPos] = useState([0, 0]);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    const waldoImg = document.getElementById("waldo-img") as HTMLImageElement;

    console.log(waldoImg.width, waldoImg.height);

    const handlelclick = (e: MouseEvent) => {
      setDisplay(!display);
      setPos([e.clientY + 10, e.clientX + 10]);
    };

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
          <button>Rick</button>
          <button>Morty</button>
          <button>Jerry</button>
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
