import { useState } from "react";

import SkillsDeck from "../components/Skills/SkillsDeck";
import Layout from "../components/Skills/Layout";

import styles from "../styles/Skills/Skills.module.css";

const Test = ({ openNav }) => {
  const [layout, setLayout] = useState(false);

  return (
    <div className={openNav ? styles.containerOpen : styles.containerClose}>
      <div className={styles.bodyContainer}>
        {layout ? null : <SkillsDeck />}
      </div>
    </div>
  );
};

export default Test;
