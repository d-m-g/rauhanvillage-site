import BookingCtaSection from "../sections/BookingCtaSection";
import HeroSection from "../sections/HeroSection";
import HighlightsSection from "../sections/HighlightsSection";
import HomepageServicesSection from "../sections/HomepageServicesSection";
import ReviewsSection from "../sections/ReviewsSection";
import { createPageMetadata } from "../lib/seo";

const homeTitle = "Rauhan Village | Apart Hotel in Rauha";
const homeMetadata = createPageMetadata({
  title: "Apart Hotel in Rauha",
  description:
    "Rauhan Marinella Village Hotel — apart-hotel in Rauha, Finland. 10 apartments, 300 m from Lake Saimaa. Families and groups welcome.",
  path: "/",
});

export const metadata = {
  ...homeMetadata,
  title: { absolute: homeTitle },
  openGraph: { ...homeMetadata.openGraph, title: homeTitle },
  twitter: { ...homeMetadata.twitter, title: homeTitle },
};

export default function HomePage() {
  return (
    <main>
      {/* 1. Full-bleed hero photo + hotel name + tagline */}
      <HeroSection />
      {/* 2. Blue section: 4 highlight blurbs + hotel description */}
      <HighlightsSection />
      {/* 3. White section: 6 services/amenities */}
      <HomepageServicesSection />
      {/* 4. Gray section: guest reviews */}
      <ReviewsSection />
      {/* 5. Gradient blue: "Have any questions? Contact us" */}
      <BookingCtaSection />
    </main>
  );
}
