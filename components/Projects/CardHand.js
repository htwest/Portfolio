import { useState } from "react";

import Card from "./Card";
import projects from "../../data/projects";
import styles from "../../styles/Projects/CardHand.module.css";

const CardHand = ({ handleClick }) => {
  const [cardOne, setCardOne] = useState(false);
  const [cardTwo, setCardTwo] = useState(false);
  const [cardThree, setCardThree] = useState(false);
  const [cardFour, setCardFour] = useState(false);

  return (
    <div className={styles.hand}>
      <Card handleClick={handleClick} project={projects.weather} />
      <Card handleClick={handleClick} project={projects.catwalk} />
      <Card handleClick={handleClick} project={projects.gallery} />
    </div>
  );
};

export default CardHand;
