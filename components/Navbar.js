import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

import {
  FaAlignCenter,
  FaInfoCircle,
  FaAt,
  FaChessKnight,
  FaJsSquare,
} from "react-icons/fa";

const Navbar = ({ openNav, setOpenNav }) => {
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
              <FaInfoCircle size={50} />
            </Link>
            {openNav ? <span> About</span> : null}
          </div>
          <div className={styles.icons}>
            <Link href="/Links">
              <FaAt size={50} />
            </Link>
            {openNav ? <span> Links</span> : null}
          </div>
          <div className={styles.icons}>
            <Link href="/Skills">
              <FaChessKnight size={50} />
            </Link>
            {openNav ? <span> Skills</span> : null}
          </div>
          <div className={styles.icons}>
            <Link href="/Projects">
              <FaJsSquare size={50} />
            </Link>
            {openNav ? <span> Projects</span> : null}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
