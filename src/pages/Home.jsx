import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthentiation } from "../hooks/useAuthentication";
import { fetchHighScore, fetchScore} from "../services/server";

const Home = () => {
  const {email,logout} = useAuthentiation()

  const [highscore, setHighScore] = useState(0)
  const [lastscore, setLastScore] = useState(0)
useEffect(() => {
  getscores()
})   


  async function getscores(){
    try{
      setLastScore(await fetchScore(localStorage.getItem('email')))
      setHighScore(await fetchHighScore(localStorage.getItem('email')))  
    }
    catch(err){
      console.error(err)
    }
  }

  return (
    <div>
      <h1>Welcome {email}</h1>
      <h1>
        Your last score is: {lastscore} <span> High Score: {highscore}</span>
      </h1>
      <Link to="/game">
        <b>Start Game</b>
      </Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
