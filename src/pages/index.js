import React from "react"
import Head from "../components/Head"
import Logo from "../components/svg/Logo"
import TriangleMain from "../components/svg/TriangleMain"
import Footer from "../components/Footer"

import "../styles/global.css"
import * as styles from "../styles/index.module.css"

import swftliMeImg from "../img/projects/swftli-me.jpg"

export default function Home() {
  return (
    <div>
      <Head />

      <main>
        <div className={styles.portfolioContainer}>
          <div className={styles.headerContainer}>
            <header>
              <Logo />

              <nav className={styles.headerNav}>
                <a href="#projects">projects</a>
                <a href="#skills">skills</a>
                <a href="#contact">contact</a>
              </nav>

              <div>
                <ul>
                  <li>
                    <a
                      href="https://github.com/kayloody"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/alamoodi"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/kayloody"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
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
                <nobr>I code for the web.</nobr>{" "}
                <nobr>I craft for humans.</nobr>
              </h2>
              <p id={styles.heroAbout}>
                I'm a software developer and PhD candidate based in Edmonton,
                Canada specializing in building and designing websites and
                applications.
              </p>
            </div>

            <div className={styles.heroButtons}>
              <a className={styles.heroButtonProjects} href="#projects">
                view projects
              </a>
              <a className={styles.heroButtonContact} href="#contact">
                contact me
              </a>
            </div>
          </section>

          <section id="projects" className={styles.projectsContainer}>
            <h1 className={styles.sectionTitle}>projects</h1>

            <div className={styles.projects}>
              <div className={styles.project}>
                <div className={styles.projectMarker}></div>

                <div className={styles.projectText}>
                  <div className={styles.projectHeader}>
                    <div className={styles.projectTitle}>
                      <h1>Featured Project</h1>
                      <h2>swftli.me</h2>
                    </div>

                    <ul className={styles.projectLinks}>
                      <li>
                        <a
                          href="https://swftli.me"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/kayloody/swftli-me"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <p>
                    swftli-me is a social media reference landing page (of which
                    LinkTree and Carrd.co are examples).
                  </p>

                  <div className={styles.projectTools}>
                    <span className={styles.projectTool}>React</span>
                    <span className={styles.projectTool}>Node.js</span>
                    <span className={styles.projectTool}>Express</span>
                    <span className={styles.projectTool}>MongoDB</span>
                  </div>
                </div>

                <img
                  src={swftliMeImg}
                  alt="Three mockup screens of swftli.me"
                  className={styles.projectImage}
                ></img>
              </div>

              <div className={styles.project}>
                <div className={styles.projectMarker}></div>

                <div className={styles.projectText}>
                  <div className={styles.projectHeader}>
                    <div className={styles.projectTitle}>
                      <h1>Featured Project</h1>
                      <h2>swftli.me</h2>
                    </div>

                    <ul className={styles.projectLinks}>
                      <li>
                        <a
                          href="https://swftli.me"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/kayloody/swftli-me"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <p>
                    swftli-me is a social media reference landing page (of which
                    LinkTree and Carrd.co are examples).
                  </p>

                  <div className={styles.projectTools}>
                    <span className={styles.projectTool}>React</span>
                    <span className={styles.projectTool}>Node.js</span>
                    <span className={styles.projectTool}>Express</span>
                    <span className={styles.projectTool}>MongoDB</span>
                  </div>
                </div>

                <img
                  src={swftliMeImg}
                  alt="Three mockup screens of swftli.me"
                  className={styles.projectImage}
                ></img>
              </div>

              <a className={styles.projectsButton} href="#projects">
                view more
              </a>

              <a className={styles.projectsButton} href="#projects">
                view more
              </a>

              <a className={styles.projectsButton} href="#projects">
                view more
              </a>
            </div>
          </section>

          <section id="skills" className={styles.skillsContainer}>
            b
          </section>

          <section id="contact" className={styles.contactContainer}>
            c
          </section>

          <div className={styles.footerNavContainer}>
            <nav className={styles.footerNav}>
              <a href="#projects">projects</a>
              <div className={styles.vl}></div>
              <a href="#skills">skills</a>
              <div className={styles.vl}></div>
              <a href="#contact">contact</a>
            </nav>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
