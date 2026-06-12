"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./ApartHotelGallery.module.css";

const AUTO_INTERVAL = 5500;
const SCROLL_MS = 1100;
const VISIBLE = 4;
const SLIDE_WIDTH = 320;
const SLIDE_HEIGHT = 240;
const HOVER_SCALE = 1.36;

function isSlideVisible(slideIndex, currentIndex) {
  const offset = slideIndex - currentIndex;
  return offset >= 0 && offset < VISIBLE;
}

export default function ApartHotelGallery({ images }) {
  const trackRef = useRef(null);
  const isWrappingRef = useRef(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const total = images.length;
  const loopedImages = total > 0 ? [...images, ...images] : [];
  const loopedTotal = loopedImages.length;

  const goTo = useCallback((target) => {
    if (total === 0) {
      return;
    }
    isWrappingRef.current = false;
    setTransitionEnabled(true);
    setIndex(target % total);
  }, [total]);

  const completeWrap = useCallback(() => {
    setTransitionEnabled(false);
    setIndex(0);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTransitionEnabled(true);
        isWrappingRef.current = false;
      });
    });
  }, []);

  useEffect(() => {
    if (paused || total === 0 || isWrappingRef.current) {
      return undefined;
    }

    const timer = setInterval(() => {
      setIndex((current) => {
        if (isWrappingRef.current || current >= total) {
          return current;
        }
        return current + 1;
      });
    }, AUTO_INTERVAL);

    return () => clearInterval(timer);
  }, [paused, total]);

  useEffect(() => {
    if (total === 0 || index !== total) {
      return undefined;
    }

    isWrappingRef.current = true;
    const track = trackRef.current;
    if (!track) {
      completeWrap();
      return undefined;
    }

    function handleTransitionEnd(event) {
      if (event.target !== track || event.propertyName !== "transform") {
        return;
      }
      completeWrap();
    }

    const fallbackTimer = setTimeout(completeWrap, SCROLL_MS + 150);

    track.addEventListener("transitionend", handleTransitionEnd);
    return () => {
      clearTimeout(fallbackTimer);
      track.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [index, total, completeWrap]);

  useEffect(() => {
    if (total === 0) {
      return;
    }
    if (index > total) {
      completeWrap();
    }
  }, [index, total, completeWrap]);

  if (total === 0) {
    return null;
  }

  const activeDot = index % total;

  return (
    <div
      className={styles.gallery}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        "--total": loopedTotal,
        "--visible": VISIBLE,
        "--hover-scale": HOVER_SCALE,
        "--scroll-ms": `${SCROLL_MS}ms`,
      }}
    >
      <div className={styles.viewport}>
        <div
          className={styles.track}
          data-animate={transitionEnabled}
          ref={trackRef}
          style={{
            transform: `translateX(-${(index / loopedTotal) * 100}%)`,
          }}
        >
          {loopedImages.map((image, slideIndex) => (
            <div
              aria-hidden={slideIndex >= total || !isSlideVisible(slideIndex, index)}
              className={styles.slide}
              data-visible={isSlideVisible(slideIndex, index)}
              key={`${image.src}-${slideIndex}`}
            >
              <Image
                alt={slideIndex < total ? image.alt : ""}
                className={styles.slideImage}
                height={SLIDE_HEIGHT}
                priority={slideIndex < VISIBLE}
                sizes={`(max-width: 1120px) 25vw, ${SLIDE_WIDTH}px`}
                src={image.src}
                width={SLIDE_WIDTH}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dots}>
        {images.map((image, dotIndex) => (
          <button
            aria-label={`Go to slide ${dotIndex + 1}`}
            aria-pressed={dotIndex === activeDot}
            className={styles.dot}
            data-active={dotIndex === activeDot}
            key={image.src}
            onClick={() => goTo(dotIndex)}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
