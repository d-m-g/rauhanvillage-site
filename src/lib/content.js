export const contactInfo = {
  phone: "+358407236337",
  phoneDisplay: "+358 40 723 6337",
  email: "rauhanvillage@gmail.com",
  address: "Vipelenpelto 7, 55320, Rauha, Finland",
  mapsUrl:
    "https://maps.google.com/?q=Vipelenpelto+7+Rauha+55320+Finland",
};

export const hotelHighlights = [
  {
    title: "Great place for families with children",
    description:
      "Each apartment has a separate entrance, kitchen, and two bedrooms. Baby cot and baby chair are available by request.",
  },
  {
    title: "Groups are welcome",
    description:
      "Best place for camps accommodation! Large dining and meeting hall is available for all types of group activities.",
  },
  {
    title: "Wide range of activities in the walking distance",
    description:
      "Aquapark, Rope Activity Park, bowling, golf, tennis, bike rental, ski trails, and more are located in the walking distance from the hotel.",
    link: { href: "/activities", label: "Activities" },
  },
  {
    title: "Discounted tickets to Aquapark",
    description:
      "Our guests can purchase tickets with discount up to 50% to the Aquapark located 900 m from the hotel.",
  },
];

export const hotelAboutLeft = [
  {
    text: "Hotel Rauhan Marinella Village is situated just 300 m from Lake Saimaa in the surrounding forest.",
    bold: "Hotel Rauhan Marinella Village",
  },
  "The property is situated just 900 m from Holiday Club Saimaa Aquapark and Spa and a sandy beach on Lake Saimaa.",
  "There are many activities available for all ages within 2 km including a rope activity course Atreenalin Park, bowling, Angry Birds Activity Park, rentals for skiing, cycling, boating, off-terrain, and more. There is a tennis court located 900 m away from the property and Imatra Golf Club within 3 km. Guests will find several hiking and cross-country skiing trails near the hotel.",
  "The location is 10 minutes drive from central Imatra and half an hour drive from Lappeenranta.",
];

export const hotelAboutRight = [
  {
    text: "All 10 apartments of Rauhan Marinella Village have 2 bedrooms, a living room with a fully equipped kitchen with a microwave, a stovetop, a fridge, kettle, and coffee-making facilities. The bathroom is equipped with a toilet, sink, and 2 showers. You may find a sofa and TV with cable channels in the living room.",
    bold: "Rauhan Marinella Village",
  },
  "All cooking facilities and final cleaning are included in the price.",
  "The hotel features barbecue facilities free of charge and a picturesque terrace. Private parking is available on site free of charge.",
  "Sauna and a large celebration hall with a kitchen could be rented for an extra charge.",
];

export const apartHotelGallery = [
  { src: "/assets/apartments/bedroom-1.jpg", alt: "Bedroom with twin beds" },
  { src: "/assets/apartments/living-room.jpg", alt: "Living and dining area" },
  { src: "/assets/apartments/bathroom.jpg", alt: "Bathroom with shower" },
  { src: "/assets/apartments/bedroom-2.jpg", alt: "Second bedroom with bunk bed" },
  { src: "/assets/apartments/kitchen.jpg", alt: "Fully equipped kitchen" },
  { src: "/assets/apartments/dining.jpg", alt: "Dining area" },
];

export const apartHotelIntro = [
  "All apartments consist of two bedrooms, a living room with a fully equipped kitchen, and a bathroom with a toilet and two showers.",
  "Final cleaning is included in the price.",
  "The upper floor is accessible by stairs only. You may choose the floor in your booking request (based on availability).",
  "Smoking is strictly prohibited in all apartments.",
  "Pets are allowed only in 2 apartments (by request) for an extra charge.",
  "Extra beds and baby cots are possible by request for an extra charge (based on availability).",
  "It is possible to rent linen for an extra charge (10 euro per set).",
];

export const apartHotelRoomSpecs = [
  {
    title: "Bedroom 1",
    items: [
      "2 single beds (could be put together or separate) or 1 single and 1 bunk bed",
      "Large wardrobe",
      "Socket near the bed",
    ],
  },
  {
    title: "Bedroom 2",
    items: [
      "2 single beds (could be put together or separate)",
      "Large wardrobe",
      "Socket near the bed",
    ],
  },
  {
    title: "Bathroom",
    items: ["Toilet", "2 showers", "Sink", "Hair dryer"],
  },
  {
    title: "Kitchen and dining area",
    items: [
      "Dining table",
      "Stovetop",
      "Microwave",
      "Refrigerator",
      "Coffee maker",
      "Electric kettle",
      "Dishes and cooking facilities",
    ],
  },
  {
    title: "Seating area",
    items: ["Sofa", "Satellite channels", "Flat-screen TV"],
  },
  {
    title: "Each apartment has",
    items: ["Private entrance", "Mosquito nets on the windows"],
  },
];

export const apartHotelTypes = [
  {
    capacity: 4,
    petsAllowed: true,
    beds: "4 single beds (could be put together or separate)",
    extras: [
      "Baby cot for extra price — 20 euro per stay",
      "Pets for extra price — 20 euro per stay",
    ],
  },
  {
    capacity: 4,
    petsAllowed: false,
    beds: "4 single beds (could be put together or separate)",
    extras: [
      "Baby cot for extra price — 20 euro per stay",
      "Pets are not allowed",
    ],
  },
  {
    capacity: 5,
    petsAllowed: true,
    beds: "3 single beds and 1 bunk bed for 2 people",
    extras: [
      "Baby cot for extra price — 20 euro per stay",
      "Pets for extra price — 20 euro per stay",
    ],
  },
  {
    capacity: 5,
    petsAllowed: false,
    beds: "4 single beds in bedrooms and a sofa bed in the living room",
    extras: [
      "Baby cot for extra price — 20 euro per stay",
      "Pets are not allowed",
    ],
  },
];

