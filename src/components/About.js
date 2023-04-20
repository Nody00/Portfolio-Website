import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer} id="about">
      <div className="container">
        <div className={styles.titleText}>
          <h2 className="heading-secondary margin-btm-small">ABOUT ME</h2>
          <p className="subheading margin-btm-medium">Knowladge and skills</p>
          <p className={styles.smallTitleText}>
            Here you will find more information about me, what I do, and my
            skills in programming
          </p>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.knowTextBox}>
            <p className={styles.aboutTitle}>Learn more about me!</p>
            <p className={styles.aboutParagraph}>
              My name is Dino Krcić, I have a{" "}
              <strong>Bachelors degree in Applied Computing</strong> from the
              Montenegro University of Electrical Engineering. In my time at
              university I learned to use many web technologies and made many
              projects relating to{" "}
              <strong>
                Data structures and Algorithms, Computer Networking, Data and
                Signal Compression.
              </strong>
            </p>
            <p className={styles.aboutParagraph}>
              I have always had a passion for programming and a bit of a passion
              for minimalist design, my goal is to become a experienced and
              hopefully wise <strong>full stack web developer</strong> with many
              a project under my belt.
            </p>

            <p className={styles.aboutParagraph}>
              I make sure to be constantly learning and sharpening my skills as
              a developer. I make sure to take courses which allow me to learn
              and master particular technologies and web development skill.
            </p>

            <a href="#contact" className={styles.aboutButton}>
              Contact me
            </a>
          </div>
          <div className={styles.skillsBox}>
            <p className={styles.aboutTitle}>My skills</p>
            <div className={styles.skillsList}>
              <div className={`${styles.skill} ${styles.skillYellow}`}>
                JAVASCRIPT
              </div>
              <div className={`${styles.skill} ${styles.skillRed}`}>HTML</div>
              <div className={`${styles.skill} ${styles.skillBlue}`}>CSS</div>
              <div className={`${styles.skill} ${styles.skillBlue}`}>REACT</div>
              <div className={`${styles.skill} ${styles.skillWhite}`}>
                NEXTJS
              </div>
              <div className={`${styles.skill} ${styles.skillBlue}`}>
                OAUTH2
              </div>
              <div className={`${styles.skill} ${styles.skillGreen}`}>
                MONGODB
              </div>
              <div className={`${styles.skill} ${styles.skillRed}`}>GIT</div>
              <div className={`${styles.skill} ${styles.skillBlue}`}>
                GITHUB
              </div>
              <div className={`${styles.skill} ${styles.skillBlue}`}>
                AUTHENTICATION FLOW
              </div>
              <div className={`${styles.skill} ${styles.skillRed}`}>SEO</div>
              <div className={`${styles.skill} ${styles.skillBlue}`}>
                RESPONSIVE DESING
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
