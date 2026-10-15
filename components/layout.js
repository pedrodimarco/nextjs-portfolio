import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";

export const siteTitle = "Pedro Di Marco — Frontend-focused Full-Stack Developer";

export default function Layout({ children, home = false }) {
  const sectionPrefix = home ? "" : "/";

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#161d28" />
        <meta
          name="description"
          content="Pedro Di Marco, frontend-focused full-stack developer in Montevideo, Uruguay. 3+ years building responsive web applications with React, TypeScript, and Node.js."
        />
        <meta property="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary" />
        <title>{siteTitle}</title>
      </Head>

      <a className={styles.skipLink} href="#content">Skip to content</a>

      <header className={styles.header}>
        <div className={`siteContainer ${styles.headerInner}`}>
          <Link className={styles.brand} href={home ? "#intro" : "/"}>
            <span className={styles.brandMark} aria-hidden="true">pd.</span>
            Pedro Di Marco
          </Link>
          <nav className={styles.navigation} aria-label="Main navigation">
            <Link href={`${sectionPrefix}#projects`}>Projects</Link>
            <Link className={styles.stackLink} href={`${sectionPrefix}#stack`}>Tech stack</Link>
            <Link href={`${sectionPrefix}#contact`}>
              Contact <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </div>
      </header>

      <main id="content" tabIndex={-1} className={home ? undefined : styles.postMain}>
        {children}
        {!home && (
          <div className={styles.backHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        <div className="siteContainer">
          <span>Pedro Di Marco · Montevideo, Uruguay</span>
          <Link href={home ? "#intro" : "/"}>
            {home ? "Back to top ↑" : "Home ↑"}
          </Link>
        </div>
      </footer>
    </>
  );
}
