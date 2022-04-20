import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome User</h1>
      <h1>
        Your score is: xxx <span> High Score: yyy</span>
      </h1>
      <Link to="/game">
        <b>Start Game</b>
      </Link>
    </div>
  );
};

export default Home;
