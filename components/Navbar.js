import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

import {
  FaAlignCenter,
  FaJediOrder,
  FaBalanceScale,
  FaChessKnight,
} from "react-icons/fa";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const openAndClose = () => {
    setOpenNav(!openNav);
  };

  return (
    <div className={openNav ? styles.sidebarOpen : styles.sidebarClose}>
      <nav>
        <FaAlignCenter
          className={styles.sidebarIcon}
          size={40}
          onClick={openAndClose}
        />
        <div>
          <div className={styles.icons}>
            <Link href="/#about-me">
              <FaJediOrder size={40} />
            </Link>
            {openNav ? <span> About</span> : null}
          </div>
          <div className={styles.icons}>
            <FaBalanceScale size={40} />
            {openNav ? <span> Links</span> : null}
          </div>
          <div className={styles.icons}>
            <FaChessKnight size={40} />
            {openNav ? <span> Skills</span> : null}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
