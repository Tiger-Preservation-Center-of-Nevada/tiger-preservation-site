const siteName = "The Tiger Preservation Center of Nevada";

const ogImage = {
  url: "/assets/shoka.jpg",
  width: 609,
  height: 332,
  alt: "Shoka, a white tiger resting at the Tiger Preservation Center of Nevada",
};

/**
 * Per-page Open Graph metadata. Next.js replaces (not merges) the layout's
 * openGraph object, so each page must carry the full set.
 */
export function ogFor(title: string, description: string, path: string) {
  return {
    type: "website" as const,
    siteName,
    title: `${title} · ${siteName}`,
    description,
    url: path,
    images: [ogImage],
  };
}
