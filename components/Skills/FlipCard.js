import styles from "../../styles/Skills/FlipCard.module.css";

const Flipcard = ({ skill }) => {
  return (
    <div className={styles.flipCard} key={skill}>
      <div className={styles.inner}>
        <div className={styles.front}>
          <img src="Skills/cardFinal.png" alt="card-back" />
        </div>
        <div className={styles.back}>
          <div className={styles.container}>
            <img
              className={styles.img}
              src="Skills/cardFront.png"
              alt="card-front"
            />
            <h1 className={styles.skill}>{skill}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flipcard;
