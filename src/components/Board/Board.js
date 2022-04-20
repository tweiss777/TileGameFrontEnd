<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Board.css";

const Board = ({ cartas, completed, setCompleted }) => {
  const [cards, setCards] = useState(cartas);
  const [checkers, setCheckers] = useState([]);
  const onCardClick = (card) => () => {
    if (checkersFull(checkers) || cardAlreadyInCheckers(checkers, card)) return;
    const newCheckers = [...checkers, card];
    setCheckers(newCheckers);
    const cardsInCheckersMatched = validateCheckers(newCheckers);
    if (cardsInCheckersMatched) {
      setCompleted([...completed, newCheckers[0].type]);
    }
    if (checkersFull(newCheckers)) {
      resetCheckersAfter(600);
    }
    function validateCheckers(checkers) {
      return checkers.length === 2 && checkers[0].type === checkers[1].type;
    }
    function cardAlreadyInCheckers(checkers, card) {
      return checkers.length === 1 && checkers[0].id === card.id;
    }
    function checkersFull(checkers) {
      return checkers.length === 2;
    }
    function resetCheckersAfter(time) {
      setTimeout(() => {
        setCheckers([]);
      }, time);
    }
  };

  useEffect(() => {
    const newCards = cards.map((card) => ({
      ...card,
      flipped:
        checkers.find((c) => c.id === card.id) || completed.includes(card.type),
    }));
    setCards(newCards);
  }, [checkers, completed, cards]);

  return (
    <div className="Board">
      {cards.map((card) => (
        <Card {...card} onClick={onCardClick(card)} key={card.id} />
      ))}
    </div>
  );
};

export default Board;
=======
import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Board.css";

const Board = ({ cartas, scored, setScored }) => {
  const [cards, setCards] = useState(cartas);
  const [checkers, setCheckers] = useState([]);
  const onCardClick = (card) => () => {
    if (checkersFull(checkers) || cardAlreadyInCheckers(checkers, card)) return;
    const newCheckers = [...checkers, card];
    setCheckers(newCheckers);
    const cardsInCheckersMatched = validateCheckers(newCheckers);
    if (cardsInCheckersMatched) {
      setScored([...scored, newCheckers[0].type]);
    }
    if (checkersFull(newCheckers)) {
      resetCheckersAfter(600);
    }
    function validateCheckers(checkers) {
      return checkers.length === 2 && checkers[0].type === checkers[1].type;
    }
    function cardAlreadyInCheckers(checkers, card) {
      return checkers.length === 1 && checkers[0].id === card.id;
    }
    function checkersFull(checkers) {
      return checkers.length === 2;
    }
    function resetCheckersAfter(time) {
      setTimeout(() => {
        setCheckers([]);
      }, time);
    }
  };

  useEffect(() => {
    const newCards = cards.map((card) => ({
      ...card,
      flipped:
        checkers.find((c) => c.id === card.id) || scored.includes(card.type),
    }));
    setCards(newCards);
  }, [checkers, scored, cards]);

  return (
    <div className="Board">
      {cards.map((card) => (
        <Card {...card} onClick={onCardClick(card)} key={card.id} />
      ))}
    </div>
  );
};

export default Board;
>>>>>>> memo
