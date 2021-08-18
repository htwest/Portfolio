import { useState } from "react";
import styles from "../styles/Navbar.module.css";

import {
  FaAlignCenter,
  FaJediOrder,
  FaBalanceScale,
  FaChessKnight,
} from "react-icons/fa";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const openAndClose = (e) => {
    console.log("works");
    setOpenNav(!openNav);
  };

  return (
    <div className={styles.sidebar}>
      <nav>
        <FaAlignCenter
          className={styles.sidebarIcon}
          size={"15%"}
          onClick={openAndClose}
        />
        <div>
          <div className={styles.icons}>
            <FaJediOrder size={40} />
            {openNav ? <span> Go Here</span> : null}
          </div>
          <div className={styles.icons}>
            <FaBalanceScale size={40} />
            {openNav ? <span> Another Link</span> : null}
          </div>
          <div className={styles.icons}>
            <FaChessKnight size={40} />
            {openNav ? <span> What is This?</span> : null}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
