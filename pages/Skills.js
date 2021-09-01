import { useState } from "react";
import fetchSkill from "../hooks/fetchSkill";

import styles from "../styles/Skills.module.css";

const Skills = ({ openNav }) => {
  const [skill, setSkill] = useState(null);

  const getSkill = () => {
    let skill = fetchSkill() || 1;
    console.log(skill);
    setSkill(skill);
  };

  return (
    <div className={openNav ? styles.containerOpen : styles.containerClose}>
      <div className={styles.bodyContainer}>
        <div>
          <h1>GENERATE SKILL</h1>
          <button onClick={getSkill}>Click</button>
        </div>
        <div>
          <h3>The Skill Is</h3>
          <p>{skill}</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
