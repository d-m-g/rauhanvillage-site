import BookingCtaSection from "../../../sections/BookingCtaSection";
import PageHero from "../../../sections/PageHero";
import Section from "../../../components/Section";
import Heading from "../../../components/Heading";
import Card from "../../../components/Card";
import { createPageMetadata } from "../../../lib/seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Lux Apartments 3",
  description:
    "Premium Lux 3 apartments at Rauhan Marinella Village — upgraded furnishings, 2 bedrooms, private entrance, forest surroundings near Lake Saimaa.",
  path: "/apartments/lux-3",
});

const features = [
  "2 bedrooms with premium bedding and linens",
  "Upgraded kitchen appliances and cookware",
  "Enhanced bathroom with premium fixtures",
  "Private entrance and terrace access",
  "Sofa and TV with cable channels",
  "Final cleaning included in the price",
  "Baby cot and chair available by request",
];

const highlights = [
  {
    title: "Premium comfort",
    text: "Upgraded furnishings throughout — from the kitchen appliances to the bathroom fixtures and bedroom bedding.",
  },
  {
    title: "Private & spacious",
    text: "Your own separate entrance and terrace, two full bedrooms, and a generous living room with kitchen.",
  },
  {
    title: "Forest setting",
    text: "Nestled in the surrounding forest, just 300 m from the sandy shores of Lake Saimaa.",
  },
];

export default function LuxApartments3Page() {
  return (
    <main>
      <PageHero
        eyebrow="Apartments"
        title="Lux Apartments 3"
        description="Our Lux 3 apartments offer a premium stay experience with upgraded furnishings and finishes in the same spacious two-bedroom layout, set in peaceful forest surroundings near Lake Saimaa."
        stats={[
          "2 bedrooms",
          "Premium furnishings",
          "Private entrance & terrace",
          "Forest setting, 300 m from lake",
        ]}
        primaryCta={{ label: "Book Lux 3", href: "/contact" }}
        secondaryCta={{ label: "All apartments", href: "/apartments" }}
      />

      <Section tone="accent">
        <div className={styles.highlightsGrid}>
          {highlights.map((h) => (
            <Card as="div" className={styles.highlightCard} key={h.title}>
              <h3 className={styles.highlightTitle}>{h.title}</h3>
              <p className={styles.highlightText}>{h.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Heading as="h2" className={styles.heading} eyebrow="What is included">
          Apartment features
        </Heading>
        <ul className={styles.featureList}>
          {features.map((f) => (
            <li className={styles.featureItem} key={f}>
              {f}
            </li>
          ))}
        </ul>
      </Section>

      <BookingCtaSection />
    </main>
  );
}
