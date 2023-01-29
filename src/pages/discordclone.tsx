import styles from "@/styles/about/Discord.module.css";
import GitHub from "/public/github.svg";
import LinkedIn from "/public/linkedin.svg";
import Profile from "/public/profile.jpg";

import Image from "next/image";

export default function Discord() {
  return (
    <div id="discord" className={styles.layout}>
      <div className={styles.header}>
        <h2>Discord</h2>
      </div>

      <div className={styles.discordWrapper}>
        <div className={styles.navBar}>
          <div className={styles.channelName}>
            <Image src={GitHub} alt="GitHub" />
          </div>
          <div className={styles.channelName}>
            <Image src={LinkedIn} alt="LinkedIn" />
          </div>
          <div className={styles.channelName}>
            <Image src={Profile} alt="Profile" />
          </div>
          <div className={styles.channelName}>
            <Image src={Profile} alt="Profile" />
          </div>
          <div className={styles.channelName}>
            <Image src={Profile} alt="Profile" />
          </div>
          <div className={styles.channelName}>
            <Image src={Profile} alt="Profile" />
          </div>
          <div className={styles.channelName}>
            <Image src={Profile} alt="Profile" />
          </div>
        </div>

        <div className={styles.discordChannel}>
          <div className={styles.channelNavbar}>
            <div className={styles.channelImg}>
              <Image src={Profile} alt="Profile" />
            </div>
            <div className={styles.channels}>
              <h3>Main</h3>
              <h3>Chat</h3>
              <h3>Voice</h3>
            </div>
            <div className={styles.channelUser}>
              <Image src={Profile} alt="Profile" />
              <p>Ryno</p>
            </div>
          </div>

          <div className={styles.channelTextWindow}>
            <div className={styles.channelChatBar}>
              <div className={styles.addContent}>
                <p>+</p>
              </div>
              <input
                type="text"
                className={styles.channelChatBarInput}
                placeholder="Message"
              ></input>
            </div>
          </div>

          <div className={styles.channelUsers}></div>
        </div>
      </div>
    </div>
  );
}
