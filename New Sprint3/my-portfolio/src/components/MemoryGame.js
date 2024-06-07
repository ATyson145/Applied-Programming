import React, { useState, useEffect } from "react";
import "./MemoryGame.css";

const cardsArray = [
  { type: "A", id: 1, color: "green" },
  { type: "A", id: 2, color: "green" },
  { type: "B", id: 3, color: "blue" },
  { type: "B", id: 4, color: "blue" },
  { type: "C", id: 5, color: "yellow" },
  { type: "C", id: 6, color: "yellow" },
  { type: "D", id: 7, color: "red" },
  { type: "D", id: 8, color: "red" },
];

function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    setCards(shuffleArray(cardsArray));
  }, []);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index)) {
      return;
    }

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex].type === cards[secondIndex].type) {
        setMatchedCards([...matchedCards, cards[firstIndex].type]);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  return (
    <div className="memory-game">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`card ${
            flippedCards.includes(index) || matchedCards.includes(card.type)
              ? "flipped"
              : ""
          }`}
          onClick={() => handleCardClick(index)}
        >
          <div className="card-inner">
            <div className="card-front">?</div>
            <div className="card-back" style={{ backgroundColor: card.color }}>
              {card.type}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MemoryGame;
