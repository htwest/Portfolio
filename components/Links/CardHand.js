import { useState } from "react";
import styles from "../../styles/Links/CardHand.module.css";

const CardHand = () => {
  const [cardOne, setCardOne] = useState(false);
  const [cardTwo, setCardTwo] = useState(false);
  const [cardThree, setCardThree] = useState(false);

  const hover = (e) => {
    let card = e.target.id;
    if (card === "imgOne") {
      setCardOne(!cardOne);
      console.log(cardOne);
    }
    if (card === "imgTwo") {
      setCardTwo(!cardTwo);
      console.log(cardTwo);
    }
    if (card === "imgThree") {
      setCardThree(!cardThree);
      console.log(cardThree);
    }
  };

  return (
    <div className={styles.cardContainer}>
      <div
        id="cardOne"
        className={cardOne ? styles.cardHovered : styles.cardOne}
        onMouseEnter={hover}
        onMouseLeave={hover}
      >
        <img
          src="/Links/LinkedINCard.png"
          alt="linkedIn"
          id="imgOne"
          onMouseEnter={hover}
          onMouseLeave={hover}
        />
      </div>
      <div
        id="cardTwo"
        className={cardTwo ? styles.cardHovered : styles.cardTwo}
        onMouseEnter={hover}
        onMouseLeave={hover}
      >
        <img
          src="/Links/GithubCard.png"
          alt="Github"
          id="imgTwo"
          onMouseEnter={hover}
          onMouseLeave={hover}
        />
      </div>
      <div
        id="cardThree"
        className={cardThree ? styles.cardHovered : styles.cardThree}
        onMouseEnter={hover}
        onMouseLeave={hover}
      >
        <img
          src="/Links/EmailCard.png"
          alt="Email"
          id="imgThree"
          onMouseEnter={hover}
          onMouseLeave={hover}
        />
      </div>
    </div>
  );
};

export default CardHand;
