import styles from "@/styles/about/PersonalInfo.module.css";

export default function PersonalInfo() {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.personalInfoContainer}>
        <h2>Personal Information</h2>
        <div className={styles.infoDiv}>
          <div className={styles.infoRow}>
            <p>FULL NAME</p>
            <p className={styles.infoIndentedText}>Robin Svensson</p>
          </div>
          <div className={styles.infoRow}>
            <p>D.O.B.</p>
            <p className={styles.infoIndentedText}>March 1995</p>
          </div>
          <div className={styles.infoRow}>
            <p>ADDRESS</p>
            <p className={styles.infoIndentedText}>Kalmar, Sweden</p>
          </div>
          <div className={styles.infoRow}>
            <p>EMAIL</p>
            <p className={styles.infoIndentedText}>robin.svensson.ee11a@gmail.com</p>
          </div>
          <div className={styles.infoRow}>
            <p>PHONE</p>
            <p className={styles.infoIndentedText}>+46 724 488 735</p>
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
