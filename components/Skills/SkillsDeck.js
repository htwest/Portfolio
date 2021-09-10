import { useState } from "react";

import FlipCard from "./FlipCard";

import styles from "../../styles/SkillsDeck.module.css";

const SkillsDeck = () => {
  const [flipped, setFlipped] = useState(false);
  const [stacked, setStacked] = useState(false);

  const handleFlip = () => {
    setFlipped(true);
  };

  return (
    <div className={styles.deckContainer}>
      <div className={styles.secondCard}></div>
      <div className={styles.topCard} onClick={handleFlip}></div>
      {flipped ? <FlipCard /> : null}
    </div>
  );
};

export default SkillsDeck;
