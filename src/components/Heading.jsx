import styles from "./Heading.module.css";

export default function Heading({
  as: Tag = "h2",
  eyebrow,
  align = "left",
  className = "",
  children,
}) {
  const wrapperClassName = [styles.wrapper, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClassName} data-align={align}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <Tag className={styles.heading}>{children}</Tag>
    </div>
  );
}
