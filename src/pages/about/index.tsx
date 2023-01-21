import styles from "@/styles/About.module.css";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.socialContainer}></div>

        <div className={styles.aboutMeContainer}>
          <h1>Hello it&apos;s Robin</h1>
          <p>
            Hi there! I&apos;m Robin, a software engineer whom just graduated
            from <b>Linnaeus University</b> with a <b>B.SC in Data Science</b>.
            I&apos;ve mostly been working in Java, Vanilla Javascript, Python
            and MySQL. Work has been spread around in different areas such as
            web development, data science and machine learning. I&apos;ve also
            been working with different frameworks such as React, Next.js and
            looking forward to trying out further options. I&apos;m currently
            looking for a job as a software engineer / software developer.
          </p>
          <button className="shareButton">
            <img src="/share.png" alt="Share" />
            Share
          </button>
        </div>

        <div className={styles.informationContainer}>
          <div className={styles.personalInformationContainer}>
            <h2>Personal Information</h2>
            <div className={styles.informationDiv}>
              <div className={styles.variableInformation}>
                <p>FULL NAME</p>
                <p>D.O.B.</p>
                <p>ADDRESS</p>
                <p>EMAIL</p>
                <p>PHONE</p>
              </div>
              <div className={styles.assignedInformation}>
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
              <div className={styles.circles}>
                <div className={styles.filledCircle}></div>
                <div className={styles.filledCircle}></div>
                <div className={styles.filledCircle}></div>
                <div className={styles.filledCircle}></div>
                <div className={styles.filledCircle}></div>
                <div className={styles.filledCircle}></div>
                <div className={styles.filledCircle}></div>
                <div className={styles.filledCircle}></div>
                <div className={styles.filledCircle}></div>
                <div className={styles.unfilledCircle}></div>
                <div>fluent</div>
              </div>
              <p>Swedish</p>
              <div className={styles.circles}>
                <div className={styles.filledCircle}></div>
                <div className={styles.filledCircle}></div>
                <div className={styles.filledCircle}></div>
                <div className={styles.filledCircle}></div>
                <div className={styles.filledCircle}></div>
                <div className={styles.filledCircle}></div>
                <div className={styles.filledCircle}></div>
                <div className={styles.filledCircle}></div>
                <div className={styles.filledCircle}></div>
                <div className={styles.filledCircle}></div>
                <div>native</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}