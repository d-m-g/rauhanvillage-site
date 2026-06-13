import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { walkingDistanceActivities } from "../../../lib/content";
import styles from "./page.module.css";

const MapMarkerEditor = dynamic(() => import("../../../sections/MapMarkerEditor"), {
  ssr: false,
  loading: () => <div className={styles.loading}>Loading editor…</div>,
});

export const metadata = {
  title: "Map editor (dev)",
  robots: { index: false, follow: false },
};

const initialMarkers = walkingDistanceActivities
  .map((item, index) => ({
    number: index + 1,
    title: item.title,
    lat: item.lat,
    lng: item.lng,
  }))
  .filter((m) => m.lat != null && m.lng != null);

export default function DevMapPage() {
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Dev tool</p>
        <h1 className={styles.title}>Walking activities — marker editor</h1>
        <p className={styles.subtitle}>
          Drag any pin to reposition it. New coordinates are listed on the right and can be copied
          as a code snippet to paste into <code>src/lib/content.js</code>. Changes are not
          persisted — this page is for testing positions only.
        </p>
      </header>
      <MapMarkerEditor initialMarkers={initialMarkers} />
    </main>
  );
}
