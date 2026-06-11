import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({
  href,
  type = "button",
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const classes = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    const isExternal = href.startsWith("http");

    if (isExternal) {
      return (
        <a className={classes} href={href} rel="noreferrer" target="_blank" {...props}>
          {children}
        </a>
      );
    }

    return (
      <Link className={classes} href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}
