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
  const [allFound, setALlFound] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [countDown, setCountDown] = useState(0);

  function convertToMinutesAndSeconds(ms: number): string {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${+seconds < 10 ? "0" : ""}${seconds}`;
  }

  useEffect(() => {
    const values = Object.values(props.status);
    const allTrue = values.every((v) => v == true);
    const now = new Date().getTime();
    const count = now - startTime;
    setCountDown(count);
    setALlFound(allTrue);
  }, [props]);

  useEffect(() => {
    const image = document.getElementById("waldo-img");
    image?.addEventListener("load", () => {
      let now = new Date().getTime();
      console.log(now);
      setStartTime(now);
    });
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
        {allFound ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              backgroundColor: " rgba(255,255,255,0.5)",
              width: "100vw",
              height: "100vh",
              top: 0,
              left: 0,
            }}
          >
            <div
              style={{
                backgroundColor: "lightskyblue",
                padding: "20px 50px",
              }}
            >
              <h2>You Win!!!</h2>
              {convertToMinutesAndSeconds(countDown)}
              <p>please refresh the page to play again.</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export { NavBar };
