import BookingCtaSection from "../../sections/BookingCtaSection";
import PageHero from "../../sections/PageHero";
import ActivitiesSection from "../../sections/ActivitiesSection";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Activities",
  description:
    "Activities near Rauhan Marinella Village Hotel — Aquapark, golf, tennis, hiking, cycling, boating, bowling and more, all within 2 km.",
  path: "/activities",
});

export default function ActivitiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Things to do"
        title="Activities nearby"
        description="From the Holiday Club Saimaa Aquapark to hiking trails through Finnish forest, there is something for everyone within walking or cycling distance of the hotel."
        stats={[
          "Aquapark 900 m away",
          "Lake Saimaa 300 m away",
          "Golf within 3 km",
          "8+ activities within 2 km",
        ]}
        primaryCta={{ label: "Book a Room", href: "/contact" }}
      />
      <ActivitiesSection />
      <BookingCtaSection />
    </main>
  );
}
