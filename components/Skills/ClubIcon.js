import styles from "../../styles/Skills/ClubIcon.module.css";

const ClubIcon = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.text}>Pick A Card</h3>
      <img className={styles.icon} src="/Skills/ClubIcon.png" />
    </div>
  );
};

export default ClubIcon;
