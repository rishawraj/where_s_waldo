import { useEffect, useState } from "react";
import image from "../assets/img1.jpg";

export default function ImageContainer() {
  const [pos, setPos] = useState([0, 0]);

  useEffect(() => {
    const waldoImg = document.getElementById("waldo-img") as HTMLImageElement;
    const originalWidth = 1920;
    const originalHeight = 1080;

    const waldoX = 50;
    const waldoY = 100;

    const boxSize = 50;

    waldoImg?.addEventListener("load", () => {
      const pos = waldoImg.getBoundingClientRect();

      const scaleX = waldoImg.width / originalWidth;
      const scaleY = waldoImg.height / originalHeight;
      console.log("scale", scaleX, scaleY);

      const scaledX = waldoX * scaleX;
      const scaledY = waldoY * scaleY;

      const boxX = scaledX - boxSize / 2;
      const boxY = scaledY - boxSize / 2;
      console.log("box X Y", boxX, boxY);

      // the following are the x/y coordinates of the box relative to the page:
      const boxLeft = boxX + pos.left;
      const boxTop = boxY + pos.top;
      const boxRight = boxLeft + boxSize;
      const boxBottom = boxTop + boxSize;
      console.log("boxt top left", boxTop, boxLeft);

      setPos([boxTop, boxLeft]);

      //
      waldoImg.addEventListener("click", (e: MouseEvent) => {
        const pageX = e.pageX;
        const pageY = e.pageY;
        if (
          pageX >= boxLeft &&
          pageX <= boxRight &&
          pageY >= boxTop &&
          pageY <= boxBottom
        ) {
          console.log(true);
        } else {
          console.log(false);
        }
      });
    });
  });

  return (
    <div style={{ padding: "2em", width: "100%", height: "100%" }}>
      <img
        id="waldo-img"
        src={image}
        alt="find_waldo"
        style={{ border: "2px solid black", width: "100%", height: "100%" }}
      />
    </div>
  );
}
