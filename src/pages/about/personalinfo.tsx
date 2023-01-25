import styles from "@/styles/about/PersonalInfo.module.css";

export default function PersonalInfo() {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.personalInfoContainer}>
        <h2>Personal Information</h2>
        <div className={styles.infoDiv}>
          <div className={styles.variableInfo}>
            <p>FULL NAME</p>
            <p>D.O.B.</p>
            <p>ADDRESS</p>
            <p>EMAIL</p>
            <p>PHONE</p>
          </div>
          <div className={styles.assignedInfo}>
            <p>Robin Svensson</p>
            <p>March 1995</p>
            <p>Kalmar, Sweden</p>
            <p>robin.svensson.ee11a@gmail.com</p>
            <p>+46 724 488 735</p>
          </div>
        </div>
      </div>
      <div className={styles.languagesContainer}>
        <h2>Languages</h2>
        <div className={styles.languageDiv}>
          <p>English</p>
          <div className={styles.circles} id="english">
            <span className={styles.filledCircle}></span>
            <span className={styles.filledCircle}></span>
            <span className={styles.filledCircle}></span>
            <span className={styles.filledCircle}></span>
            <span className={styles.filledCircle}></span>
            <span className={styles.filledCircle}></span>
            <span className={styles.filledCircle}></span>
            <span className={styles.filledCircle}></span>
            <span className={styles.filledCircle}></span>
            <span className={styles.unfilledCircle}></span>
            <div>fluent</div>
          </div>
          <p>Swedish</p>
          <div className={styles.circles} id="swedish">
            <span className={styles.filledCircle}></span>
            <span className={styles.filledCircle}></span>
            <span className={styles.filledCircle}></span>
            <span className={styles.filledCircle}></span>
            <span className={styles.filledCircle}></span>
            <span className={styles.filledCircle}></span>
            <span className={styles.filledCircle}></span>
            <span className={styles.filledCircle}></span>
            <span className={styles.filledCircle}></span>
            <span className={styles.filledCircle}></span>
            <div>native</div>
          </div>
        </div>
      </div>
    </div>
  );
}
