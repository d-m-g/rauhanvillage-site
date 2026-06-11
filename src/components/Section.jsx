import Container from "./Container";
import styles from "./Section.module.css";

export default function Section({
  as: Tag = "section",
  tone = "default",
  id,
  className = "",
  children,
}) {
  const classes = [styles.section, styles[tone], className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} id={id}>
      <Container>{children}</Container>
    </Tag>
  );
}
