import ImageContainer from "./components/ImageContainer";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <ImageContainer />
    </>
  );
}

export default App;

/*
! track waldo
const image = document.querySelector("imageSelector");
const waldoX = 50; // The x coordinate of Waldo in the original image
const waldoY = 100; // The y coordinate of Waldo in the original image
const originalWidth = 500; // The original width of the image
const originalHeight = 400; // The original height of the image

image.addEventListener("load", () => {
  const pos = image.getBoundingClientRect();
  const scaleX = image.width / originalWidth;
  const scaleY = image.height / originalHeight;
  // The following are the x/y coordinates of Waldo in the scaled image
  const scaledWaldoX = waldoX * scaleX;
  const scaledWaldoY = waldoY * scaleY;
  // The following are the x/y coordinates of Waldo relative to the page
  const pageWaldoX = scaledWaldoX + pos.left;
  const pageWaldoY = scaledWaldoY + pos.top;
});
*/
