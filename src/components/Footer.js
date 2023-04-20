import styles from "./Footer.module.css";
import { IoLogoGithub } from "react-icons/io5";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.topTextBox}>
            <p className={styles.name}>DINO KRCIĆ</p>
            <p className={styles.myText}>
              A web developer focused on reliabilty,speed,design and the success
              of the overall product.
            </p>
            <a href="https://github.com/Nody00" className={styles.iconLink}>
              <IoLogoGithub className={styles.icon} />
            </a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; Copyright 2023. Made by Dino Krcić</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
