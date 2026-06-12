"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

const variants = {
  up: styles.variantUp,
  fade: styles.variantFade,
  left: styles.variantLeft,
  right: styles.variantRight,
  scale: styles.variantScale,
};

export default function Reveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  duration,
  immediate = false,
  as: Tag = "div",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    if (immediate) {
      return undefined;
    }

    const element = ref.current;
    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [immediate]);

  const style = {
    ...(delay ? { transitionDelay: `${delay}ms` } : {}),
    ...(duration ? { transitionDuration: `${duration}ms` } : {}),
  };

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${variants[variant] ?? variants.up} ${
        visible ? styles.visible : ""
      } ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
