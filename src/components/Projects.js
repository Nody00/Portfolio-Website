import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.projectsContainer} id="projects">
      <div className="container">
        <div className={styles.titleTextBox}>
          <h2 className="heading-secondary margin-btm-medium">Projects</h2>
          <p className="subheading margin-btm-medium">View my work</p>
        </div>

        <div className={styles.grid}>
          {/* ITEM 1 */}
          <div className={styles.imageContainer}>
            <img src="/SkateStoreDone.jpg" alt="" className={styles.image} />
          </div>
          <div className={styles.textBox}>
            <p className={styles.title}>Skateboard Ecommerce app</p>
            <p className={styles.description}>
              Fully fledged ecommerce fullstack app,made using
              React,Nextjs,MongoDB. I wrote my own custom APIs which allow
              communication with the MongoDB database.
            </p>
            <div className={styles.buttonContainer}>
              <a href="https://github.com/Nody00/SkateStore">Github</a>
              <a href="https://dazzling-nougat-d4e0fa.netlify.app/">Live</a>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className={styles.imageContainer}>
            <img src="/OffroadingDone.jpg" alt="" className={styles.image} />
          </div>
          <div className={styles.textBox}>
            <p className={styles.title}>Offroading Adventures Fullstack app</p>
            <p className={styles.description}>
              Offroading Adventures website made with React,Nextjs and MongoDB.
              Data fetching from the database is implemented as well as
              submitting reviews to the MongoDB database.
            </p>
            <div className={styles.buttonContainer}>
              <a href="https://github.com/Nody00/OffroadAdventures">Github</a>
              <a href="https://inquisitive-moxie-c60a06.netlify.app/">Live</a>
            </div>
          </div>
          {/* ITEM 3 */}

          <div className={styles.imageContainer}>
            <img src="/BankingDone.jpg" alt="" className={styles.image} />
          </div>
          <div className={styles.textBox}>
            <p className={styles.title}>AdventBanking Website</p>
            <p className={styles.description}>
              A front end website made for a fictional bank.Made with just
              vanilla JavaScript,HTML,CSS. Using best modern practises,SEO
              optimizations and responsive design.
            </p>
            <div className={styles.buttonContainer}>
              <a href="https://github.com/Nody00/BankWebsiteDemo">Github</a>
              <a href="https://dinosdemoappv1.netlify.app/">Live</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;