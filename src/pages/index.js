import React from "react"
import Head from "../components/Head"
import Logo from "../components/svg/Logo"
import TriangleMain from "../components/svg/TriangleMain"
import Footer from "../components/Footer"

import "../styles/global.css"
import * as styles from "../styles/index.module.css"

export default function Home() {
  return (
    <div>
      <Head />

      <main>
        <div className={styles.navContainer}>
          <header>
            <Logo />
            <div>
              <ul>
                <li>
                  <a href="https://github.com/kayloody" target="_blank">
                    <i class="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/alamoodi" target="_blank">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/kayloody" target="_blank">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </header>

          <div className={styles.triangle}>
            <TriangleMain />
          </div>
        </div>

        <section className={styles.hero}>
          <div className={styles.heroText}>
            <p id={styles.heroConsole}>
              console.log("Hello world, my name is");
            </p>
            <h1>
              Khaled <nobr>Al-Amoodi</nobr>
            </h1>
            <h2>
              <nobr>I code for the web.</nobr> <nobr>I craft for humans.</nobr>
            </h2>
            <p id={styles.heroAbout}>
              I'm a software developer and PhD candidate based in Edmonton,
              Canada specializing in building and designing websites and
              applications.
            </p>
          </div>

          <div className={styles.heroButtons}>
            <button>view projects</button>
            <p>contact me</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
