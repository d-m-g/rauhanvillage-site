"use client";

import { useState } from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
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

const initialState = {
  name: "",
  phone: "",
  email: "",
  arrival: "",
  departure: "",
  apartment: "",
  adults: "",
  children: "",
  pets: "",
  referral: "",
  promo: "",
  message: "",
  consent: false,
  website: "",
};

function SelectField({ id, label, name, onChange, options, value }) {
  return (
    <label className={styles.selectField} htmlFor={id}>
      <span className={styles.selectLabel}>{label}</span>
      <select
        className={styles.select}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function BookingForm() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const isSubmitting = status.state === "submitting";

  const update = (field) => (event) => {
    const value =
      event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ state: "submitting", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        const errorMessage =
          data?.error ??
          "Something went wrong. Please try again or email us directly.";
        setStatus({ state: "error", message: errorMessage });
        return;
      }

      setStatus({
        state: "success",
        message:
          "Thanks — your request has been sent. We'll get back to you shortly.",
      });
      setValues(initialState);
    } catch {
      setStatus({
        state: "error",
        message:
          "Could not reach the server. Please check your connection and try again.",
      });
    }
  };

  return (
    <>
      <div className={styles.formHeader}>
        <Heading eyebrow="Reservation" as="h3">
          Send a request
        </Heading>
        <p className={styles.formIntro}>
          Tell us your travel dates and a few details — we&apos;ll reply with
          availability and pricing.
        </p>
      </div>
      <form className={styles.form} noValidate onSubmit={handleSubmit}>
        <input
          aria-hidden="true"
          autoComplete="off"
          className={styles.honeypot}
          name="website"
          onChange={update("website")}
          tabIndex={-1}
          type="text"
          value={values.website}
        />
        <Input
          autoComplete="name"
          id="name"
          label="Name"
          name="name"
          onChange={update("name")}
          placeholder="Your name"
          required
          value={values.name}
        />
        <Input
          autoComplete="tel"
          id="phone"
          label="Phone Number"
          name="phone"
          onChange={update("phone")}
          placeholder="+358..."
          type="tel"
          value={values.phone}
        />
        <Input
          autoComplete="email"
          id="email"
          label="Email"
          name="email"
          onChange={update("email")}
          placeholder="you@example.com"
          required
          type="email"
          value={values.email}
        />
        <Input
          id="arrival"
          label="Arrival date"
          name="arrival"
          onChange={update("arrival")}
          type="date"
          value={values.arrival}
        />
        <Input
          id="departure"
          label="Departure date"
          name="departure"
          onChange={update("departure")}
          type="date"
          value={values.departure}
        />
        <SelectField
          id="apartment-type"
          label="Apartment type"
          name="apartment"
          onChange={update("apartment")}
          options={apartmentOptions}
          value={values.apartment}
        />
        <SelectField
          id="adults"
          label="Number of adults"
          name="adults"
          onChange={update("adults")}
          options={adultsOptions}
          value={values.adults}
        />
        <SelectField
          id="children"
          label="Number of children"
          name="children"
          onChange={update("children")}
          options={childrenOptions}
          value={values.children}
        />
        <SelectField
          id="pets"
          label="Pets"
          name="pets"
          onChange={update("pets")}
          options={petsOptions}
          value={values.pets}
        />
        <Input
          id="referral"
          label="How did you find us?"
          name="referral"
          onChange={update("referral")}
          placeholder="e.g. Google, booking site, recommendation..."
          value={values.referral}
        />
        <Input
          className={styles.fullWidth}
          id="promo"
          label="Promotion code"
          name="promo"
          onChange={update("promo")}
          placeholder="Enter code if you have one"
          value={values.promo}
        />
        <Textarea
          id="special-request"
          label="Special request"
          name="message"
          onChange={update("message")}
          placeholder="Anything else we should know about your stay?"
          value={values.message}
        />
        <label className={styles.checkbox}>
          <input
            checked={values.consent}
            name="consent"
            onChange={update("consent")}
            required
            type="checkbox"
          />
          <span>I agree to usage of my personal data</span>
        </label>
        <div className={styles.actions}>
          <Button disabled={isSubmitting} type="submit">
            {isSubmitting ? "Sending…" : "Send"}
          </Button>
          {status.state === "success" ? (
            <span className={`${styles.note} ${styles.noteSuccess}`}>
              {status.message}
            </span>
          ) : null}
          {status.state === "error" ? (
            <span className={`${styles.note} ${styles.noteError}`}>
              {status.message}
            </span>
          ) : null}
        </div>
      </form>
    </>
  );
}
