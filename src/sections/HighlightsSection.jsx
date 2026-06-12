import Link from "next/link";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import {
  hotelAboutLeft,
  hotelAboutRight,
  hotelHighlights,
} from "../lib/content";
import styles from "./HighlightsSection.module.css";

function AboutParagraph({ item }) {
  if (typeof item === "string") {
    return <p>{item}</p>;
  }

  const parts = item.text.split(item.bold);
  return (
    <p>
      {parts[0]}
      <strong>{item.bold}</strong>
      {parts[1]}
    </p>
  );
}

export default function HighlightsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <ul className={styles.highlightList}>
            {hotelHighlights.map((item, index) => (
              <Reveal
                as="li"
                className={styles.highlightItem}
                delay={index * 90}
                key={item.title}
                variant="left"
              >
                <span className={styles.marker} aria-hidden="true">
                  ››
                </span>
                <div className={styles.highlightBody}>
                  <h3 className={styles.highlightTitle}>{item.title}</h3>
                  <p className={styles.highlightText}>
                    {item.description}
                    {item.link ? (
                      <>
                        {" "}
                        See our{" "}
                        <Link className={styles.inlineLink} href={item.link.href}>
                          {item.link.label}
                        </Link>{" "}
                        page.
                      </>
                    ) : null}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </aside>

        <div className={styles.main}>
          <div className={styles.columns}>
            <Reveal className={styles.column} delay={100} variant="up">
              {hotelAboutLeft.map((item) => (
                <AboutParagraph
                  item={item}
                  key={typeof item === "string" ? item : item.text}
                />
              ))}
            </Reveal>
            <Reveal className={styles.column} delay={200} variant="up">
              {hotelAboutRight.map((item) => (
                <AboutParagraph
                  item={item}
                  key={typeof item === "string" ? item : item.text}
                />
              ))}
            </Reveal>
          </div>
        </div>
      </div>

      <Reveal variant="up">
        <div className={styles.ctaBar}>
          <div className={styles.ctaInner}>
            <p className={styles.ctaTagline}>
              We always give the best prices for direct booking!
            </p>
            <Button href="/contact" className={styles.ctaBtn}>
              Book a Room
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
