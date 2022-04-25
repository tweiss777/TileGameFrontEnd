import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthentiation } from "../hooks/useAuthentication";
import { fetchHighScore, fetchScore, highScore } from "../services/server";

const Home = () => {
  const {logout} = useAuthentiation()

  let highScore = 0;
  let lastScore = 0;
  const {email} = useAuthentiation();
  const token = localStorage.getItem('token');


  // useEffect(async () => {
  //   lastScore = await fetchScore(email)
  //   highScore = await fetchHighScore(email)
  // })

  return (
    <div>
      <h1>Welcome</h1>
      <h1>
        Your last score is:  <span> High Score: 1800</span>
      </h1>
      <Link to="/game">
        <b>Start Game</b>
      </Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
