import styles from "./Header.module.css";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import MobileNav from "./UI/MobileNav";
import Link from "next/link";
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
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/#about">
            <li>About</li>
          </Link>
          <Link href="/#projects">
            <li>Projects</li>
          </Link>
          <Link href="/#contact">
            <li>Contact</li>
          </Link>
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