export const apartmentFeatures = [
  "2 bedrooms and a living room",
  "Fully equipped kitchen (microwave, stovetop, fridge, kettle, coffee maker)",
  "Bathroom with toilet, sink, and 2 showers",
  "Sofa and TV with cable channels",
  "Separate private entrance",
  "All cooking facilities included",
  "Final cleaning included in the price",
];

export const apartments = [
  {
    title: "Standard Apartments",
    description:
      "All 10 of our apartments feature 2 bedrooms, a living room with a fully equipped kitchen, and a private entrance. Peaceful forest surroundings just 300 m from Lake Saimaa.",
    features: apartmentFeatures,
    ctaLabel: "Enquire about availability",
    ctaHref: "/contact",
    href: "/apartments",
  },
  {
    title: "Lux Apartments 3",
    description:
      "Our premium Lux 3 apartments offer an elevated stay experience with upgraded furnishings and finishes in the same spacious two-bedroom layout.",
    features: [
      "2 bedrooms with premium bedding",
      "Upgraded kitchen appliances",
      "Enhanced bathroom fixtures",
      "Private entrance and terrace access",
    ],
    ctaLabel: "See Lux 3 details",
    ctaHref: "/apartments/lux-3",
    href: "/apartments/lux-3",
  },
  {
    title: "Lux Apartments 1",
    description:
      "Lux 1 apartments combine comfort and style, ideal for couples or small families who want a premium forest-side retreat near Lake Saimaa.",
    features: [
      "2 bedrooms with premium bedding",
      "Modern kitchen with full appliances",
      "Stylish bathroom with upgraded fixtures",
      "Private entrance",
    ],
    ctaLabel: "See Lux 1 details",
    ctaHref: "/apartments/lux-1",
    href: "/apartments/lux-1",
  },
];

export const activities = [
  {
    title: "Aquapark & Spa",
    description:
      "Holiday Club Saimaa Aquapark and Spa is just 900 m from the hotel. Our guests enjoy up to 50% discount on tickets.",
    distance: "900 m",
  },
  {
    title: "Atreenalin Rope Activity Park",
    description:
      "An exciting rope course activity park for all ages, perfect for families and groups seeking an outdoor adventure.",
    distance: "Within 2 km",
  },
  {
    title: "Bowling",
    description:
      "Bowling lanes available nearby for a fun indoor activity for families and groups of all ages.",
    distance: "Within 2 km",
  },
  {
    title: "Golf",
    description:
      "Imatra Golf Club is located within 3 km, offering a beautiful course surrounded by Finnish nature.",
    distance: "3 km",
  },
  {
    title: "Tennis",
    description:
      "A tennis court is located 900 m from the property — great for a match before or after breakfast.",
    distance: "900 m",
  },
  {
    title: "Cycling & Bike Rental",
    description:
      "Explore the beautiful Saimaa lakeside and forest trails on two wheels. Bike rental is available within walking distance.",
    distance: "Within 2 km",
  },
  {
    title: "Boating",
    description:
      "Boat rental lets you explore the vast Lake Saimaa archipelago. The lake is just 300 m from the hotel.",
    distance: "300 m",
  },
  {
    title: "Hiking & Cross-Country Skiing",
    description:
      "Several scenic hiking trails and cross-country skiing tracks run right through the surrounding forest.",
    distance: "On-site",
  },
];

export const services = [
  {
    title: "Barbeque",
    description:
      "The hotel offers all the needed BBQ equipment for guests free of charge. Enjoy an evening cookout on our picturesque terrace.",
  },
  {
    title: "Sauna & Dining Hall",
    description:
      "A traditional Finnish sauna and a large celebration and dining hall with a kitchen can be rented for an extra charge — perfect for private events and group gatherings.",
  },
  {
    title: "Free Wi-Fi",
    description:
      "Free high-speed Wi-Fi is available throughout Rauhan Marinella Village Hotel and in the dining and celebration hall.",
  },
  {
    title: "Free Parking",
    description:
      "Free private parking is available on site. No reservation needed.",
  },
  {
    title: "Pets Welcome",
    description:
      "Pets are allowed by request in specially designated apartments. Please mention your pet when booking.",
  },
  {
    title: "Baby Equipment",
    description:
      "A baby cot and baby chair are available by request, making family stays extra comfortable.",
  },
];

export const guestReviews = [
  {
    text: "Erittäin hyvä ja rauhallinen lomapaikka. Ympäristössä monenlaisia uimarantoja. Todella ystävällinen henkilökunta. On grillaamismahdollisuudet. Puhdas ja viihtyisä asunto.",
    author: "Riikka",
    country: "Finland",
  },
  {
    text: "Very clean apartment, helpful and kind staff. It was nice that bed linen was included in the price. Location is fine if you have a car. You can have your own peace. You get a discount to a spa.",
    author: "Külli",
    country: "Estonia",
  },
];

export const hotelStats = [
  "10 apartments for rent",
  "300 m from Lake Saimaa",
  "Children of all ages welcome",
  "Direct booking — best prices",
];
