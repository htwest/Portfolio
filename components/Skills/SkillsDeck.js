import { useState, useEffect, useRef } from "react";

import FlipCard from "./FlipCard";
import StackedCard from "./StackedCard";

import fetchSkill from "../../hooks/fetchSkill";

import styles from "../../styles/Skills/SkillsDeck.module.css";

const SkillsDeck = () => {
  const [flipped, setFlipped] = useState(false);
  const [oneLeft, setOneLeft] = useState(false);
  const [lastCard, setLastCard] = useState(false);
  const [stacked, setStacked] = useState(false);
  const [skill, setSkill] = useState(null);
  const [prevSkill, setPrevSkill] = useState(null);

  const isMounted = useRef(false);
  const cardsFlipped = useRef(0);

  useEffect(() => {
    if (isMounted.current) {
      if (!lastCard) {
        setFlipped(true);
      }
    } else {
      isMounted.current = true;
    }
  }, [skill]);

  const handleFlip = () => {
    let { currentSkill, oneLeft, lastSkill } = fetchSkill();
    cardsFlipped.current++;
    if (cardsFlipped.current === 2) {
      setStacked(true);
    }
    if (cardsFlipped.current > 1) {
      setPrevSkill(skill);
    }
    if (lastSkill === true) {
      setLastCard(true);
    }
    if (oneLeft === true) {
      setOneLeft(true);
    }
    setSkill(currentSkill);
  };

  return (
    <div className={styles.deckContainer}>
      {oneLeft ? null : (
        <img
          className={styles.secondCard}
          src="Skills/cardFinal.png"
          alt="card-back"
          onClick={handleFlip}
        />
      )}
      {lastCard ? null : (
        <img
          className={styles.topCard}
          src="Skills/cardFinal.png"
          alt="card-back"
          onClick={handleFlip}
        />
      )}
      {stacked ? <StackedCard prevSkill={prevSkill} /> : null}
      {flipped ? <FlipCard skill={skill} /> : null}
    </div>
  );
};

export default SkillsDeck;

// Top Card = inital top card seen on render
// Last Card = last unflipped card seen when one skill remains

// Stacked Card = Card underneith the newly flipped card
// Flip Card = the Card that appears when deck is clicked
