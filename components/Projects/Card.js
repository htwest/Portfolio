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
    >
      <div className={styles.cardBox}>
        <div className={styles.textBoxTop}>
          <div>{project.title}</div>
        </div>
        <div className={styles.gifBox}>{project.title}</div>
        <div className={styles.textBoxBottom}>
          <div>{project.title}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
