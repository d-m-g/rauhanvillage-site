import Reveal from "../components/Reveal";
import styles from "./HomepageServicesSection.module.css";

const serviceItems = [
  {
    title: "Children",
    description:
      "Children of all ages are welcome. Baby cot and baby chair available by request.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M11.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9ZM2 20c0-3.87 4.27-7 9.5-7S21 16.13 21 20H2Z" />
      </svg>
    ),
  },
  {
    title: "Barbeque",
    description:
      "All needed BBQ equipment provided free of charge. Enjoy the picturesque terrace.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 10h-2V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h-1V5.5H6.5V10Zm13.5 1.5h-2l-2 4H8l-2-4H4a1 1 0 0 0 0 2h.72l2.28 4.54A2 2 0 0 0 8.78 23h6.44a2 2 0 0 0 1.78-1.08L19.28 17H20a1 1 0 0 0 0-2ZM12 9a5 5 0 1 0 0 10A5 5 0 0 0 12 9Zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
      </svg>
    ),
  },
  {
    title: "Sauna & Dining Hall",
    description:
      "Traditional Finnish sauna and large celebration hall available for rent.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3L2 12h3v8h6v-5h2v5h6v-8h3L12 3Zm0 2.69L19 12v7h-4v-5H9v5H5v-7l7-6.31Z" />
      </svg>
    ),
  },
  {
    title: "Free Wi-Fi",
    description:
      "High-speed Wi-Fi available throughout the hotel and in the dining and celebration hall.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9Zm8 8 3 3 3-3c-1.65-1.66-4.34-1.66-6 0Zm-4-4 2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13Z" />
      </svg>
    ),
  },
  {
    title: "Free Parking",
    description:
      "Free private parking available on site. No reservation needed.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6Zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2Z" />
      </svg>
    ),
  },
  {
    title: "Pets Welcome",
    description:
      "Pets allowed by request in designated apartments. Mention your pet when booking.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm15 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 2c-3.96 0-12 1.84-12 7v2h24v-2c0-5.16-8.04-7-12-7Z" />
      </svg>
    ),
  },
];

export default function HomepageServicesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {serviceItems.map((item, index) => (
            <Reveal
              as="article"
              className={styles.item}
              delay={index * 70}
              key={item.title}
              variant="up"
            >
              <div className={styles.iconWrap}>{item.icon}</div>
              <div className={styles.body}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.text}>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
