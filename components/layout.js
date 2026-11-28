import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";

export const siteTitle = "Pedro Di Marco — Frontend-focused Full-Stack Developer";
const siteUrl = "https://pedrodimarco.dev";
const siteDescription = "Pedro Di Marco, frontend-focused full-stack developer in Montevideo, Uruguay. Building web applications with React, Next.js, TypeScript, and Node.js.";

export default function Layout({
  children,
  home = false,
  title = siteTitle,
  description = siteDescription,
  canonicalPath = home ? "/" : null,
  noIndex = false,
}) {
  const sectionPrefix = home ? "" : "/";
  const canonicalUrl = canonicalPath ? new URL(canonicalPath, siteUrl).href : null;
  const imageUrl = `${siteUrl}/images/me.jpeg`;

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
        <meta name="description" content={description} key="description" />
        <meta name="robots" content={noIndex ? "noindex, follow" : "index, follow"} key="robots" />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} key="canonical" />}
        <meta property="og:title" content={title} key="og:title" />
        <meta property="og:description" content={description} key="og:description" />
        <meta property="og:type" content={home ? "website" : "article"} />
        <meta property="og:site_name" content="Pedro Di Marco" />
        {canonicalUrl && <meta property="og:url" content={canonicalUrl} key="og:url" />}
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta property="og:image:alt" content="Pedro Di Marco" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} key="twitter:title" />
        <meta name="twitter:description" content={description} key="twitter:description" />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:image:alt" content="Pedro Di Marco" />
        <title>{title}</title>
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
