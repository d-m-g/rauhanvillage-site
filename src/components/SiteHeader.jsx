"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import Container from "./Container";
import styles from "./SiteHeader.module.css";

const navItems = [
  { href: "/apartments", label: "Apartments" },
  { href: "/activities", label: "Activities" },
  { href: "/services", label: "Services" },
  { href: "/photos", label: "Photos" },
  { href: "/news", label: "News" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  function isActive(href) {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <header className={styles.header}>
      <Container className={styles.topBar}>
        <a
          className={`${styles.infoItem} ${styles.addressItem}`}
          href="https://maps.google.com/?q=Vipelenpelto+7+Rauha+55320+Finland"
          rel="noreferrer"
          target="_blank"
        >
          <span aria-hidden="true" className={styles.icon}>
            <svg viewBox="0 0 24 24">
              <path d="M12 2.75A7.25 7.25 0 0 0 4.75 10c0 4.85 6.13 10.7 6.39 10.95a1.25 1.25 0 0 0 1.72 0c.26-.25 6.39-6.1 6.39-10.95A7.25 7.25 0 0 0 12 2.75Zm0 9.75A2.5 2.5 0 1 1 12 7.5a2.5 2.5 0 0 1 0 5Z" />
            </svg>
          </span>
          <span className={`${styles.infoText} ${styles.addressText}`}>
            Vipelenpelto 7, 55320, Rauha, Finland
          </span>
        </a>
        <a className={styles.infoItem} href="tel:+358407236337">
          <span aria-hidden="true" className={styles.icon}>
            <svg viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.08 15.08 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 11.2 11.2 0 0 0 3.51.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17.94 17.94 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.2 11.2 0 0 0 .56 3.51 1 1 0 0 1-.24 1Z" />
            </svg>
          </span>
          <span className={styles.infoText}>+358 40 723 6337</span>
        </a>
        <a className={styles.infoItem} href="mailto:rauhanvillage@gmail.com">
          <span aria-hidden="true" className={styles.icon}>
            <svg viewBox="0 0 24 24">
              <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25ZM5 7.4l6.53 4.89a.8.8 0 0 0 .94 0L19 7.4v-.65a.75.75 0 0 0-.75-.75H5.75a.75.75 0 0 0-.75.75Z" />
            </svg>
          </span>
          <span className={styles.infoText}>rauhanvillage@gmail.com</span>
        </a>
      </Container>
      <Container className={styles.inner}>
        <div className={styles.mainNavGroup}>
          <div className={styles.brandWrap}>
            <Link
              className={styles.brand}
              data-active={pathname === "/"}
              href="/"
            >
              <span className={styles.brandText}>Rauhan Village</span>
            </Link>
          </div>
          <nav aria-label="Primary" className={styles.nav}>
            {navItems.map((item) => (
              <Link
                className={styles.link}
                data-active={isActive(item.href)}
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <Button className={styles.cta} href="/contact">
          Book a Room
        </Button>
      </Container>
    </header>
  );
}
