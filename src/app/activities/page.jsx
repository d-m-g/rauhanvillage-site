import BookingCtaSection from "../../sections/BookingCtaSection";
import PageHero from "../../sections/PageHero";
import ActivitiesSection from "../../sections/ActivitiesSection";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Activities",
  description:
    "Activities around Rauhan Marinella Village — 18 within walking distance and 12 reachable by car, including aquapark, beach, restaurants, golf, and shopping.",
  path: "/activities",
});

export default function ActivitiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Activities"
        title="Activities around"
        description="List of activities around the hotel — in walking distance and reachable by car."
        stats={[
          "18 walking distance",
          "12 by car",
          "Beach 900 m away",
          "Aquapark 900 m away",
        ]}
      />
      <ActivitiesSection />
      <BookingCtaSection />
    </main>
  );
}
