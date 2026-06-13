import ContactSection from "../../sections/ContactSection";
import PageHero from "../../sections/PageHero";
import { contactInfo } from "../../lib/content";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Contact & Book",
  description:
    "Book a room or ask a question — contact Rauhan Marinella Village Hotel by form, phone, WhatsApp, or email.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact us"
        title="We will answer you as soon as possible"
        description="Book a room, ask about availability, or enquire about group stays and events. You can also reach us by phone, WhatsApp or email."
        stats={[
          `Phone: ${contactInfo.phoneDisplay}`,
          `Email: ${contactInfo.email}`,
          contactInfo.address,
        ]}
        primaryCta={{ label: "Call / WhatsApp", href: `tel:${contactInfo.phone}` }}
      />
      <ContactSection />
    </main>
  );
}
