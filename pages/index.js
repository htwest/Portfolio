import styles from "../styles/Home/Home.module.css";

export default function Home({ openNav }) {
  return (
    <div className={openNav ? styles.containerOpen : styles.containerClose}>
      <div className={styles.header}>
        <div className={styles.text}>
          <p>HELLO</p>
          <p>MY NAME IS HAYDEN WEST</p>
        </div>
        <div className={styles.img}>
          <img className={styles.homeCard} src="/HomeCard.png"></img>
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.bio}>
          <h3 id="about-me">About Me</h3>
          <p>
            Ever since I was young, I've enjoyed creating. Whether that be
            through writing or art, or most recently, through software, my
            passion to build has been an integral part of my life. Though I am
            new to the computer sciences, my creative energies are well suited
            to the tasks required. Combined with my prior experience with
            interacting with a demanding customer base, I feel like I am right
            at home in this field.
          </p>
          <br />
          <p>
            Motivated and eager to learn, I hope to one day channel my creative
            passion and software skills into a lifelong career
          </p>
        </div>
      </div>
    </div>
  );
}
