import { Link } from "react-router-dom";

export const GameList = () => {
  return (
    <>
      <h2>Game List</h2>
      <div className="game-list">
        <Link to="/game">Game </Link>
        <div>Image</div>
        <h2>LeaderBoard</h2>
        <ul>
          <li>john</li>
          <li>jane</li>
          <li>molly</li>
          <li>mick</li>
          <li>mikey</li>
        </ul>
      </div>
    </>
  );
};
