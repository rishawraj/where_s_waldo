import { useState, useEffect } from "react";

import waldoImg from "../assets/waldo.jpg";
import odlawImg from "../assets/odlaw.jpg";
import wendyImg from "../assets/wendy.jpeg";
import wizardImg from "../assets/wizard.jpeg";

export default function NavBar() {
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
      </div>
    </nav>
  );
}
