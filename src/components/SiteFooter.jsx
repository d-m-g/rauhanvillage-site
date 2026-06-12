import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Left — company / legal */}
        <div className={styles.col}>
          <p className={styles.company}>Aldanex Group Oy | 2743281-5</p>
          <p className={styles.company}>Konsultrend Oy | 2774058-6</p>
          <p className={styles.copy}>© 2026 rauhanvillage.com</p>
        </div>

        {/* Centre — social icons */}
        <div className={styles.social}>
          <span className={styles.socialLabel}>Follow us</span>
          <div className={styles.socialIcons}>
            <a
              className={styles.socialBtn}
              href="https://www.facebook.com/RauhanMarinellaVillage/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              className={styles.socialBtn}
              href="https://www.instagram.com/rauhan_marinella_village/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right — contact details */}
        <div className={`${styles.col} ${styles.colRight}`}>
          <a className={styles.contactLine} href="tel:+358407236337">
            Phone/WhatsApp: +358 40 723 6337
          </a>
          <a className={styles.contactLine} href="mailto:rauhanvillage@gmail.com">
            Email: rauhanvillage@gmail.com
          </a>
          <p className={styles.contactLine}>
            Vipelenpelto 7, 55320, Rauha, Finland
          </p>
        </div>

      </div>

      {/* Bottom strip */}
      <div className={styles.bar}>
        <div className={styles.barInner}>
          <span className={styles.barText}>
            Rauhan Marinella Village Hotel · All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
