import { useState } from "react";

import SkillsDeck from "../components/Skills/SkillsDeck";

import styles from "../styles/Test.module.css";

const Test = ({ openNav }) => {
  return (
    <div className={openNav ? styles.containerOpen : styles.containerClose}>
      <div className={styles.bodyContainer}>
        <SkillsDeck />
      </div>
    </div>
  );
};

export default Test;
