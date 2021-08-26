import styles from "../styles/Links.module.css";

const Links = ({ openNav }) => {
  return (
    <div className={openNav ? styles.containerOpen : styles.containerClose}>
      <div className={styles.boxOne}></div>
      <div className={styles.boxTwo}></div>
      <div className={styles.boxThree}></div>
    </div>
  );
};

export default Links;
