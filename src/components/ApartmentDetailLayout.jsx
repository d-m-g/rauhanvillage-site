import Reveal from "./Reveal";
import ApartHotelGallery from "../sections/ApartHotelGallery";
import BookingCtaSection from "../sections/BookingCtaSection";
import styles from "../app/apartments/page.module.css";

function SpecCard({ spec, index }) {
  return (
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
  );
}

export default function ApartmentDetailLayout({
  title,
  lead,
  gallery = [],
  intro = [],
  roomSpecs = [],
  roomSpecColumns = null,
  introTitle = "About the apartment",
}) {
  const hasGallery = gallery.length > 0;
  const hasRoomSpecs =
    roomSpecs.length > 0 ||
    (roomSpecColumns?.some((column) => column.length > 0) ?? false);

  return (
    <main>
      <section className={styles.hero}>
        <Reveal immediate variant="up">
          <div className={styles.heroInner}>
            <h1 className={styles.heroTitle}>{title}</h1>
            {lead ? <p className={styles.heroLead}>{lead}</p> : null}
          </div>
        </Reveal>
      </section>

      {hasGallery ? (
        <section className={styles.gallerySection}>
          <div className={styles.container}>
            <Reveal variant="fade">
              <ApartHotelGallery images={gallery} />
            </Reveal>
          </div>
        </section>
      ) : null}

      {intro.length > 0 ? (
        <section className={styles.introSection}>
          <div className={styles.container}>
            <Reveal variant="up">
              <div className={styles.introCard}>
                <h2 className={styles.sectionTitle}>{introTitle}</h2>
                <ul className={styles.introList}>
                  {intro.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {hasRoomSpecs ? (
        <section className={styles.specsSection}>
          <div className={styles.container}>
            <Reveal variant="fade">
              <p className={styles.eyebrow}>What&apos;s inside</p>
              <h2 className={styles.sectionTitle}>Room &amp; amenities</h2>
            </Reveal>
            {roomSpecColumns ? (
              <div className={styles.specsColumns}>
                {roomSpecColumns.map((column, columnIndex) => (
                  <div className={styles.specColumn} key={columnIndex}>
                    {column.map((spec, specIndex) => (
                      <SpecCard
                        index={columnIndex * 10 + specIndex}
                        key={spec.title}
                        spec={spec}
                      />
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.specsGrid}>
                {roomSpecs.map((spec, index) => (
                  <SpecCard index={index} key={spec.title} spec={spec} />
                ))}
              </div>
            )}
          </div>
        </section>
      ) : null}

      <BookingCtaSection
        buttonLabel="Book a Room"
        heading="Ready to book your stay?"
      />
    </main>
  );
}
