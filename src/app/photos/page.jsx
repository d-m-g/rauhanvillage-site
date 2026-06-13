import BookingCtaSection from "../../sections/BookingCtaSection";
import PageHero from "../../sections/PageHero";
import PhotoGallery from "../../sections/PhotoGallery";
import Section from "../../components/Section";
import Heading from "../../components/Heading";
import { photoFeatures, photoGallery } from "../../lib/content";
import { createPageMetadata } from "../../lib/seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Photos",
  description:
    "Photo gallery of Rauhan Marinella Village Hotel — apartments, surroundings, and Lake Saimaa.",
  path: "/photos",
});

export default function PhotosPage() {
  return (
    <main>
      <PageHero
        eyebrow="Gallery"
        title="Photos"
        description="Take a look at Rauhan Marinella Village Hotel, its apartments, the forest surroundings, and nearby Lake Saimaa."
        primaryCta={{ label: "Book a Room", href: "/contact" }}
      />
      <Section>
        <Heading align="center" as="h2" className={styles.heading} eyebrow="Our hotel">
          Our hotel in pictures
        </Heading>
        <PhotoGallery features={photoFeatures} photos={photoGallery} />
      </Section>
      <BookingCtaSection />
    </main>
  );
}
