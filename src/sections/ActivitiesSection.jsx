import Card from "../components/Card";
import Heading from "../components/Heading";
import Section from "../components/Section";
import { activities } from "../lib/content";
import styles from "./ActivitiesSection.module.css";

export default function ActivitiesSection() {
  return (
    <Section tone="accent" id="activities">
      <Heading
        align="center"
        as="h2"
        className={styles.heading}
        eyebrow="Around the hotel"
      >
        Activities nearby
      </Heading>
      <div className={styles.grid}>
        {activities.map((item) => (
          <Card as="div" className={styles.card} key={item.title}>
            <div className={styles.badge}>{item.distance}</div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
