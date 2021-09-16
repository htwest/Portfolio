import fetchAllSkills from "../../hooks/fetchAllSkills";
import SkillCard from "./SkillCard";

import styles from "../../styles/Skills/Layout.module.css";

const Layout = () => {
  let skills = fetchAllSkills();
  return (
    <div className={styles.container}>
      {skills.map((skill, index) => (
        <SkillCard skill={skill} key={index} />
      ))}
    </div>
  );
};

export default Layout;
