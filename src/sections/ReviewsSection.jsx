import { guestReviews } from "../lib/content";
import styles from "./ReviewsSection.module.css";

const StarIcon = () => (
  <svg className={styles.star} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
  </svg>
);

export default function ReviewsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Guest reviews</p>
        <h2 className={styles.heading}>What our guests say</h2>
        <div className={styles.grid}>
          {guestReviews.map((review) => (
            <blockquote className={styles.card} key={review.author}>
              <div className={styles.stars} aria-label="5 stars">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className={styles.quote}>&ldquo;{review.text}&rdquo;</p>
              <footer className={styles.author}>
                <span className={styles.name}>{review.author}</span>
                <span className={styles.country}>{review.country}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
