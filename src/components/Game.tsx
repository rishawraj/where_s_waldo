import React, { useEffect } from "react";
import ImageContainer from "./ImageContainer";
import { NavBar } from "./NavBar";
import { useState } from "react";
import { Modal } from "./Modal";

export const Game = () => {
  const [status, setStatus] = useState({
    rick: false,
    morty: false,
    flamingo: false,
    strawberry: false,
  });

  const setNavStatus = (name: string): void => {
    let key = name;
    setStatus({ ...status, [key]: true });
  };

  return (
    <>
      <NavBar status={status} />
      <ImageContainer setNavStatus={setNavStatus} />
      {/* <button onClick={handleClick}>open modal</button> */}
      {/* {isOpen ? <Modal handleClick={handleClick} /> : ""} */}
    </>
  );
};
