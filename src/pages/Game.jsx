import Board from "../components/Board/Board";
import backImg from "../images/back.png";
import angular from "../images/angular.png";
import css from "../images/css.png";
import itc from "../images/itc.png";
import html from "../images/html.png";
import rail from "../images/node_js.png";
import react from "../images/react.png";
import scala from "../images/js.png";
import vue from "../images/vue.png";

const Home = () => {
  const cards = buildCards();
  return (
    <div className="App">
      <Board cards={cards} />
    </div>
  );
};

export default Home;

function buildCards() {
  let id = 0;
  const images = { angular, css, itc, html, rail, react, scala, vue };
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
