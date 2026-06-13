import dynamic from "next/dynamic";
import Card from "../components/Card";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { byCarActivities, walkingDistanceActivities } from "../lib/content";
import styles from "./ActivitiesSection.module.css";

const WalkingActivitiesMap = dynamic(() => import("./WalkingActivitiesMap"), {
  ssr: false,
  loading: () => <div className={styles.mapLoading}>Loading map…</div>,
});

function ActivityCard({ item, index, cardId }) {
  return (
    <Reveal as="div" delay={index * 40} variant="up">
      <Card as="article" className={styles.card} id={cardId}>
        <div className={styles.badge}>{item.distance}</div>
        <h3 className={styles.title}>
          <span className={styles.cardNumber}>{index + 1}.</span> {item.title}
        </h3>
        <p className={styles.text}>{item.description}</p>
        {item.address ? (
          <p className={styles.meta}>{item.address}</p>
        ) : null}
        {item.phone ? (
          <p className={styles.meta}>
            <a className={styles.phoneLink} href={`tel:${item.phone.replace(/\s/g, "")}`}>
              {item.phone}
            </a>
          </p>
        ) : null}
        {item.note ? <p className={styles.note}>{item.note}</p> : null}
      </Card>
    </Reveal>
  );
}

function ActivityGroup({ activities, eyebrow, title, showMap = false }) {
  return (
    <div className={styles.group}>
      <Reveal variant="fade">
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 className={styles.groupTitle}>{title}</h2>
      </Reveal>
      {showMap ? (
        <Reveal variant="fade">
          <WalkingActivitiesMap activities={activities} />
        </Reveal>
      ) : null}
      <div className={styles.grid}>
        {activities.map((item, index) => (
          <ActivityCard
            cardId={showMap ? `walking-activity-${index + 1}` : undefined}
            index={index}
            item={item}
            key={`${title}-${item.title}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ActivitiesSection() {
  return (
    <Section id="activities">
      <div className={styles.layout}>
        <ActivityGroup
          activities={walkingDistanceActivities}
          eyebrow="Walking distance"
          showMap
          title="In the walking distance"
        />
        <ActivityGroup
          activities={byCarActivities}
          eyebrow="By car"
          title="Reachable by car"
        />
      </div>
    </Section>
  );
}
