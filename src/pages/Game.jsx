import { React, useState } from "react";
import Board from "../components/Board/Board";
import Timer from "../components/Timer";
import backImg from "../images/itc.png";
import angular from "../images/angular.png";
import css from "../images/css.png";
import mongo from "../images/mongodb.png";
import html from "../images/html.png";
import node from "../images/node_js.png";
import react from "../images/react.png";
import js from "../images/js.png";
import mysql from "../images/mysql.png";
import sad from "../images/sad.png";

const Home = () => {
  const [timesOver, setTimesOver] = useState(false);
  const [completed, setCompleted] = useState([]);
  const [clicked, setClicked] = useState(0);
  const score = (100 - clicked) * 20;

  const cards = buildCards();
  return (
    <div className="game">
      <div className="timer">
        {!timesOver && completed.length < 8 ? (
          <Timer setTimesOver={setTimesOver} />
        ) : completed.length === 8 ? (
          <div>
            <span className="win">You Won!! Your score is: {score} </span>

            <span
              className="tryAgain"
              onClick={() => window.location.reload(false)}>
              {" "}
              Play again?
            </span>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div>
        {timesOver ? (
          <div>
            <div className="gameOver">You Lost!!</div>
            <img className="sad" src={sad} alt=":(" />
            <div
              className="tryAgain"
              onClick={() => window.location.reload(false)}>
              {" "}
              Try again
            </div>
          </div>
        ) : (
          <Board
            cartas={cards}
            completed={completed}
            setCompleted={setCompleted}
            clicked={clicked}
            setClicked={setClicked}
          />
        )}
      </div>
    </div>
  );
};
export default Home;

function buildCards() {
  let id = 0;
  const images = { angular, css, mongo, html, node, react, js, mysql };
  const cards = Object.keys(images).reduce((result, item) => {
    const getCard = () => ({
      id: id++,
      type: item,
      backImg,
      frontImg: images[item],
      flipped: false,
    });
    return [...result, getCard(), getCard()];
  }, []);
  return shuffle(cards);
}

function shuffle(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let randomIdx = Math.floor(Math.random() * len);
    let copyCurrent = { ...arr[i] };
    let copyRandom = { ...arr[randomIdx] };
    arr[i] = copyRandom;
    arr[randomIdx] = copyCurrent;
  }
  return arr;
}
