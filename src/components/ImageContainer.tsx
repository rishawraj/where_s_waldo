import image from "../assets/img1.png";

export default function ImageContainer() {
  return (
    <div style={{ padding: "2em" }}>
      <img
        id="waldo-img"
        src={image}
        alt="find_waldo"
        style={{ width: "100%", border: "2px solid black" }}
      />
    </div>
  );
}
