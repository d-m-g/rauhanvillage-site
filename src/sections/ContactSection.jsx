import BookingForm from "./BookingForm";
import Card from "../components/Card";
import Heading from "../components/Heading";
import Section from "../components/Section";
import { contactInfo } from "../lib/content";
import styles from "./ContactSection.module.css";

const drivingDirections = [
  {
    title: "Rauhan Marinella Village Hotel",
    label: "Google maps location — Hotel",
    href:
      "https://maps.google.com/?q=Vipelenpelto+7+Rauha+55320+Finland",
  },
  {
    title: "Rauhan Marinella Apartments",
    label: "Google maps location — Apartments",
    href: "https://www.google.com/maps/place/Almintie+8,+55320+Lappeenranta,+Finland/@61.1947439,28.6950905,18z",
  },
];

export default function ContactSection() {
  return (
    <Section id="contact">
      <div className={styles.layout}>
        <Card className={styles.infoCard}>
          <div className={styles.intro}>
            <Heading eyebrow="Contact us" as="h2">
              We will answer you as soon as possible
            </Heading>
            <div className={styles.infoGrid}>
              <div className={styles.infoTile}>
                <p className={styles.infoLabel}>Email</p>
                <a className={styles.infoLink} href={`mailto:${contactInfo.email}`}>
                  {contactInfo.email}
                </a>
              </div>
              <div className={styles.infoTile}>
                <p className={styles.infoLabel}>Address</p>
                <p className={styles.infoText}>
                  Vipelenpelto 7,
                  <br />
                  55320, Rauha
                </p>
              </div>
              <div className={styles.infoTile}>
                <p className={styles.infoLabel}>WhatsApp / Phone</p>
                <a className={styles.infoLink} href={`tel:${contactInfo.phone}`}>
                  {contactInfo.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <div className={styles.directions}>
            <Heading eyebrow="Driving directions" as="h3">
              How to find us
            </Heading>
            <div className={styles.directionsGrid}>
              {drivingDirections.map((item) => (
                <a
                  className={styles.directionCard}
                  href={item.href}
                  key={item.title}
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className={styles.directionTitle}>{item.title}</p>
                  <span className={styles.directionLabel}>
                    {item.label}
                    <span aria-hidden="true" className={styles.arrow}>
                      →
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Card>

        <span aria-hidden="true" className={styles.divider} />

        <Card as="section" className={styles.formCard}>
          <BookingForm />
        </Card>
      </div>
    </Section>
  );
}
