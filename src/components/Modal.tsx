// import

type Props = {
  handleClick: () => void;
};
export const Modal = ({ handleClick }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submitted!");
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        // height: "100vh",
        // width: "100vw",
        // backgroundColor: "lightblue",
        // opacity: 0.3,
        padding: "100px",
      }}
    >
      <div style={{ backgroundColor: "red", padding: "40px" }}>
        <h1>Add Name to Leaderboard!</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="name">Name</label>
          <input type="text" /> <br />
          <button type="submit">send</button>
        </form>
      </div>
    </div>
  );
};
