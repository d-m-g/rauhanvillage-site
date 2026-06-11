import Button from "../components/Button";
import styles from "./BookingCtaSection.module.css";

export default function BookingCtaSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Have any questions?</h2>
        <Button href="/contact" className={styles.btn}>
          Contact Us
        </Button>
      </div>
    </section>
  );
}
