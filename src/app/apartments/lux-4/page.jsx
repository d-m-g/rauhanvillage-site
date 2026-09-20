import ApartmentDetailLayout from "../../../components/ApartmentDetailLayout";
import {
  lux4Gallery,
  lux4Intro,
  lux4RoomSpecColumns,
} from "../../../lib/content";
import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  title: "Lux Apartments 4",
  description:
    "4-bedroom apartment with sauna and lake-view balcony — opposite Holiday Club Saimaa, 900 m from Rauhan Marinella Village Hotel.",
  path: "/apartments/lux-4",
});

export default function LuxApartments4Page() {
  return (
    <ApartmentDetailLayout
      gallery={lux4Gallery}
      intro={lux4Intro}
      lead="Luxury 4-bedroom apartments on the lake coast"
      roomSpecColumns={lux4RoomSpecColumns}
      title="4-Bedroom Apartment with Sauna"
    />
  );
}
