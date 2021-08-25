import styles from "../styles/Links.module.css";

const Links = ({ openNav }) => {
  return (
    <div className={openNav ? styles.containerOpen : styles.containerClose}>
      <div className={styles.box}></div>
    </div>
  );
};

export default Links;
