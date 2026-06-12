import Button from "../components/Button";
import Reveal from "../components/Reveal";
import styles from "./BookingCtaSection.module.css";

export default function BookingCtaSection({
  heading = "Have any questions?",
  buttonLabel = "Contact Us",
  href = "/contact",
}) {
  return (
    <section className={styles.section}>
      <Reveal variant="up">
        <div className={styles.container}>
          <h2 className={styles.heading}>{heading}</h2>
          <Button href={href} className={styles.btn}>
            {buttonLabel}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
