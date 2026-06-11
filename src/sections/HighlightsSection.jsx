import Button from "../components/Button";
import { hotelHighlights } from "../lib/content";
import styles from "./HighlightsSection.module.css";

// Icons ordered to match the hotelHighlights array in content.js
const icons = [
  // 0 — Families
  <svg key="families" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7ZM6.5 8a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm11 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM12 11c3.87 0 7 1.79 7 4v1H5v-1c0-2.21 3.13-4 7-4ZM5.5 16h13c.83 0 1.5.67 1.5 1.5v.5H4v-.5c0-.83.67-1.5 1.5-1.5Z" />
  </svg>,
  // 1 — Groups
  <svg key="groups" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3Zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5C23 14.17 18.33 13 16 13Z" />
  </svg>,
  // 2 — Activities
  <svg key="activities" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13.5 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7Z" />
  </svg>,
  // 3 — Discount / ticket
  <svg key="aquapark" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42ZM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7Z" />
  </svg>,
];

const hotelDescription = [
  "Hotel Rauhan Marinella Village is situated just 300 m from the lake Saimaa in the surrounding forest.",
  "The property is situated just 900 m from Holiday Club Saimaa Aquapark and Spa and a sandy beach on lake Saimaa.",
  "All 10 apartments have 2 bedrooms, a living room with a fully equipped kitchen, and a bathroom with 2 showers. All cooking facilities and final cleaning are included in the price.",
];

export default function HighlightsSection() {
  return (
    <section className={styles.section}>
      {/* 4 blurb columns */}
      <div className={styles.blurbs}>
        {hotelHighlights.map((item, i) => (
          <div className={styles.blurb} key={item.title}>
            <div className={styles.iconWrap}>{icons[i]}</div>
            <h3 className={styles.blurbTitle}>{item.title}</h3>
            <p className={styles.blurbText}>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Hotel description + CTA */}
      <div className={styles.about}>
        <div className={styles.aboutText}>
          {hotelDescription.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className={styles.aboutCta}>
          <p className={styles.ctaTagline}>
            We always give the best prices for direct booking!
          </p>
          <Button href="/contact" className={styles.ctaBtn}>
            Book a Room
          </Button>
        </div>
      </div>
    </section>
  );
}
