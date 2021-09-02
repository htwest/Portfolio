import { useState } from "react";

import styles from "../styles/Test.module.css";

const Test = ({ openNav }) => {
  return (
    <div className={openNav ? styles.containerOpen : styles.containerClose}>
      <div className={styles.bodyContainer}>
        <div className={styles.deckContainer}>
          <div className={styles.topCard}></div>
          <div className={styles.secondCard}></div>
        </div>
      </div>
    </div>
  );
};

export default Test;
