import ApartmentDetailLayout from "../../../components/ApartmentDetailLayout";
import {
  lux3Gallery,
  lux3Intro,
  lux3RoomSpecColumns,
} from "../../../lib/content";
import { createPageMetadata } from "../../../lib/seo";

export const metadata = createPageMetadata({
  title: "Lux Apartments 3",
  description:
    "3-bedroom apartment with sauna and lake-view balcony — opposite Holiday Club Saimaa, 900 m from Rauhan Marinella Village Hotel.",
  path: "/apartments/lux-3",
});

export default function LuxApartments3Page() {
  return (
    <ApartmentDetailLayout
      gallery={lux3Gallery}
      intro={lux3Intro}
      lead="Luxury 3-bedroom apartments on the lake coast"
      roomSpecColumns={lux3RoomSpecColumns}
      title="3-Bedroom Apartment with Sauna"
    />
  );
}
