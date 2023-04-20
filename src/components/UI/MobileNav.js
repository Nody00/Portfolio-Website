import styles from "./MobileNav.module.css";
import { IoCloseCircleSharp } from "react-icons/io5";
import { CSSTransition } from "react-transition-group";
const MobileNav = (props) => {
  function hideMobileNav() {
    props.onHide();
  }

  return (
    <CSSTransition
      in={props.shown}
      timeout={300}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "",
        enterActive: styles.enterActive,
        exit: "",
        exitActive: styles.exitActive,
      }}
    >
      <div className={styles.navContainerMobile}>
        <nav className={styles.navMobile}>
          <ul className={styles.navListMobile}>
            <a href="#hero" onClick={hideMobileNav}>
              <li>Home</li>
            </a>
            <a href="#about" onClick={hideMobileNav}>
              <li>About</li>
            </a>
            <a href="#projects" onClick={hideMobileNav}>
              <li>Projects</li>
            </a>
            <a href="#contact" onClick={hideMobileNav}>
              <li>Contact</li>
            </a>
            <li onClick={hideMobileNav}>
              <IoCloseCircleSharp className={styles.icon} />
            </li>
          </ul>
        </nav>
      </div>
    </CSSTransition>
  );
};

export default MobileNav;
