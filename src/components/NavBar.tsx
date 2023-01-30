import { useState, useEffect } from "react";

import waldoImg from "../assets/waldo.jpg";
import odlawImg from "../assets/odlaw.jpg";
import wendyImg from "../assets/wendy.jpeg";
import wizardImg from "../assets/wizard.jpeg";

export default function NavBar() {
  const [coord, setCoord] = useState("x: 0, y: 0");

  const handleClick = (e: MouseEvent) => {
    setCoord(`x: ${e.clientX} , y: ${e.clientY}`);

    ///
    if (e.target === null) {
      // Handle the case where event.target is null.
      return;
    }
    // const pos = e.target.getBoundingClientRect();
    // const devicePixelRatio = window.devicePixelRatio || 1;
    // // The following are the x/y coordinates of the mouse click relative to the image,
    // // normalized by the device pixel ratio.
    // const x = (e.clientX - pos.left) / devicePixelRatio;
    // const y = (e.clientY - pos.top) / devicePixelRatio;
    // console.log([x, y]);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const imgStyle = {
    width: "50px",
    padding: "5px",
  };

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        // backgroundColor: "lightcoral",
        backgroundColor: "#FFFFFF",
        justifyContent: "space-around",
        // padding: "20px",
        // paddingTop: "20px",
        padding: "20px",
        position: "sticky",
        top: "0px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          // backgroundColor: "red",
        }}
      >
        <img style={imgStyle} src={waldoImg} alt="waldo-img" />
        <img style={imgStyle} src={odlawImg} alt="odlaw-img" />
        <img style={imgStyle} src={wizardImg} alt="wizard-img" />
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <h1>Where's Waldo</h1>
        <h2>{coord}</h2>
      </div>
    </nav>
  );
}
