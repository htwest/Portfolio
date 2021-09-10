import { useState } from "react";

import FlipCard from "./FlipCard";

import styles from "../../styles/SkillsDeck.module.css";

const SkillsDeck = () => {
  const skills = ["java", "node", "HTML", "CSS"];
  let index = 0;

  const [flipped, setFlipped] = useState(false);
  const [stacked, setStacked] = useState(false);
  const [skill, setSkill] = useState(skills[0]);

  const handleFlip = () => {
    setFlipped(true);
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
