import switchButton from "/public/switch.svg";
import Image from "next/image";
import styles from "@/styles/about/SwitchButton.module.css";

export default function SwitchButton() {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.switchButton}>
        <Image src={switchButton} alt="Switch" />
      </button>
    </div>
  );
}
