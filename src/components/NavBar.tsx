import React, { useState, useEffect } from "react";

interface Props {
  status: {
    rick: boolean;
    morty: boolean;
    flamingo: boolean;
    strawberry: boolean;
  };
}

const NavBar: React.FC<Props> = (props) => {
  console.log(props.status.flamingo);

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
        backgroundColor: "#FFFFFF",
        justifyContent: "space-around",
        padding: "20px",
        position: "sticky",
        top: "0px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          fontWeight: "bold",
          fontSize: "24px",
        }}
      >
        <div style={{ color: props.status.rick ? "red" : "black" }}>Rick</div>
        <div style={{ color: props.status.morty ? "red" : "black" }}>Morty</div>
        <div style={{ color: props.status.flamingo ? "red" : "black" }}>
          Flamingo
        </div>
        <div style={{ color: props.status.strawberry ? "red" : "black" }}>
          Strawberry
        </div>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <h1>Where's Waldo</h1>
      </div>
    </nav>
  );
};

export { NavBar };
