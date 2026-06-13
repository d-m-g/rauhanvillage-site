import Image from "next/image";
import Reveal from "../components/Reveal";
import styles from "./PhotoGallery.module.css";

function PhotoTile({
  caption,
  className,
  height = 600,
  index = 0,
  priority = false,
  sizes,
  src,
  alt,
  width = 900,
}) {
  return (
    <Reveal as="figure" className={`${styles.tile} ${className ?? ""}`.trim()} delay={index * 60} variant="up">
      <span aria-hidden="true" className={styles.overlay} />
      <Image
        alt={alt}
        className={styles.image}
        height={height}
        priority={priority}
        sizes={sizes}
        src={src}
        width={width}
      />
      {caption ? (
        <figcaption className={styles.caption}>
          <span className={styles.captionText}>{caption}</span>
        </figcaption>
      ) : null}
    </Reveal>
  );
}

export default function PhotoGallery({ features, photos }) {
  return (
    <div className={styles.layout}>
      {features?.length ? (
        <div className={styles.featureRow}>
          {features.slice(0, 2).map((photo, index) => (
            <PhotoTile
              alt={photo.alt}
              caption={photo.caption}
              className={styles.featureTile}
              height={780}
              index={index}
              key={photo.src}
              priority
              sizes="(max-width: 720px) 100vw, 50vw"
              src={photo.src}
              width={1280}
            />
          ))}
        </div>
      ) : null}
      {photos?.length ? (
        <div className={styles.grid}>
          {photos.map((photo, index) => (
            <PhotoTile
              alt={photo.alt}
              caption={photo.caption}
              height={520}
              index={index}
              key={photo.src}
              sizes="(max-width: 720px) 100vw, (max-width: 1120px) 50vw, 33vw"
              src={photo.src}
              width={720}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
