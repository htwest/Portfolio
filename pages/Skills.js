import { useState } from "react";
import Image from "next/image";

import SkillsDeck from "../components/Skills/SkillsDeck";
import Layout from "../components/Skills/Layout";

import fetchSkill from "../hooks/fetchSkill";

import styles from "../styles/Skills/Skills.module.css";

const Test = ({ openNav }) => {
  const [layout, setLayout] = useState(false);

  const handleClick = () => {
    fetchSkill("reset");
    setLayout(!layout);
  };

  return (
    <div className={openNav ? styles.containerOpen : styles.containerClose}>
      <div className={styles.bodyContainer}>
        {layout ? null : <SkillsDeck />}
        {layout ? <Layout /> : null}
        <img
          className={styles.dealerChip}
          src="/Skills/DealerChip.png"
          alt="dealerChip"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Test;
