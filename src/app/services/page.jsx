import BookingCtaSection from "../../sections/BookingCtaSection";
import PageHero from "../../sections/PageHero";
import Section from "../../components/Section";
import Heading from "../../components/Heading";
import Card from "../../components/Card";
import { services } from "../../lib/content";
import { createPageMetadata } from "../../lib/seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Services at Rauhan Marinella Village — BBQ, sauna, dining hall, free Wi-Fi, free parking, pet-friendly options, and baby equipment.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Hotel services"
        title="Everything you need"
        description="From a complimentary BBQ terrace to a private sauna and celebration hall for groups — Rauhan Marinella Village is set up for a comfortable, relaxing stay."
        stats={[
          "BBQ free of charge",
          "Sauna & hall rental",
          "Free Wi-Fi & parking",
          "Pets welcome",
        ]}
        primaryCta={{ label: "Book a Room", href: "/contact" }}
      />
      <Section>
        <Heading align="center" as="h2" className={styles.heading} eyebrow="What we offer">
          Hotel services
        </Heading>
        <div className={styles.grid}>
          {services.map((service) => (
            <Card as="article" className={styles.card} key={service.title}>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.text}>{service.description}</p>
            </Card>
          ))}
        </div>
      </Section>
      <BookingCtaSection />
    </main>
  );
}
