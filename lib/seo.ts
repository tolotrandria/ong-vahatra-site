import type { Metadata } from "next";
import type { NextSeoProps } from "next-seo";

import { absoluteUrl } from "@/lib/utils";

const defaultTitle = "ONG VAHATRA - Microfinance sociale et développement rural à Madagascar";
const defaultDescription =
  "ONG VAHATRA accompagne les familles rurales de Madagascar par la microfinance sociale, l'agriculture, la santé communautaire et l'inclusion financière.";

export const defaultSeoConfig: NextSeoProps = {
  title: defaultTitle,
  description: defaultDescription,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: absoluteUrl(),
    siteName: "ONG VAHATRA",
  },
  twitter: {
    cardType: "summary_large_image",
  },
};

type MetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

export function createMetadata({
  title = defaultTitle,
  description = defaultDescription,
  path = "",
  image = "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1200",
}: MetadataInput = {}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "ONG VAHATRA",
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "ONG VAHATRA à Madagascar",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
