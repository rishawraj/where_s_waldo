import ImageContainer from "./components/ImageContainer";
import { NavBar } from "./components/NavBar";
import { useState } from "react";
import "./App.css";

const App: React.FC = () => {
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

export default App;
