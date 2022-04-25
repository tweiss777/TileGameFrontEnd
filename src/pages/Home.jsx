import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthentiation } from "../hooks/useAuthentication";
import { fetchHighScore, fetchScore, highScore } from "../services/server";

const Home = () => {
  const {email,logout,highScore,lastScore} = useAuthentiation()

   


  return (
    <div>
      <h1>Welcome {email}</h1>
      <h1>
        Your last score is: {lastScore} <span> High Score: {highScore}</span>
      </h1>
      <Link to="/game">
        <b>Start Game</b>
      </Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
