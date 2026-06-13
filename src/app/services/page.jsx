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
    "Services at Rauhan Marinella Village — sport camps, events, meetings, long-term rentals, sauna, discounted Aquapark tickets, cleaning, linen and catering.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Hotel services"
        title="Our hotel offers a wide range of services and facilities"
        description="From sport camps and celebrations to meetings, sauna rental and discounted Aquapark tickets — Rauhan Marinella Village is set up for groups and longer stays."
        stats={[
          "Sport camps & meetings",
          "Sauna rental",
          "Discounted Aquapark tickets",
          "Long-term rent available",
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
