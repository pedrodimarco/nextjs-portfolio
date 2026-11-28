import Image from "next/image";
import Layout from "../components/layout";
import Contact from "../components/contact";
import styles from "../styles/Home.module.css";

const projects = [
  {
    name: "Rancho Forestal",
    description: "Website for an agroforestry services company",
    href: "https://ranchoforestal.uy",
  },
  {
    name: "URL Shortener",
    description: "URL shortener with click tracking, built with Express, MongoDB, and Nano ID",
    href: "https://url-shortener-n95y.onrender.com/",
    repository: "https://github.com/pedrodimarco/url-shortener",
  },
  {
    name: "Notes App",
    description: "Note-taking application",
    href: "https://notes-app-pedrodimarco.vercel.app/login",
  },
  {
    name: "Entre mates te conté",
    description: "A Next.js blog about Uruguay’s agricultural community",
    href: "https://entrematesteconte.com",
  },
];

const ongoingProjects = [
  {
    name: "Falta uno",
    description: "A full-stack web and mobile app to organize football, padel, and basketball meetups.",
    stack: "TypeScript · Node.js · Express · PostgreSQL · React · React Native",
    href: "https://github.com/pedrodimarco/falta-uno",
  },
  {
    name: "SIENEP",
    description: "An academic platform to support students with personalized educational needs. Currently focused on building the Next.js frontend to connect with the existing backend.",
    stack: "Backend: Java · Spring Boot · PostgreSQL / Planned frontend: Next.js",
    href: "https://github.com/pedrodimarco/sienep-backend",
  },
];

const technologies = [
  { name: "React", icon: "/icons/react.png" },
  { name: "Next.js", icon: "/icons/nextjs.png", darkIcon: true },
  { name: "JavaScript", icon: "/icons/js.png" },
  { name: "TypeScript", icon: "/icons/typescript.png" },
  { name: "Node.js", icon: "/icons/node-js.png" },
  { name: "Express.js", icon: "/icons/express.png", darkIcon: true },
  { name: "MongoDB", icon: "/icons/mongodb.png" },
  { name: "PostgreSQL", icon: "/icons/postgre.png" },
];

export default function Home() {
  return (
    <Layout home>
      <section id="intro" className={styles.hero} aria-labelledby="intro-title">
        <div className={`siteContainer ${styles.heroInner}`}>
          <div>
            <p className={styles.eyebrow}>Software Engineer</p>
            <h1 id="intro-title">I design and build software products, from idea to launch.</h1>
            <p className={styles.lead}>
              I’m Pedro, a software engineer with 3+ years
              of professional experience building and maintaining web applications,
              from enterprise e-commerce platforms to freelance projects. My
              background is in JavaScript and TypeScript, and I currently build
              with React, Next.js, and Node.js.
            </p>
            <p className={styles.values}>
              Currently studying Information Technology at UTEC. Advanced English
              (C1), with experience collaborating with international teams.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#projects">
                Explore my projects <span aria-hidden="true">↓</span>
              </a>
              <a className={styles.textLink} href="https://github.com/pedrodimarco"
                target="_blank" rel="noopener noreferrer">
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <figure className={styles.portrait}>
            <Image
              className={styles.portraitImage}
              src="/images/me.jpeg"
              width={226}
              height={226}
              alt="Pedro Di Marco"
              priority
            />
            <span className={styles.portraitBracket} aria-hidden="true" />
            <figcaption>
              <span>Pedro Di Marco</span>
              <span>Montevideo, Uruguay</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="projects" className={styles.projects} aria-labelledby="projects-title">
        <div className="siteContainer">
          <div className={styles.sectionHeading}>
            <h2 id="projects-title">Projects</h2>
            <span>Open a project ↗</span>
          </div>
          <section className={styles.projectGroup} aria-labelledby="working-on-title">
            <div className={styles.projectGroupHeading}>
              <h3 id="working-on-title">Working on</h3>
              <p>Here’s what I’m currently building.</p>
            </div>
            <div className={styles.projectList}>
              {ongoingProjects.map((project, index) => (
                <article className={styles.project} key={project.name}>
                  <a className={styles.projectLink} href={project.href}
                    target="_blank" rel="noopener noreferrer"
                    aria-label={`View ${project.name} on GitHub`}>
                    <span className={styles.projectNumber} aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4>{project.name}</h4>
                      <p>{project.description}</p>
                      <p className={styles.projectStack}>{project.stack}</p>
                    </div>
                    <span className={styles.projectDestination}>
                      <span className={styles.destinationLabel}>View on GitHub</span>
                      <span className={styles.projectArrow} aria-hidden="true">↗</span>
                    </span>
                  </a>
                </article>
              ))}
            </div>
          </section>
          <section className={styles.projectGroup} aria-labelledby="previous-projects-title">
            <div className={styles.projectGroupHeading}>
              <h3 id="previous-projects-title">Previous projects</h3>
            </div>
            <div className={styles.projectList}>
              {projects.map((project, index) => (
                <article
                  className={project.repository ? `${styles.project} ${styles.projectWithRepository}` : styles.project}
                  key={project.name}
                >
                  <a
                    className={styles.projectLink}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name} — ${project.description}`}
                  >
                    <span className={styles.projectNumber} aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4>{project.name}</h4>
                      <p>{project.description}</p>
                    </div>
                    <span className={styles.projectDestination}>
                      <span className={styles.destinationLabel}>Visit website</span>
                      <span className={styles.projectArrow} aria-hidden="true">↗</span>
                    </span>
                  </a>
                  {project.repository && (
                    <a
                      className={styles.projectRepository}
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} source on GitHub`}
                    >
                      Source on GitHub <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section id="stack" className={styles.technologies} aria-labelledby="stack-title">
        <div className={`siteContainer ${styles.techLayout}`}>
          <div className={styles.techHeading}>
            <h2 id="stack-title">My toolkit</h2>
            <p>The technologies I work with.</p>
          </div>
          <ul className={styles.techList}>
            {technologies.map(({ name, icon, darkIcon }) => (
              <li key={name}>
                <Image
                  className={darkIcon ? styles.darkIcon : undefined}
                  src={icon}
                  width={21}
                  height={21}
                  alt=""
                />
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Contact />
    </Layout>
  );
}
