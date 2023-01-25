import styles from "@/styles/about/AboutMe.module.css"
import Image from "next/image";
import sharePic from "/public/share.png";

export default function AboutMe() {
  return (
    <div className={styles.aboutMeContainer}>
      <h1>Hello it&apos;s Robin</h1>
      <p>
        Hi there! I&apos;m Robin, a software engineer soon to graduate from
        <b> Linnaeus University</b> with a <b>B.Sc in Data Science</b>. I&apos;ve
        mostly been working with <i>Java, Vanilla Javascript, Python and MySQL</i>.
        Work has been spread around in different areas such as web development,
        data science and machine learning. I&apos;ve also been working with
        different frameworks such as
        <i> React, Next.js</i> and looking forward to trying out further
        options. I&apos;m currently looking for a job as a software engineer /
        software developer.
      </p>
      <button className="shareButton">
        <Image src={sharePic} alt="Share" className={styles.shareButton} />
        Share
      </button>
    </div>
  );
}
