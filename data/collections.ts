export interface CollectionItem {
  name: string;
  slug: string;
  href: string;
  description?: string;
}

export interface ExploreCollectionStage {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  ctaText?: string;
}

export interface CollectionCardItem {
  id: string;
  slug: string;
  category: string;
  titlePrimary: string;
  titleSecondary: string;
  description: string;
  image: string;
  alt?: string;
}

export interface CollectionDetail {
  slug: string;
  badge: string;
  titlePrimary: string;
  titleSecondary: string;
  description: string;
  bannerImage?: string;
  mobileBannerImage?: string;
}

// 1. Navigation Collections (Used in Navbar dropdown & mobile menu)
export const dummyNavbarCollections: CollectionItem[] = [
  { name: "All Collections", slug: "all", href: "/collections" },
  { name: "Bras", slug: "bras", href: "/collections/bras" },
  { name: "Panties", slug: "panties", href: "/collections/panties" },
  { name: "Loungewear", slug: "loungewear", href: "/collections/loungewear" },
  { name: "Shapewear", slug: "shapewear", href: "/collections/shapewear" },
  { name: "Sleepwear", slug: "sleepwear", href: "/collections/sleepwear" },
  { name: "New Arrivals", slug: "new-arrivals", href: "/collections/new-arrivals" },
];

// 2. Homepage Explore Collections ("For Every Stage, Every Women")
export const dummyExploreCollections: ExploreCollectionStage[] = [
  {
    id: "stage-teens",
    category: "Teens",
    title: "Teens",
    subtitle: "Comfort-first essentials for growing bodies.",
    image: "/images/HomePage/Collection/Teens.webp",
    href: "/collections/teens",
    ctaText: "ADD TO CART",
  },
  {
    id: "stage-young-women",
    category: "Young Women",
    title: "Young Women",
    subtitle: "Fresh styles for your everyday life.",
    image: "/images/HomePage/Collection/YoungWomen.webp",
    href: "/collections/young-women",
    ctaText: "ADD TO CART",
  },
  {
    id: "stage-women",
    category: "Women",
    title: "Women",
    subtitle: "Everyday comfort, beautifully elevated.",
    image: "/images/HomePage/Collection/Womens.webp",
    href: "/collections/women",
    ctaText: "ADD TO CART",
  },
];

// 3. Collections Page Filter Categories
export const dummyCollectionGridCategories: string[] = [
  "ALL CATEGORIES",
  "COMFORT SERIES",
  "ACTIVE SERIES",
  "TEENS",
  "SHAPING SERIES",
  "SPECIAL EDITS",
];

// 4. Collections Page Dynamic Grid Cards
export const dummyCollectionGridItems: CollectionCardItem[] = [
  {
    id: "everyday-essentials-1",
    slug: "everyday-essentials",
    category: "COMFORT SERIES",
    titlePrimary: "Everyday",
    titleSecondary: "Essentials",
    description: "All-day comfort for your everyday life",
    image: "/images/Dummydata/collection/everyday1.webp",
    alt: "Everyday Essentials - Korean comfort innerwear",
  },
  {
    id: "active-series",
    slug: "active-series",
    category: "ACTIVE SERIES",
    titlePrimary: "Active",
    titleSecondary: "Series",
    description: "All-day comfort for your everyday life",
    image: "/images/Dummydata/collection/active1.webp",
    alt: "Active Series - Breathable supportive sports bra",
  },
  {
    id: "everyday-essentials-2",
    slug: "seamless-comfort",
    category: "TEENS",
    titlePrimary: "Everyday",
    titleSecondary: "Essentials",
    description: "All-day comfort for your everyday life",
    image: "/images/Dummydata/collection/everyday2.webp",
    alt: "Everyday Essentials - Seamless lilac comfort bra",
  },
  {
    id: "lace-collections-1",
    slug: "lace-bras",
    category: "SHAPING SERIES",
    titlePrimary: "Lace",
    titleSecondary: "Collections",
    description: "All-day comfort for your everyday life",
    image: "/images/Dummydata/collection/lace1.webp",
    alt: "Lace Collections - Delicate blush lace bra",
  },
  {
    id: "shorts-collections",
    slug: "shorts-collections",
    category: "SPECIAL EDITS",
    titlePrimary: "Shorts",
    titleSecondary: "Collections",
    description: "All-day comfort for your everyday life",
    image: "/images/Dummydata/collection/shots.webp",
    alt: "Shorts Collections - Soft everyday cycling shorts",
  },
  {
    id: "lace-collections-2",
    slug: "lace-panties",
    category: "SPECIAL EDITS",
    titlePrimary: "Lace",
    titleSecondary: "Collections",
    description: "All-day comfort for your everyday life",
    image: "/images/Dummydata/collection/lace2.webp",
    alt: "Lace Collections - Soft lace trim panties trio",
  },
  {
    id: "lace-collections-3",
    slug: "lace-panties",
    category: "SPECIAL EDITS",
    titlePrimary: "Lace",
    titleSecondary: "Collections",
    description: "All-day comfort for your everyday life",
    image: "/images/Dummydata/collection/lace3.webp",
    alt: "Lace Collections - Soft lace trim panties trio",
  },
  {
    id: "lace-collections-4",
    slug: "camisole-collections",
    category: "SPECIAL EDITS",
    titlePrimary: "Camisole",
    titleSecondary: "Collections",
    description: "All-day comfort for your everyday life",
    image: "/images/Dummydata/collection/camisole.webp",
    alt: "Camisole Collections - Pure silk camisole",
  },
];

