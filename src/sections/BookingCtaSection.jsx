import Button from "../components/Button";
import Reveal from "../components/Reveal";
import styles from "./BookingCtaSection.module.css";

export default function BookingCtaSection() {
  return (
    <section className={styles.section}>
      <Reveal variant="up">
        <div className={styles.container}>
          <h2 className={styles.heading}>Have any questions?</h2>
          <Button href="/contact" className={styles.btn}>
            Contact Us
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
