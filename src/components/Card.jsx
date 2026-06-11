import styles from "./Card.module.css";

export default function Card({
  as: Tag = "article",
  className = "",
  children,
}) {
  const classes = [styles.card, className].filter(Boolean).join(" ");

  return <Tag className={classes}>{children}</Tag>;
}
