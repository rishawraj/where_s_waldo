import React from "react";
import ImageContainer from "./ImageContainer";
import { NavBar } from "./NavBar";
import { useState } from "react";

export const Game: React.FC = () => {
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
    </>
  );
};
