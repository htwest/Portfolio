import styles from "../../styles/Skills/SkillCard.module.css";
import fetchSuite from "../../hooks/fetchSuite.js";

const SkillCard = ({ skill }) => {
  const suit = fetchSuite();

  return (
    <div className={styles.container}>
      <p className={styles.txtTop}>
        {suit}
        {skill[0]}
      </p>
      <img className={styles.img} src="Skills/cardFront.png" alt="card-front" />
      <h1 className={styles.skill}>{skill}</h1>
      <p className={styles.txtBottom}>
        {suit}
        {skill[0]}
      </p>
    </div>
  );
};

export default SkillCard;
