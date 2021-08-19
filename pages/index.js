import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>Hello My Name is Hayden West</p>
        <p>I'm a Full Stack Engineer</p>
        <div className={styles.imgContainer}>
          <img src="/Smiley.png"></img>
        </div>
      </div>
    </div>
  );
}
