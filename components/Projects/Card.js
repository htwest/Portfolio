import { useState, useEffect } from "react";

import fetchSuite from "../../hooks/fetchSuite.js";

import styles from "../../styles/Projects/Card.module.css";

const Card = ({ handleClick, project }) => {
  const [selected, setSelected] = useState(false);
  const [suit, setSuit] = useState(false);

  const currentSuit = fetchSuite();

  useEffect(() => {
    setSuit(currentSuit);
  }, [project]);
  const imgSrc = `./Projects/${project.title}.gif`;

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
          <div>
            {suit}
            {project.title}
          </div>
        </div>
        <div className={styles.gifBox}>
          <img src={imgSrc} />
        </div>
        <div className={styles.textBoxBottom}>
          <div>
            {suit}
            {project.title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
