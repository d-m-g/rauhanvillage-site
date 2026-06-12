import Link from "next/link";
import Button from "../components/Button";
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
        {/* Left — blue highlight sidebar */}
        <aside className={styles.sidebar}>
          <ul className={styles.highlightList}>
            {hotelHighlights.map((item) => (
              <li className={styles.highlightItem} key={item.title}>
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
              </li>
            ))}
          </ul>
        </aside>

        {/* Right — white two-column about */}
        <div className={styles.main}>
          <div className={styles.columns}>
            <div className={styles.column}>
              {hotelAboutLeft.map((item) => (
                <AboutParagraph item={item} key={typeof item === "string" ? item : item.text} />
              ))}
            </div>
            <div className={styles.column}>
              {hotelAboutRight.map((item) => (
                <AboutParagraph item={item} key={typeof item === "string" ? item : item.text} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom — booking CTA bar */}
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
    </section>
  );
}
