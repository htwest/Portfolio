import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>
          <p>TESTER TESTER</p>
          <p>TEST ALL THE THINGS</p>
        </div>
        <div className={styles.img}>
          <img src="/Smiley.png"></img>
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.bio}>
          <h5 id="about-me">About Me</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex
            neque, tempor et diam ac, sodales commodo felis. Maecenas maximus
            nulla a est pulvinar, at facilisis nunc molestie. Nunc hendrerit non
            velit at iaculis. Nulla finibus metus eget quam fermentum, at
            malesuada justo porttitor. Aenean finibus nisl et mattis imperdiet.
            Pellentesque vel congue mi. Etiam sed venenatis erat.
          </p>
          <br />
          <p>
            Nunc et elementum ante. Proin feugiat finibus sodales. Maecenas eget
            lacus ligula. Proin dapibus, dui sit amet suscipit consectetur,
            nulla ex tempus enim, vel laoreet elit ex ac quam. Mauris mi augue,
            cursus vitae justo at, lacinia tempor augue. Curabitur purus erat,
            congue non porta in, facilisis in risus. Praesent euismod vel odio a
            feugiat. Aenean tincidunt, metus id pretium gravida, augue sapien
            consequat eros, a mollis neque velit in mauris. Sed egestas tortor
            at eros pellentesque vestibulum. Proin vulputate condimentum diam,
            in ullamcorper nunc tempus in. Aenean at eros mi. Donec laoreet,
            orci in aliquet venenatis, ante lectus imperdiet nulla, id semper
            sapien felis quis mauris. Donec non lectus ut augue lobortis
            vestibulum. In convallis felis lectus, sed aliquam velit accumsan a.
            Vestibulum eu vestibulum nulla, sed suscipit mauris.
          </p>
        </div>
      </div>
    </div>
  );
}
