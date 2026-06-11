import Button from "../components/Button";
import Card from "../components/Card";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Section from "../components/Section";
import Textarea from "../components/Textarea";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <Section id="contact">
      <Card className={styles.card}>
        <div className={styles.copy}>
          <Heading eyebrow="Contact" as="h2">
            Book a room or ask a question
          </Heading>
          <p className={styles.text}>
            Fill in the form below and we will get back to you as soon as
            possible. You can also reach us by phone or WhatsApp at{" "}
            <a href="tel:+358407236337">+358 40 723 6337</a> or email{" "}
            <a href="mailto:rauhanvillage@gmail.com">
              rauhanvillage@gmail.com
            </a>
            .
          </p>
        </div>
        <form className={styles.form}>
          <Input id="name" label="Name" name="name" placeholder="Your name" />
          <Input
            id="phone"
            label="Phone / WhatsApp"
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
            id="subject"
            label="Subject"
            name="subject"
            placeholder="e.g. Booking enquiry for August"
          />
          <label className={styles.selectField} htmlFor="type">
            <span className={styles.selectLabel}>Type</span>
            <select
              className={styles.select}
              defaultValue="Booking enquiry"
              id="type"
              name="type"
            >
              <option>Booking enquiry</option>
              <option>Question</option>
              <option>Group reservation</option>
              <option>Other</option>
            </select>
          </label>
          <Textarea
            id="message"
            label="Message"
            name="message"
            placeholder="Tell us about your stay — dates, number of guests, etc."
          />
          <label className={styles.checkbox}>
            <input name="personal-data" type="checkbox" />
            <span>I allow usage of my personal data</span>
          </label>
          <div className={styles.actions}>
            <Button type="submit">Send enquiry</Button>
            <span className={styles.note}>
              Form submission coming soon — please call or email directly.
            </span>
          </div>
        </form>
      </Card>
    </Section>
  );
}
