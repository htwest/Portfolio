import CardHand from "../components/Links/CardHand";
import styles from "../styles/Links/Links.module.css";

const Links = ({ openNav }) => {
  return (
    <div className={openNav ? styles.containerOpen : styles.containerClose}>
      <div className="animations">
        <img src="/Links/Links.png" className={styles.boxOne} />
        <img src="/Links/Links.png" className={styles.boxTwo} />
        <img src="/Links/Links.png" className={styles.boxThree} />
      </div>
      <CardHand />
    </div>
  );
};

export default Links;
