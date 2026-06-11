import styles from "./Field.module.css";

export default function Input({ label, id, className = "", ...props }) {
  const classes = [styles.control, className].filter(Boolean).join(" ");

  return (
    <label className={styles.field} htmlFor={id}>
      <span className={styles.label}>{label}</span>
      <input className={classes} id={id} {...props} />
    </label>
  );
}
