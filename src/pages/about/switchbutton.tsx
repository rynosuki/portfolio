import switchButton from "/public/switch.svg";
import Image from "next/image";
import styles from "@/styles/about/SwitchButton.module.css";
import { useState } from "react";
import Projects from "./projects";
import ReactDOM from "react-dom";
import Skills from "./skills";

export default function SwitchButton() {
  const [isSwitched, setIsSwitched] = useState(false);
  const switchView = () => {
    if (isSwitched) {
      ReactDOM.render(<Skills />, document.getElementById('skills'))
    } else {
      ReactDOM.render(<Projects />, document.getElementById('skills'))
    }
    setIsSwitched(!isSwitched)
  }

  return (
    <div id='switchbutton' className={styles.buttonContainer}>
      <button className={styles.switchButton} onClick={switchView}>
        <Image src={switchButton} alt="Switch" />
      </button>
    </div>
  );
}