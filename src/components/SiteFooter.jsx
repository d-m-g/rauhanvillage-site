import Container from "./Container";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <p className={styles.companies}>
          Aldanex Group Oy, Y-tunnus 2743281-5 | Konsultrend Oy,
          Y-tunnus 2774058-6
        </p>
        <div className={styles.contactRow}>
          <a className={styles.link} href="tel:+358407236337">
            +358 40 723 6337
          </a>
          <span aria-hidden="true" className={styles.dot}>
            •
          </span>
          <a className={styles.link} href="mailto:rauhanvillage@gmail.com">
            rauhanvillage@gmail.com
          </a>
          <span aria-hidden="true" className={styles.dot}>
            •
          </span>
          <span className={styles.copy}>© All rights reserved 2026</span>
        </div>
      </Container>
    </footer>
  );
}
