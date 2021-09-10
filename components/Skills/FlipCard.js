import styles from "../../styles/FlipCard.module.css";

const Flipcard = ({ skill }) => {
  console.log(skill);
  return (
    <div className={styles.flipCard}>
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

// <div className={styles.cardContainer}>
//       <div className={styles.card}>
//         <figure className={styles.front}>
//           <h1>Front Card</h1>
//           <p>Lorem impsum fhfhdkfj </p>
//         </figure>
//         <figure className={styles.back}>
//           <h1>Back Card</h1>
//           <p>More Lorem impsum</p>
//         </figure>
//       </div>
//     </div>
