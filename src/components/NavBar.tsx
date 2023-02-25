import React, { useState, useEffect } from "react";
import { Modal } from "./Modal";

interface Props {
  status: {
    rick: boolean;
    morty: boolean;
    flamingo: boolean;
    strawberry: boolean;
  };
}

const NavBar = (props: Props) => {
  const [allFound, setALlFound] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [countDown, setCountDown] = useState(0);
  const [timer, setTimer] = useState(1);
  const [finalTime, setFinalTime] = useState(0);

  function convertToMinutesAndSeconds(ms: number): string {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${+seconds < 10 ? "0" : ""}${seconds}`;
  }

  function fancyTimeFormat(duration: number) {
    // Hours, minutes and seconds
    const hrs = ~~(duration / 3600);
    const mins = ~~((duration % 3600) / 60);
    const secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    let ret = "";

    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;

    return ret;
  }

  function msToTime(s: number) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    return hrs + " hr : " + mins + " min: " + secs + " sec";
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
    const values = Object.values(props.status);
    const allTrue = values.every((v) => v == true);

    if (allTrue) {
      setFinalTime(timer);
      return;
    }

    const intrevalId = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      clearInterval(intrevalId);
    };
  }, [props]);

  useEffect(() => {
    const image = document.getElementById("waldo-img");
    image?.addEventListener("load", () => {
      let now = new Date().getTime();
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
        width: "90%",
        marginInline: "auto",
        borderRadius: "16px",
        backgroundColor: "#FFFFFF",
        // backgroundColor: "lightgray",
        justifyContent: "space-around",
        padding: "20px",
        position: "sticky",
        top: "0px",
        // marginLeft: "10px",
        // marginRight: "10px",
      }}
    >
      {" "}
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
      <div style={{ fontSize: "20px", fontWeight: "bold" }}>
        Timer: {fancyTimeFormat(timer)}
      </div>
      {allFound ? <Modal finalTime={finalTime} /> : ""}
    </nav>
  );
};

export { NavBar };
