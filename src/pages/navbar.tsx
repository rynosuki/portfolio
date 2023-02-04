import styles from "@/styles/about/Navbar.module.css"
import Link from "next/link"
import React from "react"
import ReactDOM from "react-dom"
import PersonalInfo from "./personalinfo"
import Projects from "./projects"
import SwitchButton from "./switchbutton"
import BlogPage from "./blog"

export default function Navbar() {
  const handleClick = (e:any) => {
    if (e.target === null || e.target === undefined) return; 
    e.preventDefault();
    document.getElementsByClassName(styles.active)[0].classList.remove(styles.active);
    e.target.parentNode.classList.add(styles.active);
    console.log(e.target.innerText)
    if (e.target.innerText === "Information") {
      ReactDOM.render(<React.Fragment><PersonalInfo /><SwitchButton />
      <Projects /></React.Fragment>, document.getElementById('information'))
    } else if (e.target.innerText === "Blog") {
      ReactDOM.render(<BlogPage/>, document.getElementById('information'))
    }
  }

  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          <li className={styles.navbarListItem}>
            <Link href="/" className={styles.active} onClick={handleClick}>
              <div className={styles.tabItem}>Information</div>
            </Link>
          </li>
          <li className={styles.navbarListItem} onClick={handleClick}>
            <Link href="#blog">
              <div className={styles.tabItem}>Blog</div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
