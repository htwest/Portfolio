import Card from "./Card";

import styles from "../../styles/Projects/CardHand.module.css";

const CardHand = () => {
  return (
    <div className={styles.hand}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardHand;
