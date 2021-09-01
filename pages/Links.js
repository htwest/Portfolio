import { useState } from "react";
import styles from "../styles/Links.module.css";

const Links = ({ openNav }) => {
  const [cardOne, setCardOne] = useState(false);
  const [cardTwo, setCardTwo] = useState(false);
  const [cardThree, setCardThree] = useState(false);

  const hover = (e) => {
    let card = e.target.id;
    if (card === "cardOne") {
      setCardOne(!cardOne);
      console.log(cardOne);
    }
    if (card === "cardTwo") {
      setCardTwo(!cardTwo);
      console.log(cardTwo);
    }
    if (card === "cardThree") {
      setCardThree(!cardThree);
      console.log(cardThree);
    }
  };

  return (
    <div className={openNav ? styles.containerOpen : styles.containerClose}>
      <div className="animations">
        <div className={styles.boxOne}></div>
        <div className={styles.boxTwo}></div>
        <div className={styles.boxThree}></div>
      </div>
      <div className={styles.cardContainer}>
        <div
          id="cardOne"
          className={cardOne ? styles.cardHovered : styles.cardOne}
          onMouseEnter={hover}
          onMouseLeave={hover}
        >
          <p>Test1</p>
        </div>
        <div
          id="cardTwo"
          className={cardTwo ? styles.cardHovered : styles.cardTwo}
          onMouseEnter={hover}
          onMouseLeave={hover}
        >
          <p>Test2</p>
        </div>
        <div
          id="cardThree"
          className={cardThree ? styles.cardHovered : styles.cardThree}
          onMouseEnter={hover}
          onMouseLeave={hover}
        >
          <p>Test3</p>
        </div>
      </div>
    </div>
  );
};

export default Links;
