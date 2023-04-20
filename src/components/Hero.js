import styles from "./Hero.module.css";
import { MdOutlineSouth } from "react-icons/md";
const Hero = () => {
  return (
    <div className={styles.heroSection} id="hero">
      <div className="container">
        <div className={styles.heroContainer}>
          <h1 className="heading-primary">
            <span className={styles.nameSpan}>Dino Krcić</span> a web developer
          </h1>
          <p className={styles.smallText}>
            A web developer focusing on building beautiful, functional and fast
            web applications
          </p>
          <a href="#projects" className={styles.bigButton}>
            Projects
          </a>

          <a href="#about" className={styles.mouse}>
            <MdOutlineSouth className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
