import styles from "../../styles/Skills/SkillCard.module.css";

const SkillCard = ({ skill }) => {
  return (
    <div className={styles.container}>
      <img src="Skills/cardFront.png" className={styles.img} />
      <h1 className={styles.skill}>{skill}</h1>
    </div>
  );
};

export default SkillCard;
