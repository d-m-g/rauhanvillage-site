import BookingCtaSection from "../../sections/BookingCtaSection";
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
