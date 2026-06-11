import Button from "../components/Button";
import Card from "../components/Card";
import Heading from "../components/Heading";
import Section from "../components/Section";
import styles from "./PageHero.module.css";

export default function PageHero({
  eyebrow,
  title,
  description,
  stats = [],
  primaryCta,
  secondaryCta,
}) {
  return (
    <Section className={styles.section}>
      <div className={styles.layout}>
        <div className={styles.content}>
          {title ? (
            <Heading as="h1" eyebrow={eyebrow}>
              {title}
            </Heading>
          ) : eyebrow ? (
            <p className={styles.eyebrowOnly}>{eyebrow}</p>
          ) : null}
          <p className={styles.description}>{description}</p>
          {primaryCta || secondaryCta ? (
            <div className={styles.actions}>
              {primaryCta ? (
                <Button href={primaryCta.href}>{primaryCta.label}</Button>
              ) : null}
              {secondaryCta ? (
                <Button href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
        {stats.length > 0 ? (
          <Card className={styles.card}>
            <p className={styles.cardTitle}>At a glance</p>
            <ul className={styles.list}>
              {stats.map((stat) => (
                <li className={styles.item} key={stat}>
                  {stat}
                </li>
              ))}
            </ul>
          </Card>
        ) : null}
      </div>
    </Section>
  );
}
