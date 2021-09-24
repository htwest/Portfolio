import styles from "../../styles/Skills/FlipCard.module.css";
import fetchSuite from "../../hooks/fetchSuite.js";

const Flipcard = ({ skill, suit }) => {
  return (
    <div className={styles.flipCard} key={skill}>
      <div className={styles.inner}>
        <div className={styles.front}>
          <img src="Skills/cardFinal.png" alt="card-back" />
        </div>
        <div className={styles.back}>
          <div className={styles.container}>
            <p className={styles.txtTop}>
              {suit}
              {skill[0]}
            </p>
            <img
              className={styles.img}
              src="Skills/cardFront.png"
              alt="card-front"
            />
            <h1 className={styles.skill}>{skill}</h1>
            <p className={styles.txtBottom}>
              {suit}
              {skill[0]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flipcard;
