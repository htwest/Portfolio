import { useState } from "react";

import styles from "../../styles/Projects/Card.module.css";

const Card = ({ handleClick }) => {
  const [selected, setSelected] = useState(false);

  const hover = () => {
    setSelected(!selected);
  };

  return (
    <div
      className={selected ? styles.selectedCard : styles.card}
      onMouseEnter={hover}
      onMouseLeave={hover}
      onClick={handleClick}
    ></div>
  );
};

export default Card;
