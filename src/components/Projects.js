import styles from "./Projects.module.css";
import Link from "next/link";

const Projects = () => {
  return (
    <div className={styles.projectsContainer} id="projects">
      <div className="container">
        <div className={styles.titleTextBox}>
          <h2 className="heading-secondary margin-btm-medium">Projects</h2>
          <p className="subheading margin-btm-medium">View my work</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.imageContainer}>
            <img
              src="/AutoStoreDoneFinal.jpg"
              alt=""
              className={styles.image}
            />
          </div>

          <div className={styles.textBox}>
            <p className={styles.title}>Blog (MERN STACK with Typescript)</p>
            <p className={styles.description}>
              Fullstack app built with React on the frontend and Node on the
              backend. I made extensive use of typescript on both fronts of the
              app. This app was mostly a way for me to learn how to work with
              typescript and how to make a small scale social media app. The
              frontend talks to a set of API end points which do everything from
              creating a new user,authenticating existing users and
              writing,deleting,updateing the database,for which I used MongoDB.
            </p>
            <div className={styles.buttonContainer}>
              <a href="https://github.com/Nody00/Blog-TypeScriptReact-Frontend">
                Frontend Github
              </a>
              <a href="https://github.com/Nody00/Blog-TypescriptNode-Backend">
                Backend Github
              </a>
              <a href="https://blog-type-script-react-frontend.vercel.app/">
                Live
              </a>
            </div>
          </div>
          {/* ITEM 5 */}
          <div className={styles.imageContainer}>
            <img src="/BlogDone.jpg" alt="" className={styles.image} />
          </div>

          <div className={styles.textBox}>
            <p className={styles.title}>AutoStore Ecommerce(MERN STACK)</p>
            <p className={styles.description}>
              A fullstack website made for a ecommerce business.Made using the
              MERN stack,on the frontend made with ReactJS, the backend API was
              developed with NodeJS, Express.The frontend and backend are firmly
              separated,authentication was implemented using JWT(json web
              tokens).The frontend is hosted on Netlify while the backend API
              resides on Renders servers.
            </p>
            <div className={styles.buttonContainer}>
              <a href="https://github.com/Nody00/AutoParts-React-Frontend">
                Frontend Github
              </a>
              <a href="https://github.com/Nody00/AutoParts-NodeJS-Backend">
                Backend Github
              </a>
              <a href="https://capable-donut-e0ac54.netlify.app/">Live</a>
            </div>
          </div>

          {/* ITEM 1 */}
          <div className={styles.imageContainer}>
            <img src="/SkateStoreDone.jpg" alt="" className={styles.image} />
          </div>
          <div className={styles.textBox}>
            <p className={styles.title}>Skateboard Ecommerce App</p>
            <p className={styles.description}>
              Fully fledged ecommerce fullstack app,made using
              React,Nextjs,MongoDB. I wrote my own custom APIs which allow
              communication with the MongoDB database. Authentication and route
              protection is implemented using NextAuth,allowing for custom
              credentials or Google account authentication.
            </p>
            <div className={styles.buttonContainer}>
              <a href="https://github.com/Nody00/SkateStore">Github</a>
              <a href="https://dazzling-nougat-d4e0fa.netlify.app/">Live</a>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className={styles.imageContainer}>
            <img src="/GmailDone.jpg" alt="" className={styles.image} />
          </div>
          <div className={styles.textBox}>
            <p className={styles.title}>Gmail Clone</p>
            <p className={styles.description}>
              Gmail clone made with Reactjs and React Router,a recreation of the
              gmail UI and UX,with Firebase integration.Firebase Realtime
              database used for email storage.
            </p>
            <div className={styles.buttonContainer}>
              <a href="https://github.com/Nody00/gmailClone">Github</a>
              <a href="https://shiny-lily-b48a3d.netlify.app/">Live</a>
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

          {/* ITEM 4 */}

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
