import styles from "@/styles/about/Skills.module.css";

export default function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.skillsDiv}>
        <h2>Skills</h2>
        <h4>(based on feeling of confidence in the language)</h4>
        <div className={styles.skills}>
          <div className={styles.skill}>
           <p>Python</p>
           <div className={`${styles.progressLine} ${styles.python}`}><span></span></div>
          </div>
          <div className={styles.skill}>
            <p>JavaScript</p>
            <div className={`${styles.progressLine} ${styles.javascript}`}><span></span></div>
          </div>
          <div className={styles.skill}>
            <p>MySQL</p>
            <div className={`${styles.progressLine} ${styles.mysql}`}><span></span></div>
          </div>
          <div className={styles.skill}>
            <p>HTML & CSS</p>
            <div className={`${styles.progressLine} ${styles.html}`}><span></span></div>
          </div>
          <div className={styles.skill}>
            <p>Java</p>
            <div className={`${styles.progressLine} ${styles.java}`}><span></span></div>
          </div>
        </div>
      </div>
    </div> 
  )
}