import styles from "./contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-title">
      <div className="siteContainer">
        <div className={styles.inner}>
          <div>
            <h2 id="contact-title">Let&apos;s talk.</h2>
            <a className={styles.email} href="mailto:pdimarco97@gmail.com">
              pdimarco97@gmail.com <span aria-hidden="true">↗</span>
            </a>
          </div>
          <nav className={styles.socialLinks} aria-label="Social links">
            <a href="https://www.linkedin.com/in/pedro-di-marco/">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a href="https://github.com/pedrodimarco">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
