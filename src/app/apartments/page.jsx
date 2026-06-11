import BookingCtaSection from "../../sections/BookingCtaSection";
import PageHero from "../../sections/PageHero";
import Section from "../../components/Section";
import Heading from "../../components/Heading";
import Card from "../../components/Card";
import Button from "../../components/Button";
import { apartments, apartmentFeatures } from "../../lib/content";
import { createPageMetadata } from "../../lib/seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Apartments",
  description:
    "10 fully equipped two-bedroom apartments in a peaceful forest setting, 300 m from Lake Saimaa. Standard and Lux options available.",
  path: "/apartments",
});

export default function ApartmentsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Where you stay"
        title="Our apartments"
        description="Rauhan Marinella Village offers 10 spacious apartment-style accommodations in the forest, just 300 m from Lake Saimaa. All apartments have a separate entrance, 2 bedrooms, and a fully equipped kitchen."
        stats={[
          "10 apartments available",
          "2 bedrooms per apartment",
          "Private entrance per unit",
          "Final cleaning included",
        ]}
        primaryCta={{ label: "Book Now", href: "/contact" }}
      />

      <Section>
        <Heading align="center" as="h2" className={styles.heading} eyebrow="Apartment types">
          Choose your apartment
        </Heading>
        <div className={styles.grid}>
          {apartments.map((apt) => (
            <Card as="article" className={styles.card} key={apt.title}>
              <h3 className={styles.title}>{apt.title}</h3>
              <p className={styles.body}>{apt.description}</p>
              <ul className={styles.list}>
                {apt.features.map((f) => (
                  <li className={styles.listItem} key={f}>
                    {f}
                  </li>
                ))}
              </ul>
              <Button href={apt.ctaHref}>{apt.ctaLabel}</Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="accent">
        <Heading align="center" as="h2" className={styles.heading} eyebrow="All apartments include">
          Standard features
        </Heading>
        <div className={styles.featuresGrid}>
          {apartmentFeatures.map((f) => (
            <div className={styles.feature} key={f}>
              <span className={styles.featureDot} aria-hidden="true" />
              <span>{f}</span>
            </div>
          ))}
        </div>
      </Section>

      <BookingCtaSection />
    </main>
  );
}
