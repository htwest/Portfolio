import styles from "../../styles/Links/MailModal.module.css";

const MailModal = ({ handleClick }) => {
  const closeModal = () => {
    handleClick();
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal} onClick={closeModal}>
        <div className={styles.text}>
          <h2>Get in Touch!</h2>
          <h5>htwest93@gmail.com</h5>
        </div>
      </div>
    </div>
  );
};

export default MailModal;
