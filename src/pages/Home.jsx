import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <h1>
        Your last score is: 1200 <span> High Score: 1800</span>
      </h1>
      <Link to="/game">
        <b>Start Game</b>
      </Link>
    </div>
  );
};

export default Home;
