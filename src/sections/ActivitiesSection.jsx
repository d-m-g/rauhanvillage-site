"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import Card from "../components/Card";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { byCarActivities, walkingDistanceActivities } from "../lib/content";
import styles from "./ActivitiesSection.module.css";

const WalkingActivitiesMap = dynamic(() => import("./WalkingActivitiesMap"), {
  ssr: false,
  loading: () => <div className={styles.mapLoading}>Loading map…</div>,
});

function ActivityCard({ item, index, cardId, onSelectMapMarker }) {
  const isMapLinked = Boolean(onSelectMapMarker);

  function handleSelect(event) {
    if (!isMapLinked || event.target.closest("a, button")) {
      return;
    }
    onSelectMapMarker(index + 1);
  }

  function handleKeyDown(event) {
    if (!isMapLinked || (event.key !== "Enter" && event.key !== " ")) {
      return;
    }
    event.preventDefault();
    onSelectMapMarker(index + 1);
  }

  return (
    <Reveal as="div" delay={index * 40} variant="up">
      <Card
        aria-label={isMapLinked ? `Show activity ${index + 1} on the map` : undefined}
        as="article"
        className={styles.card}
        data-map-linked={isMapLinked}
        id={cardId}
        onClick={handleSelect}
        onKeyDown={handleKeyDown}
        role={isMapLinked ? "button" : undefined}
        tabIndex={isMapLinked ? 0 : -1}
      >
        {item.image ? (
          <div className={styles.media}>
            <Image
              alt={item.title}
              className={styles.image}
              height={360}
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
              src={item.image}
              width={480}
            />
          </div>
        ) : null}
        <div className={styles.cardContent}>
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
        </div>
      </Card>
    </Reveal>
  );
}

function ActivityGroup({ activities, eyebrow, title, showMap = false }) {
  const [mapTarget, setMapTarget] = useState(null);

  function selectMapMarker(number) {
    setMapTarget({ number, requestId: Date.now() });
  }

  const heading = (
    <Reveal variant="fade">
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.groupTitle}>{title}</h2>
    </Reveal>
  );

  return (
    <div className={styles.group}>
      {showMap ? (
        <>
          <Reveal variant="fade">
            <WalkingActivitiesMap activities={activities} selectedTarget={mapTarget} />
          </Reveal>
          {heading}
        </>
      ) : (
        heading
      )}
      <div className={styles.grid}>
        {activities.map((item, index) => (
          <ActivityCard
            cardId={showMap ? `walking-activity-${index + 1}` : undefined}
            index={index}
            item={item}
            key={`${title}-${item.title}`}
            onSelectMapMarker={showMap ? selectMapMarker : undefined}
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
