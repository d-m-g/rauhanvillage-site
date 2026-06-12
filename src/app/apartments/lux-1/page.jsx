import ApartmentDetailLayout from "../../../components/ApartmentDetailLayout";
import {
  lux1Gallery,
  lux1Intro,
  lux1RoomSpecColumns,
} from "../../../lib/content";
import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  title: "Lux Apartments 1",
  description:
    "1-bedroom apartment with sauna and lake-view balcony — opposite Holiday Club Saimaa, 900 m from Rauhan Marinella Village Hotel.",
  path: "/apartments/lux-1",
});

export default function LuxApartments1Page() {
  return (
    <ApartmentDetailLayout
      gallery={lux1Gallery}
      intro={lux1Intro}
      lead="Luxury 1-bedroom apartments on the lake coast"
      roomSpecColumns={lux1RoomSpecColumns}
      title="1-Bedroom Apartment with Sauna"
    />
  );
}
