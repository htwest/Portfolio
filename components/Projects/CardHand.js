import { useState } from "react";

import Card from "./Card";

import styles from "../../styles/Projects/CardHand.module.css";

const CardHand = ({ handleClick }) => {
  const [cardOne, setCardOne] = useState(false);
  const [cardTwo, setCardTwo] = useState(false);
  const [cardThree, setCardThree] = useState(false);
  const [cardFour, setCardFour] = useState(false);

  return (
    <div className={styles.hand}>
      <Card handleClick={handleClick} />
      <Card handleClick={handleClick} />
      <Card handleClick={handleClick} />
      <Card handleClick={handleClick} />
    </div>
  );
};

export default CardHand;
