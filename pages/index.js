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
            <p className={styles.eyebrow}>Frontend-focused Full-Stack Developer</p>
            <h1 id="intro-title">I build web applications from interface to API.</h1>
            <p className={styles.lead}>
              I’m Pedro, a frontend-focused full-stack developer with 3+ years
              of experience building responsive web applications. I work with
              React, TypeScript, and Node.js, connecting intuitive interfaces
              with well-structured APIs.
            </p>
            <p className={styles.values}>
              I value maintainable code, thoughtful architecture, and collaboration.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#projects">
                Explore my projects <span aria-hidden="true">↓</span>
              </a>
              <a className={styles.textLink} href="https://github.com/pedrodimarco">
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
          <div className={styles.projectList}>
            {projects.map((project, index) => (
              <article className={styles.project} key={project.name}>
                <a
                  className={styles.projectLink}
                  href={project.href}
                  aria-label={`Visit ${project.name} — ${project.description}`}
                >
                  <span className={styles.projectNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                  <span className={styles.projectDestination}>
                    <span className={styles.destinationLabel}>Visit website</span>
                    <span className={styles.projectArrow} aria-hidden="true">↗</span>
                  </span>
                </a>
              </article>
            ))}
          </div>
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
