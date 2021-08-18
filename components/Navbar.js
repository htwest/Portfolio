import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.sidebar}>
      <nav>
        <div className="logo">
          <h1>Header Bar</h1>
        </div>
        <a>Home</a>
        <a>About</a>
        <a>Other</a>
      </nav>
    </div>
  );
};

export default Navbar;
