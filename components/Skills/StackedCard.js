import styles from "../../styles/Skills/StackedCard.module.css";

const StackedCard = ({ prevSkill, prevSuit }) => {
  console.log(prevSuit);
  return (
    <div className={styles.stackedCard}>
      <p className={styles.txtTop}>
        {prevSuit}
        {prevSkill[0]}
      </p>
      <img className={styles.img} src="Skills/cardFront.png" alt="card-front" />
      <h1 className={styles.skill}>{prevSkill}</h1>
      <p className={styles.txtBottom}>
        {prevSuit}
        {prevSkill[0]}
      </p>
    </div>
  );
};

export default StackedCard;
