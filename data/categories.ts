export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  image: string;
  href: string;
  description?: string;
}

export const dummyCategories: CategoryItem[] = [
  {
    id: "cat-1",
    name: "Bra",
    slug: "bras",
    image: "/images/HomePage/Categories/bra.webp",
    href: "/collections/bras",
    description: "Everyday comfort bras designed for effortless support.",
  },
  {
    id: "cat-2",
    name: "Jelly Bra",
    slug: "jelly-bra",
    image: "/images/HomePage/Categories/jelly-bra.webp",
    href: "/collections/jelly-bra",
    description: "Feather-light jelly band support with zero wire pressure.",
  },
  {
    id: "cat-3",
    name: "Panties",
    slug: "panties",
    image: "/images/HomePage/Categories/panties.webp",
    href: "/collections/panties",
    description: "Breathable, seamless panties for second-skin all-day wear.",
  },
  {
    id: "cat-4",
    name: "Sports Bra",
    slug: "sports-bras",
    image: "/images/HomePage/Categories/sports-bra.webp",
    href: "/collections/sports-bras",
    description: "Bounce-control activewear with cooling moisture-wicking fabric.",
  },
  {
    id: "cat-5",
    name: "Shaper Bra",
    slug: "shaper-bras",
    image: "/images/HomePage/Categories/shaper-bra.webp",
    href: "/collections/shaper-bras",
    description: "Smooth contour shaping with natural lift and posture ease.",
  },
  {
    id: "cat-6",
    name: "Bralettes",
    slug: "bralettes",
    image: "/images/HomePage/Categories/bralettes.webp",
    href: "/collections/bralettes",
    description: "Delicate lace and ultra-soft fabrics for laid-back luxury.",
  },
  {
    id: "cat-7",
    name: "Silk Loungewear",
    slug: "loungewear",
    image: "/images/HomePage/Categories/loungewear.webp",
    href: "/collections/loungewear",
    description: "Indulgently smooth silk blends for resting and unwinding.",
  },
  {
    id: "cat-8",
    name: "Sleepwear",
    slug: "sleepwear",
    image: "/images/HomePage/Categories/sleepwear.webp",
    href: "/collections/sleepwear",
    description: "Dreamy comfort sets designed for peaceful slumber.",
  },
  {
    id: "cat-9",
    name: "Seamless Sets",
    slug: "seamless",
    image: "/images/HomePage/Categories/seamless.webp",
    href: "/collections/seamless",
    description: "No-show laser-cut sets that remain completely invisible under clothing.",
  },
];

// Helper functions for data fetching
export function getCategories(): CategoryItem[] {
  return dummyCategories;
}

export function getCategoryBySlug(slug: string): CategoryItem | undefined {
  return dummyCategories.find((cat) => cat.slug === slug);
}

export function getCategoryById(id: string): CategoryItem | undefined {
  return dummyCategories.find((cat) => cat.id === id);
}

