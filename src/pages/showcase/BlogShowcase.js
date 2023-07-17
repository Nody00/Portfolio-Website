import Header from "@/components/Header";
import styles from "./BlogShowcase.module.css";
const BlogShowcase = () => {
  return (
    <>
      <Header />

      <div className="container">
        {/* hero component */}
        <div className={styles.hero}>
          <div className={styles.bigHeroText}>Blog app</div>
          <div className={styles.smallHeroText}>
            Made with <span>typescript</span>
          </div>
        </div>

        {/* zig zag component */}

        <div className={styles.zigZagContainer}>
          {/*  */}
          <div className={styles.zigZagItem}>
            <div className={styles.zigZagImageBox}>image box</div>
            <div className={styles.zigZagTextBox}>text box</div>
          </div>
        </div>

        {/* some code showcases */}
      </div>
    </>
  );
};

export default BlogShowcase;
