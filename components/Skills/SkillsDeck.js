import { useState, useEffect, useRef } from "react";

import FlipCard from "./FlipCard";

import fetchSkill from "../../hooks/fetchSkill";

import styles from "../../styles/SkillsDeck.module.css";

const SkillsDeck = () => {
  const [flipped, setFlipped] = useState(false);
  const [lastCard, setLastCard] = useState(false);
  const [stacked, setStacked] = useState(false);
  const [skill, setSkill] = useState(null);

  const isMounted = useRef(false);

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
    let { currentSkill, lastSkill } = fetchSkill();
    if (lastSkill === true) {
      setLastCard(true);
    } else {
    }
    setSkill(currentSkill);
  };

  return (
    <div className={styles.deckContainer}>
      {lastCard ? null : <div className={styles.secondCard}></div>}
      {lastCard ? null : (
        <div className={styles.topCard} onClick={handleFlip}></div>
      )}
      {flipped ? <FlipCard skill={skill} /> : null}
    </div>
  );
};

export default SkillsDeck;