// Helper functions for data fetching
export function getNavbarCollections(): CollectionItem[] {
  return dummyNavbarCollections;
}

export function getExploreCollections(): ExploreCollectionStage[] {
  return dummyExploreCollections;
}

export function getCollectionGridCategories(): string[] {
  return dummyCollectionGridCategories;
}

export function getCollectionGridItems(): CollectionCardItem[] {
  return dummyCollectionGridItems;
}

export function getCollectionCardBySlug(slug: string): CollectionCardItem | undefined {
  return dummyCollectionGridItems.find((item) => item.slug === slug);
}

export function getAllCollectionSlugs(): string[] {
  const slugs = new Set<string>();
  
  dummyNavbarCollections.forEach((c) => {
    if (c.slug && c.slug !== "all") slugs.add(c.slug);
  });
  
  dummyExploreCollections.forEach((c) => {
    const s = c.href.replace("/collections/", "");
    if (s) slugs.add(s);
  });
  
  dummyCollectionGridItems.forEach((c) => {
    if (c.slug) slugs.add(c.slug);
  });

  return Array.from(slugs);
}

// 5. Dynamic Collection Detail Meta (used on /collections/[slug])
export const dummyCollectionDetails: Record<string, CollectionDetail> = {
  "comfort-series": {
    slug: "comfort-series",
    badge: "KOREAN COMFORT",
    titlePrimary: "Comfort",
    titleSecondary: "Series",
    description: "Everyday support with a soft, lightweight feel.",
    bannerImage: "/images/Collections/Banner.webp",
    mobileBannerImage: "/images/Collections/mob_Banner.webp",
  },
  "bras": {
    slug: "bras",
    badge: "KOREAN COMFORT",
    titlePrimary: "Comfort",
    titleSecondary: "Series",
    description: "Everyday support with a soft, lightweight feel.",
    bannerImage: "/images/Collections/Banner.webp",
    mobileBannerImage: "/images/Collections/mob_Banner.webp",
  },
  "everyday-essentials": {
    slug: "everyday-essentials",
    badge: "KOREAN COMFORT",
    titlePrimary: "Everyday",
    titleSecondary: "Essentials",
    description: "Feather-light foundational innerwear designed to move naturally with your day.",
    bannerImage: "/images/Collections/Banner.webp",
    mobileBannerImage: "/images/Collections/mob_Banner.webp",
  },
  "active-series": {
    slug: "active-series",
    badge: "KOREAN COMFORT",
    titlePrimary: "Active",
    titleSecondary: "Series",
    description: "Breathable, high-mobility support with sweat-wicking cooling comfort.",
    bannerImage: "/images/Collections/Banner.webp",
    mobileBannerImage: "/images/Collections/mob_Banner.webp",
  },
  "sports-bras": {
    slug: "sports-bras",
    badge: "KOREAN COMFORT",
    titlePrimary: "Active",
    titleSecondary: "Series",
    description: "Breathable, high-mobility support with sweat-wicking cooling comfort.",
    bannerImage: "/images/Collections/Banner.webp",
    mobileBannerImage: "/images/Collections/mob_Banner.webp",
  },
  "seamless-comfort": {
    slug: "seamless-comfort",
    badge: "KOREAN COMFORT",
    titlePrimary: "Seamless",
    titleSecondary: "Comfort",
    description: "Stitch-free, laser-cut perfection that disappears completely beneath any outfit.",
    bannerImage: "/images/Collections/Banner.webp",
    mobileBannerImage: "/images/Collections/mob_Banner.webp",
  },
  "lace-bras": {
    slug: "lace-bras",
    badge: "KOREAN COMFORT",
    titlePrimary: "Lace",
    titleSecondary: "Collections",
    description: "Delicate feminine lace with wire-free support and skin-loving lining.",
    bannerImage: "/images/Collections/Banner.webp",
    mobileBannerImage: "/images/Collections/mob_Banner.webp",
  },
  "lace-panties": {
    slug: "lace-panties",
    badge: "KOREAN COMFORT",
    titlePrimary: "Lace",
    titleSecondary: "Collections",
    description: "Delicate lace trim panties crafted with ultra-soft modal fabric.",
    bannerImage: "/images/Collections/Banner.webp",
    mobileBannerImage: "/images/Collections/mob_Banner.webp",
  },
  "shorts-collections": {
    slug: "shorts-collections",
    badge: "KOREAN COMFORT",
    titlePrimary: "Shorts",
    titleSecondary: "Collections",
    description: "Soft everyday cycling shorts and boy-shorts for all-day anti-chafing ease.",
    bannerImage: "/images/Collections/Banner.webp",
    mobileBannerImage: "/images/Collections/mob_Banner.webp",
  },
  "camisole-collections": {
    slug: "camisole-collections",
    badge: "KOREAN COMFORT",
    titlePrimary: "Camisole",
    titleSecondary: "Collections",
    description: "Ultra-fluid breathable layering essentials with adjustable delicate straps.",
    bannerImage: "/images/Collections/Banner.webp",
    mobileBannerImage: "/images/Collections/mob_Banner.webp",
  },
  "panties": {
    slug: "panties",
    badge: "KOREAN COMFORT",
    titlePrimary: "Pure",
    titleSecondary: "Panties",
    description: "Second-skin breathability, zero panty-lines, and natural moisture balance.",
    bannerImage: "/images/Collections/Banner.webp",
    mobileBannerImage: "/images/Collections/mob_Banner.webp",
  },
  "loungewear": {
    slug: "loungewear",
    badge: "KOREAN COMFORT",
    titlePrimary: "Silk",
    titleSecondary: "Loungewear",
    description: "Slow morning serenity in draped modal and temperature-regulating silk blends.",
    bannerImage: "/images/Collections/Banner.webp",
    mobileBannerImage: "/images/Collections/mob_Banner.webp",
  },
  "shapewear": {
    slug: "shapewear",
    badge: "KOREAN COMFORT",
    titlePrimary: "Shaping",
    titleSecondary: "Series",
    description: "Targeted contouring, natural curve definition, and breathability without restriction.",
    bannerImage: "/images/Collections/Banner.webp",
    mobileBannerImage: "/images/Collections/mob_Banner.webp",
  },
  "sleepwear": {
    slug: "sleepwear",
    badge: "KOREAN COMFORT",
    titlePrimary: "Dreamy",
    titleSecondary: "Sleepwear",
    description: "Gentle, non-binding sets engineered for relaxing, restorative sleep.",
    bannerImage: "/images/Collections/Banner.webp",
    mobileBannerImage: "/images/Collections/mob_Banner.webp",
  },
  "new-arrivals": {
    slug: "new-arrivals",
    badge: "NEW IN",
    titlePrimary: "New",
    titleSecondary: "Arrivals",
    description: "Explore the latest Korean comfort silhouettes, soft seasonal hues, and fresh drops.",
    bannerImage: "/images/Collections/Banner.webp",
    mobileBannerImage: "/images/Collections/mob_Banner.webp",
  },
  "teens": {
    slug: "teens",
    badge: "KOREAN COMFORT",
    titlePrimary: "Teens",
    titleSecondary: "Collection",
    description: "Comfort-first essentials and gentle beginner bras designed for growing bodies.",
    bannerImage: "/images/Collections/Banner.webp",
    mobileBannerImage: "/images/Collections/mob_Banner.webp",
  },
  "young-women": {
    slug: "young-women",
    badge: "KOREAN COMFORT",
    titlePrimary: "Young",
    titleSecondary: "Women",
    description: "Fresh, dynamic silhouettes crafted for active days, study sessions, and social ease.",
    bannerImage: "/images/Collections/Banner.webp",
    mobileBannerImage: "/images/Collections/mob_Banner.webp",
  },
  "women": {
    slug: "women",
    badge: "KOREAN COMFORT",
    titlePrimary: "Women's",
    titleSecondary: "Collection",
    description: "Refined everyday elegance, sculpted support, and timeless fabric craftsmanship.",
    bannerImage: "/images/Collections/Banner.webp",
    mobileBannerImage: "/images/Collections/mob_Banner.webp",
  },
};

export function getCollectionDetails(slug: string): CollectionDetail {
  if (dummyCollectionDetails[slug]) {
    return dummyCollectionDetails[slug];
  }

  // Graceful fallback for any unknown slug
  const clean = slug.replace(/[-_]+/g, " ").trim();
  const words = clean.split(" ");
  const titlePrimary = words[0] ? words[0].charAt(0).toUpperCase() + words[0].slice(1) : "Our";
  const titleSecondary = words.slice(1).join(" ")
    ? words.slice(1).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    : "Collection";

  return {
    slug,
    badge: "KOREAN COMFORT",
    titlePrimary,
    titleSecondary,
    description: "Everyday support with a soft, lightweight feel.",
    bannerImage: "/images/Collections/Banner.webp",
    mobileBannerImage: "/images/Collections/mob_Banner.webp",
  };
}
