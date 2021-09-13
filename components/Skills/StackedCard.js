import styles from "../../styles/Skills/StackedCard.module.css";

const StackedCard = ({ prevSkill }) => {
  return (
    <div className={styles.stackedCard}>
      <h1 className={styles.inner}>{prevSkill}</h1>
    </div>
  );
};

export default StackedCard;
