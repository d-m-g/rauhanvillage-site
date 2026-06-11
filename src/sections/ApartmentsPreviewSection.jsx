import Button from "../components/Button";
import Heading from "../components/Heading";
import Section from "../components/Section";
import { apartments } from "../lib/content";
import styles from "./ApartmentsPreviewSection.module.css";

export default function ApartmentsPreviewSection() {
  return (
    <Section id="apartments">
      <Heading align="center" as="h2" className={styles.heading} eyebrow="Where you stay">
        Our apartments
      </Heading>
      <div className={styles.grid}>
        {apartments.map((apt) => (
          <article className={styles.item} key={apt.title}>
            <div className={styles.panel}>
              <h3 className={styles.title}>{apt.title}</h3>
              <div className={styles.divider} />
              <p className={styles.body}>{apt.description}</p>
              <ul className={styles.list}>
                {apt.features.slice(0, 4).map((f) => (
                  <li className={styles.listItem} key={f}>
                    {f}
                  </li>
                ))}
              </ul>
              <Button className={styles.cta} href={apt.ctaHref}>
                {apt.ctaLabel}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
