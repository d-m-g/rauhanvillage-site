import BookingCtaSection from "../../../sections/BookingCtaSection";
import PageHero from "../../../sections/PageHero";
import Section from "../../../components/Section";
import Heading from "../../../components/Heading";
import Card from "../../../components/Card";
import { createPageMetadata } from "../../../lib/seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Lux Apartments 1",
  description:
    "Lux 1 apartments at Rauhan Marinella Village — stylish and comfortable, ideal for couples or small families near Lake Saimaa.",
  path: "/apartments/lux-1",
});

const features = [
  "2 bedrooms with premium bedding and linens",
  "Modern kitchen with full appliances",
  "Stylish bathroom with upgraded fixtures",
  "Private entrance",
  "Sofa and TV with cable channels",
  "Final cleaning included in the price",
  "Baby cot and chair available by request",
];

const highlights = [
  {
    title: "Style & comfort",
    text: "Thoughtfully designed interiors combining comfort and contemporary style for a relaxing retreat.",
  },
  {
    title: "Ideal for couples & families",
    text: "Two full bedrooms and a generous living area — great for couples, small families, or friends traveling together.",
  },
  {
    title: "Nature at your doorstep",
    text: "Surrounded by Finnish forest with Lake Saimaa just 300 m away — peace and tranquility guaranteed.",
  },
];

export default function LuxApartments1Page() {
  return (
    <main>
      <PageHero
        eyebrow="Apartments"
        title="Lux Apartments 1"
        description="Lux 1 apartments combine comfort and contemporary style, making them ideal for couples or small families wanting a premium forest-side retreat near Lake Saimaa."
        stats={[
          "2 bedrooms",
          "Premium & modern interior",
          "Private entrance",
          "Forest setting, 300 m from lake",
        ]}
        primaryCta={{ label: "Book Lux 1", href: "/contact" }}
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
