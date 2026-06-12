import Image from "next/image";
import Reveal from "../components/Reveal";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section aria-label="Welcome to Rauhan Marinella Village">
      <Reveal immediate variant="up" delay={0}>
        <div className={styles.textBand}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>Rauhan Marinella Village Hotel</h1>
            <p className={styles.tagline}>You are welcome!</p>
          </div>
        </div>
      </Reveal>

      <div className={styles.photoRow}>
        <Reveal immediate variant="fade" delay={120} className={styles.photoWrap}>
          <Image
            src="/assets/hotel-exterior.jpg"
            alt="Rauhan Marinella Village Hotel — aerial view"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.photo}
          />
        </Reveal>
        <Reveal immediate variant="fade" delay={220} className={styles.photoWrap}>
          <Image
            src="/assets/hotel-interior.jpg"
            alt="Apartment kitchen and dining area"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.photo}
          />
        </Reveal>
      </div>
    </section>
  );
}
