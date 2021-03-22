import React, { useState } from "react"
import emailjs from "emailjs-com"
import scrollTo from "gatsby-plugin-smoothscroll"

import Head from "../components/Head"
import Logo from "../components/svg/Logo"
import TriangleMain from "../components/svg/TriangleMain"
import Footer from "../components/Footer"

import "../styles/global.css"
import * as styles from "../styles/index.module.css"

import swftliMeImg from "../img/projects/swftli-me.jpg"

export default function Home() {
  const [contactStatus, setContactStatus] = useState("")

  const sendEmail = e => {
    e.preventDefault()

    const formData = e.target

    if (
      formData.name.value === "" ||
      formData.email.value === "" ||
      formData.message.value === ""
    ) {
      setContactStatus("Please fill all fields.")
    } else {
      emailjs
        .sendForm(
          process.env.GATSBY_EMAILJS_SERVICE,
          process.env.GATSBY_EMAILJS_TEMPLATE,
          formData,
          process.env.GATSBY_EMAILJS_USER
        )
        .then(
          result => {
            setContactStatus("Message sent. Thank you!")
            console.log(contactStatus)
          },
          error => {
            setContactStatus("Sorry, please try again.")
            console.log(contactStatus)
          }
        )
    }
  }

  return (
    <div>
      <Head />

      <main>
        <div className={styles.portfolioContainer}>
          <div className={styles.headerContainer}>
            <header>
              <Logo />

              <nav className={styles.headerNav}>
                <button onClick={() => scrollTo("#projects")}>projects</button>
                <button onClick={() => scrollTo("#skills")}>projects</button>
                <button onClick={() => scrollTo("#contact")}>projects</button>
              </nav>

              <div>
                <ul>
                  <li>
                    <a
                      href="https://github.com/kayloody"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/alamoodi"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/kayloody"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-twitter" />
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
              <button
                className={styles.heroButtonProjects}
                onClick={() => scrollTo("#projects")}
              >
                view projects
              </button>
              <button
                className={styles.heroButtonContact}
                button
                onClick={() => scrollTo("#contact")}
              >
                contact me
              </button>
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
                          <i className="fas fa-external-link-alt" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/kayloody/swftli-me"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-github" />
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
                          <i className="fas fa-external-link-alt" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/kayloody/swftli-me"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-github" />
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
            </div>
          </section>
          <section id="skills" className={styles.skillsContainer}>
            <div className={styles.skillsMarker}></div>

            <h1 className={styles.sectionTitle}>skills</h1>

            <div className={styles.skillsBox}>
              <div className={styles.skillsGroup}>
                <h2>Languages</h2>
                <ul>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS/SCSS</li>
                  <li>PHP</li>
                </ul>
              </div>

              <div className={styles.skillsGroup}>
                <h2>Frameworks/Environments</h2>
                <ul>
                  <li>React</li>
                  <li>Gatsby</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Bootstrap</li>
                </ul>
              </div>

              <div className={styles.skillsGroup}>
                <h2>Databases</h2>
                <ul>
                  <li>NoSQL (MongoDB)</li>
                  <li>PostgreSQL (SQL)</li>
                </ul>
              </div>

              <div className={styles.skillsGroup}>
                <h2>Protocols</h2>
                <ul>
                  <li>Rest API</li>
                  <li>GraphQL</li>
                </ul>
              </div>

              <div className={styles.skillsGroup}>
                <h2>Tools</h2>
                <ul>
                  <li>Bash</li>
                  <li>Git/GitHub</li>
                  <li>Adobe XD</li>
                  <li>Figma</li>
                  <li>Insomnia</li>
                </ul>
              </div>

              <div className={styles.skillsGroup}>
                <h2>Miscellaneous</h2>
                <ul>
                  <li>Passport.js</li>
                  <li>TensorFlow.js</li>
                </ul>
              </div>
            </div>
          </section>
          <section id="contact" className={styles.contactContainer}>
            <h1 className={styles.sectionTitle}>contact</h1>

            <div className={styles.formContainer}>
              <div className={styles.formMarker}></div>
              <h2>I'm available for work, get in touch.</h2>
              <p>
                I'm looking for frontend, backend or full-stack opportunities.
                Feel free to contact me if you are interested or have any
                questions.
              </p>
              <form onSubmit={sendEmail}>
                <div className={styles.formPerson}>
                  <input type="text" name="name" placeholder="Name" />
                  <input type="text" name="email" placeholder="Email" />
                </div>
                <textarea name="message" placeholder="Message" />
                <div className={styles.formSend}>
                  <span>{contactStatus}</span>
                  <button type="submit">send</button>
                </div>
              </form>
            </div>

            <div className={styles.contactOthers}>
              <div className={styles.contactSocials}>
                <a
                  href="mailto: khaled@alamoodi.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-envelope fa-fw" />
                  <span>khaled@alamoodi.io</span>
                </a>
                <a
                  href="https://linkedin.com/in/alamoodi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin fa-fw" />
                  <span>alamoodi</span>
                </a>
                <a
                  href="https://github.com/kayloody"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github fa-fw" />
                  <span>kayloody</span>
                </a>
                <a
                  href="https://twitter.com/kayloody"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter fa-fw" />
                  <span>kayloody</span>
                </a>
              </div>
              <hr />
              <a href={swftliMeImg} target="_blank" rel="noreferrer">
                <i className="fas fa-file-pdf fa-fw" />
                <span>resume</span>
              </a>
            </div>
          </section>
          <div className={styles.footerNavContainer}>
            <nav className={styles.footerNav}>
              <button onClick={() => scrollTo("#projects")}>projects</button>
              <div className={styles.vl}></div>
              <button onClick={() => scrollTo("#skills")}>skills</button>
              <div className={styles.vl}></div>
              <button onClick={() => scrollTo("#contact")}>contact</button>
            </nav>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
