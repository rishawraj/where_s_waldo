import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [coord, setCoord] = useState("");
  useEffect(() => {
    document.addEventListener("click", (e) => {
      setCoord(`x: ${e.clientX} ,y: ${e.clientY}`);
    });
  }, []);

  return (
    <>
      <h1>Where's Waldo</h1>
      <h2>{coord}</h2>
    </>
  );
}

export default App;
