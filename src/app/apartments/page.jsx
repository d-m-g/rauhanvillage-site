import Reveal from "../../components/Reveal";
import ApartHotelGallery from "../../sections/ApartHotelGallery";
import BookingCtaSection from "../../sections/BookingCtaSection";
import {
  apartHotelGallery,
  apartHotelIntro,
  apartHotelRoomSpecs,
  apartHotelTypes,
} from "../../lib/content";
import { createPageMetadata } from "../../lib/seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Apart-Hotel",
  description:
    "Hotel offers 4 types of two-bedroom apartments for 4 or 5 people, with and without pets. Fully equipped kitchen, private entrance, 300 m from Lake Saimaa.",
  path: "/apartments",
});

function ApartmentTypeCard({ type, index }) {
  const petsLabel = type.petsAllowed ? "Pets allowed" : "Pets not allowed";

  return (
    <Reveal
      as="article"
      className={styles.typeCard}
      delay={index * 80}
      variant="up"
    >
      <div className={styles.typeHeader}>
        <span className={styles.typeCapacity}>{type.capacity} guests</span>
        <span
          className={styles.typeBadge}
          data-pets={type.petsAllowed}
        >
          {petsLabel}
        </span>
      </div>
      <h3 className={styles.typeTitle}>
        2-bedroom apartment for {type.capacity} people
      </h3>
      <p className={styles.typeBeds}>{type.beds}</p>
      <ul className={styles.typeList}>
        {type.extras.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function ApartmentsPage() {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <Reveal immediate variant="up">
          <div className={styles.heroInner}>
            <h1 className={styles.heroTitle}>Apart-Hotel</h1>
            <p className={styles.heroLead}>
              Hotel offers 4 types of apartments for 4 or 5 people (with and
              without pets).
            </p>
          </div>
        </Reveal>
      </section>

      {/* Gallery */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <Reveal variant="fade">
            <p className={styles.eyebrow}>Gallery</p>
            <h2 className={styles.sectionTitle}>Photo gallery</h2>
            <ApartHotelGallery images={apartHotelGallery} />
          </Reveal>
        </div>
      </section>

      {/* Intro + policies */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <Reveal variant="up">
            <div className={styles.introCard}>
              <h2 className={styles.sectionTitle}>About our apartments</h2>
              <ul className={styles.introList}>
                {apartHotelIntro.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Apartment types */}
      <section className={styles.typesSection}>
        <div className={styles.container}>
          <Reveal variant="fade">
            <p className={styles.eyebrow}>Choose your layout</p>
            <h2 className={styles.sectionTitle}>Apartment types</h2>
            <p className={styles.sectionLead}>
              Four configurations to match your group size and whether you travel
              with pets.
            </p>
          </Reveal>
          <div className={styles.typesGrid}>
            {apartHotelTypes.map((type, index) => (
              <ApartmentTypeCard index={index} key={`${type.capacity}-${type.petsAllowed}`} type={type} />
            ))}
          </div>
        </div>
      </section>

      {/* Room specifications */}
      <section className={styles.specsSection}>
        <div className={styles.container}>
          <Reveal variant="fade">
            <p className={styles.eyebrow}>What&apos;s inside</p>
            <h2 className={styles.sectionTitle}>Room &amp; amenities</h2>
          </Reveal>
          <div className={styles.specsGrid}>
            {apartHotelRoomSpecs.map((spec, index) => (
              <Reveal
                as="article"
                className={styles.specCard}
                delay={index * 60}
                key={spec.title}
                variant="up"
              >
                <h3 className={styles.specTitle}>{spec.title}</h3>
                <ul className={styles.specList}>
                  {spec.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BookingCtaSection
        buttonLabel="Book a Room"
        heading="Ready to book your stay?"
      />
    </main>
  );
}
