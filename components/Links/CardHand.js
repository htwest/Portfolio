import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Links/CardHand.module.css";

import MailModal from "./MailModal";

const CardHand = () => {
  const [cardOne, setCardOne] = useState(false);
  const [cardTwo, setCardTwo] = useState(false);
  const [cardThree, setCardThree] = useState(false);
  const [modal, setModal] = useState(false);

  const hover = (e) => {
    let card = e.target.id;
    if (card === "imgOne") {
      setCardOne(!cardOne);
    }
    if (card === "imgTwo") {
      setCardTwo(!cardTwo);
    }
    if (card === "imgThree") {
      setCardThree(!cardThree);
    }
  };

  const handleClick = () => {
    setModal(!modal);
  };

  return (
    <div className={styles.cardContainer}>
      <Link href="https://www.linkedin.com/in/hayden-west-a488181b2">
        <div
          id="cardOne"
          className={cardOne ? styles.cardHovered : styles.cardOne}
        >
          <img
            src="/Links/LinkedINCard.png"
            alt="linkedIn"
            id="imgOne"
            onMouseEnter={hover}
            onMouseLeave={hover}
          />
        </div>
      </Link>
      <Link href="https://github.com/htwest">
        <div
          id="cardTwo"
          className={cardTwo ? styles.cardHovered : styles.cardTwo}
        >
          <img
            src="/Links/GithubCard.png"
            alt="Github"
            id="imgTwo"
            onMouseEnter={hover}
            onMouseLeave={hover}
          />
        </div>
      </Link>
      <div
        id="cardThree"
        className={cardThree ? styles.cardHovered : styles.cardThree}
      >
        <img
          src="/Links/EmailCard.png"
          alt="Email"
          id="imgThree"
          onMouseEnter={hover}
          onMouseLeave={hover}
          onClick={handleClick}
        />
      </div>
      {modal ? <MailModal handleClick={handleClick} /> : null}
    </div>
  );
};

export default CardHand;
