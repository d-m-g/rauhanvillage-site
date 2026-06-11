import BookingCtaSection from "../../sections/BookingCtaSection";
import PageHero from "../../sections/PageHero";
import Section from "../../components/Section";
import Heading from "../../components/Heading";
import { createPageMetadata } from "../../lib/seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "News",
  description:
    "Latest news and updates from Rauhan Marinella Village Hotel in Rauha, Finland.",
  path: "/news",
});

export default function NewsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Updates"
        title="News"
        description="Stay up to date with the latest news, seasonal offers, and updates from Rauhan Marinella Village Hotel."
        primaryCta={{ label: "Book a Room", href: "/contact" }}
      />
      <Section>
        <Heading align="center" as="h2" className={styles.heading} eyebrow="Latest">
          News & updates coming soon
        </Heading>
        <p className={styles.placeholder}>
          We are setting up our news section. Check back soon or{" "}
          <a className={styles.link} href="mailto:rauhanvillage@gmail.com">
            subscribe via email
          </a>{" "}
          to receive updates directly.
        </p>
      </Section>
      <BookingCtaSection />
    </main>
  );
}
