import styles from "./Field.module.css";

export default function Textarea({ label, id, className = "", ...props }) {
  const classes = [styles.control, styles.textarea, className]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={styles.field} htmlFor={id}>
      <span className={styles.label}>{label}</span>
      <textarea className={classes} id={id} {...props} />
    </label>
  );
}
