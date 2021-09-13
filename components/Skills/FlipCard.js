import styles from "../../styles/Skills/FlipCard.module.css";

const Flipcard = ({ skill }) => {
  return (
    <div className={styles.flipCard} key={skill}>
      <div className={styles.inner}>
        <div className={styles.front}></div>
        <div className={styles.back}>
          <h1>{skill}</h1>
        </div>
      </div>
    </div>
  );
};

export default Flipcard;
