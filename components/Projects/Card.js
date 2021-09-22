import { useState } from "react";

import styles from "../../styles/Projects/Card.module.css";

const Card = ({ handleClick, project }) => {
  const [selected, setSelected] = useState(false);

  const hover = () => {
    setSelected(!selected);
  };

  return (
    <div
      className={selected ? styles.selectedCard : styles.card}
      onMouseEnter={hover}
      onMouseLeave={hover}
      onClick={() => handleClick(project)}
    ></div>
  );
};

export default Card;
