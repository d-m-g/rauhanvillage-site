import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section aria-label="Welcome to Rauhan Marinella Village">
      {/* ── Blue text band ── */}
      <div className={styles.textBand}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>Rauhan Marinella Village Hotel</h1>
          <p className={styles.tagline}>You are welcome!</p>
        </div>
      </div>

      {/* ── Two photos side by side ── */}
      <div className={styles.photoRow}>
        <div className={styles.photoWrap}>
          <Image
            src="/assets/hotel-exterior.jpg"
            alt="Rauhan Marinella Village Hotel — aerial view"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.photo}
          />
        </div>
        <div className={styles.photoWrap}>
          <Image
            src="/assets/hotel-interior.jpg"
            alt="Apartment kitchen and dining area"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.photo}
          />
        </div>
      </div>
    </section>
  );
}
