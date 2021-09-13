import { useState, useEffect, useRef } from "react";

import FlipCard from "./FlipCard";
import StackedCard from "./StackedCard";

import fetchSkill from "../../hooks/fetchSkill";

import styles from "../../styles/SkillsDeck.module.css";

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
        <div className={styles.secondCard} onClick={handleFlip}></div>
      )}
      {lastCard ? null : (
        <div className={styles.topCard} onClick={handleFlip}></div>
      )}
      {stacked ? <StackedCard prevSkill={prevSkill} /> : null}
      {flipped ? <FlipCard skill={skill} /> : null}
    </div>
  );
};

export default SkillsDeck;
