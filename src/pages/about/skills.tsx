import styles from "@/styles/about/Skills.module.css";

export default function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.skillsDiv}>
        <h2>Skills</h2>
        <h3>Proficiency / Confidence</h3>
        <div className={styles.skills}>
          <div className={styles.skill}>
           <p>Python</p>
          </div>
          <div className={styles.skill}>
            <p>JavaScript</p>
          </div>
          <div className={styles.skill}>
            <p>MySQL</p>
          </div>
          <div className={styles.skill}>
            <p>HTML & CSS</p>
          </div>
          <div className={styles.skill}>
            <p>Java</p>
          </div>
        </div>
      </div>
    </div> 
  )
}