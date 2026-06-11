const siteUrl = "https://rauhanvillage.com";

export const defaultMetadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rauhan Marinella Village Hotel",
    template: "%s | Rauhan Village",
  },
  description:
    "Apart-hotel in Rauha, Finland. 10 apartments, 300 m from Lake Saimaa. Family-friendly, groups welcome. Direct booking — best prices.",
  openGraph: {
    title: "Rauhan Marinella Village Hotel",
    description:
      "Apart-hotel in Rauha, Finland. 10 apartments, 300 m from Lake Saimaa. Family-friendly, groups welcome. Direct booking — best prices.",
    url: siteUrl,
    siteName: "Rauhan Marinella Village",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rauhan Marinella Village Hotel",
    description:
      "Apart-hotel in Rauha, Finland. 10 apartments, 300 m from Lake Saimaa. Family-friendly, groups welcome. Direct booking — best prices.",
  },
};

export function createPageMetadata({
  title,
  description = defaultMetadata.description,
  path = "/",
}) {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
      url,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description,
    },
  };
}
