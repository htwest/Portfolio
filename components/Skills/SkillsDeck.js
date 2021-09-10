import { useState, useEffect, useRef } from "react";

import FlipCard from "./FlipCard";

import fetchSkill from "../../hooks/fetchSkill";

import styles from "../../styles/SkillsDeck.module.css";

const SkillsDeck = () => {
  const [flipped, setFlipped] = useState(false);
  const [stacked, setStacked] = useState(false);
  const [skill, setSkill] = useState(null);

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      if (skill !== undefined) {
        setFlipped(true);
      }
    } else {
      isMounted.current = true;
    }
  }, [skill]);

  const handleFlip = () => {
    let currentSkill = fetchSkill();
    setSkill(currentSkill);
  };

  return (
    <div className={styles.deckContainer}>
      <div className={styles.secondCard}></div>
      <div className={styles.topCard} onClick={handleFlip}></div>
      {flipped ? <FlipCard skill={skill} /> : null}
    </div>
  );
};

export default SkillsDeck;
