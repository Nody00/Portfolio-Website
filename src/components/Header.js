import styles from "./Header.module.css";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import MobileNav from "./UI/MobileNav";
const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  function show() {
    setShowMobileNav(true);
  }

  function hideMobileNav() {
    setShowMobileNav(false);
  }

  return (
    <div className={styles.headerContainer}>
      <p className={styles.name}></p>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <a href="#hero">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </nav>

      <div onClick={show} className={styles.mobileNavBtn}>
        <IoMenu className={styles.mobileIcon} />
      </div>
      <MobileNav shown={showMobileNav} onHide={hideMobileNav} />
    </div>
  );
};

export default Header;
