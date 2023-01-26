import Image from "next/image"
import styles from "@/styles/about/Socials.module.css"
import profilePic from "/public/profile.jpg";
import linkedin from "/public/linkedin.svg";
import github from "/public/github.svg";

export default function Socials () {
  return (
    <div className={styles.socialContainer}>
          <div className={styles.socialDiv}>
            <Image
              src={profilePic}
              alt="Profile"
              className={styles.profilePicture}
            />
            <h3>ROBIN SVENSSON</h3>
            <p>Software Engineer</p>
            <div className={styles.socialIcons}>
              <a
                href="https://www.linkedin.com/in/robin-svensson-701366151/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={linkedin}
                  alt="Twitter"
                  className={styles.socialIcon}
                />
              </a>
              <a
                href="https://www.github.com/rynosuki/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={github}
                  alt="Github"
                  className={styles.socialIcon}
                />
              </a>
            </div>
          </div>
          <div className={styles.downloadCV}>
            <button className={styles.downloadButton}>DOWNLOAD CV</button>
          </div>
        </div>
  )
}