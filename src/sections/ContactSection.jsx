import Button from "../components/Button";
import Card from "../components/Card";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Section from "../components/Section";
import Textarea from "../components/Textarea";
import { contactInfo } from "../lib/content";
import styles from "./ContactSection.module.css";

const apartmentOptions = [
  "2 bedroom 4 people",
  "2 bedroom 4 people with pets",
  "2 bedroom 5 people",
  "2 bedroom 5 people with pets",
];

const adultsOptions = ["1", "2", "3", "4", "5"];
const childrenOptions = ["0", "1", "2", "3", "4"];
const petsOptions = ["Apartment with allowed pets", "Apartment without pets"];

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

function SelectField({ id, label, name, options, defaultValue = "" }) {
  return (
    <label className={styles.selectField} htmlFor={id}>
      <span className={styles.selectLabel}>{label}</span>
      <select
        className={styles.select}
        defaultValue={defaultValue}
        id={id}
        name={name}
      >
        <option disabled value="">
          {label}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

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
                <p className={styles.infoLabel}>Rauhan Village</p>
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
          <div className={styles.formHeader}>
            <Heading eyebrow="Reservation" as="h3">
              Book a room
            </Heading>
            <p className={styles.formIntro}>
              Tell us your travel dates and a few details — we&apos;ll reply
              with availability and pricing.
            </p>
          </div>
          <form className={styles.form}>
            <Input id="name" label="Name" name="name" placeholder="Your name" />
            <Input
              id="phone"
              label="Phone Number"
              name="phone"
              placeholder="+358..."
              type="tel"
            />
            <Input
              id="email"
              label="Email"
              name="email"
              placeholder="you@example.com"
              type="email"
            />
            <Input
              id="arrival"
              label="Arrival date"
              name="arrival"
              type="date"
            />
            <Input
              id="departure"
              label="Departure date"
              name="departure"
              type="date"
            />
            <SelectField
              id="apartment-type"
              label="Apartment type"
              name="apartment_type"
              options={apartmentOptions}
            />
            <SelectField
              id="adults"
              label="Number of adults"
              name="adults"
              options={adultsOptions}
            />
            <SelectField
              id="children"
              label="Number of children"
              name="children"
              options={childrenOptions}
            />
            <SelectField
              id="pets"
              label="Pets"
              name="pets"
              options={petsOptions}
            />
            <Input
              id="referral"
              label="How did you find us?"
              name="referral"
              placeholder="e.g. Google, booking site, recommendation..."
            />
            <Input
              className={styles.fullWidth}
              id="promo"
              label="Promotion code"
              name="promo"
              placeholder="Enter code if you have one"
            />
            <Textarea
              id="special-request"
              label="Special request"
              name="special_request"
              placeholder="Anything else we should know about your stay?"
            />
            <label className={styles.checkbox}>
              <input name="personal-data" type="checkbox" />
              <span>I agree to usage of my personal data</span>
            </label>
            <div className={styles.actions}>
              <Button type="submit">Send</Button>
              <span className={styles.note}>
                Form submission coming soon — please call, WhatsApp or email
                directly.
              </span>
            </div>
          </form>
        </Card>
      </div>
    </Section>
  );
}
