import styles from "@/styles/about/Skills.module.css";

export default function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.skillsDiv}>
        <h2>Skills - Proficiency / Confidence</h2>
        <div className={styles.skills}>
          <div className={styles.skill}>Python</div>
          <div className={styles.skill}>JavaScript</div>
          <div className={styles.skill}>MySQL</div>
          <div className={styles.skill}>HTML & CSS</div>
          <div className={styles.skill}>Java</div>
        </div>
      </div>
    </div> 
  )
}