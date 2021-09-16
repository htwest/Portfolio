import styles from "../../styles/Skills/StackedCard.module.css";

const StackedCard = ({ prevSkill }) => {
  return (
    <div className={styles.stackedCard}>
      <img className={styles.img} src="Skills/cardFront.png" alt="card-front" />
      <h1 className={styles.skill}>{prevSkill}</h1>
    </div>
  );
};

export default StackedCard;
