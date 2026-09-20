import styles from "./Container.module.css";

export default function Container({
  as: Tag = "div",
  className = "",
  children,
  ...rest
}) {
  const classes = [styles.container, className].filter(Boolean).join(" ");

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
