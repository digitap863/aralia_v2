export interface ProductColor {
  name: string;
  hex: string;
}

export interface ProductItem {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  categorySlug?: string;
  collection: string;
  collectionSlug?: string;
  price: number;
  originalPrice?: number;
  sizes: string;
  availableSizes?: string[];
  colors: ProductColor[];
  image: string;
  hoverImage?: string;
  isBestSeller?: boolean;
  href: string;
  description?: string;
  cupType?: "Padded" | "Non-Padded" | "Wireless";
}

export const dummyProducts: ProductItem[] = [
  {
    id: "prod-1",
    name: "Aralia Comfort Bra",
    subtitle: "Soft Fit | Everyday Wear",
    category: "Bra",
    categorySlug: "bras",
    collection: "Comfort Series",
    collectionSlug: "comfort-series",
    price: 799,
    sizes: "32B-40D",
    availableSizes: ["32B", "32C", "34B", "34C", "36B", "36C", "38B", "40D"],
    colors: [
      { name: "Periwinkle", hex: "#7b8ebd" },
      { name: "Soft Coral", hex: "#f2a99b" },
      { name: "Dusty Rose", hex: "#af646d" },
      { name: "White", hex: "#ffffff" },
      { name: "Black", hex: "#171717" },
    ],
    image: "/images/HomePage/Products/jelly-bra.webp",
    hoverImage: "/images/HomePage/Products/bra.webp",
    isBestSeller: true,
    href: "/products/aralia-comfort-bra-1",
    description: "Feather-light support with zero wire pressure for everyday comfort.",
    cupType: "Wireless",
  },
  {
    id: "prod-2",
    name: "Aralia Comfort Bra",
    subtitle: "Soft Fit | Everyday Wear",
    category: "Padded Bra",
    categorySlug: "bras",
    collection: "Comfort Series",
    collectionSlug: "comfort-series",
    price: 799,
    sizes: "32B-40D",
    availableSizes: ["32B", "32C", "34B", "36C", "38B"],
    colors: [
      { name: "Soft Coral", hex: "#f2a99b" },
      { name: "Periwinkle", hex: "#7b8ebd" },
      { name: "White", hex: "#ffffff" },
      { name: "Black", hex: "#171717" },
    ],
    image: "/images/HomePage/Products/bra.webp",
    hoverImage: "/images/HomePage/Products/bralettes.webp",
    isBestSeller: true,
    href: "/products/aralia-comfort-bra-2",
    description: "Classic breathable padded bra designed for smooth shape and continuous ease.",
    cupType: "Padded",
  },
  {
    id: "prod-3",
    name: "Aralia Comfort Bra",
    subtitle: "Soft Fit | Everyday Wear",
    category: "Wireless Bra",
    categorySlug: "bras",
    collection: "Comfort Series",
    collectionSlug: "comfort-series",
    price: 799,
    sizes: "32B-40D",
    availableSizes: ["32C", "34B", "34C", "36B", "40D"],
    colors: [
      { name: "Periwinkle", hex: "#7b8ebd" },
      { name: "Dusty Rose", hex: "#af646d" },
      { name: "Black", hex: "#171717" },
    ],
    image: "/images/HomePage/Categories/bra.webp",
    hoverImage: "/images/HomePage/Products/jelly-bra.webp",
    isBestSeller: true,
    href: "/products/aralia-comfort-bra-3",
    description: "Cloud-soft contour cups offering all-day gentle lift.",
    cupType: "Wireless",
  },
  {
    id: "prod-4",
    name: "Jelly Bra",
    subtitle: "Soft Fit | Everyday Wear",
    category: "Jelly Bra",
    categorySlug: "jelly-bra",
    collection: "Comfort Series",
    collectionSlug: "comfort-series",
    price: 799,
    sizes: "32B-40D",
    availableSizes: ["32B", "34B", "34C", "36B", "36C"],
    colors: [
      { name: "Soft Coral", hex: "#f2a99b" },
      { name: "Periwinkle", hex: "#7b8ebd" },
      { name: "White", hex: "#ffffff" },
    ],
    image: "/images/HomePage/Categories/jelly-bra.webp",
    hoverImage: "/images/HomePage/Products/bralettes.webp",
    isBestSeller: true,
    href: "/products/jelly-bra",
    description: "Revolutionary jelly support band replacing rigid metal wires.",
    cupType: "Wireless",
  },
  {
    id: "prod-5",
    name: "Aralia Comfort Bra",
    subtitle: "Soft Fit | Everyday Wear",
    category: "Padded Bra",
    categorySlug: "bras",
    collection: "Comfort Series",
    collectionSlug: "comfort-series",
    price: 799,
    sizes: "32B-40D",
    availableSizes: ["32B", "34C", "36C", "38B", "40D"],
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Soft Coral", hex: "#f2a99b" },
      { name: "Black", hex: "#171717" },
    ],
    image: "/images/HomePage/Categories/shaper-bra.webp",
    hoverImage: "/images/HomePage/Products/bra.webp",
    isBestSeller: true,
    href: "/products/aralia-comfort-bra-4",
    description: "Breathable side wings for effortless posture support.",
    cupType: "Padded",
  },
  {
    id: "prod-6",
    name: "Seamless Fit Bra",
    subtitle: "Soft Fit | Second-Skin Ease",
    category: "Wireless Bra",
    categorySlug: "bras",
    collection: "Comfort Series",
    collectionSlug: "comfort-series",
    price: 899,
    sizes: "32B-40D",
    availableSizes: ["32B", "32C", "34B", "34C", "36B"],
    colors: [
      { name: "Periwinkle", hex: "#7b8ebd" },
      { name: "Dusty Rose", hex: "#af646d" },
      { name: "White", hex: "#ffffff" },
      { name: "Black", hex: "#171717" },
    ],
    image: "/images/HomePage/Products/seamless.webp",
    hoverImage: "/images/HomePage/Products/jelly-bra.webp",
    isBestSeller: false,
    href: "/products/seamless-fit-bra",
    description: "Stitch-free, laser-cut perfection that disappears under clothing.",
    cupType: "Non-Padded",
  },
  {
    id: "prod-7",
    name: "Padded Everyday Bra",
    subtitle: "Soft Feel | Everyday Wear",
    category: "Padded Bra",
    categorySlug: "bras",
    collection: "Everyday Essentials",
    collectionSlug: "everyday-essentials",
    price: 699,
    sizes: "32B-40D",
    availableSizes: ["32B", "34B", "36B", "38B"],
    colors: [
      { name: "Periwinkle", hex: "#7b8ebd" },
      { name: "Soft Coral", hex: "#f2a99b" },
      { name: "Black", hex: "#171717" },
    ],
    image: "/images/HomePage/Products/bra.webp",
    hoverImage: "/images/HomePage/Products/bralettes.webp",
    isBestSeller: true,
    href: "/products/padded-everyday",
    description: "Comfortable padded bra with soft-brushed microfiber.",
    cupType: "Padded",
  },
  {
    id: "prod-8",
    name: "Silk Bralette",
    subtitle: "Soft Feel | Wire-Free Comfort",
    category: "Wireless Bra",
    categorySlug: "bralettes",
    collection: "Lace Collections",
    collectionSlug: "lace-bras",
    price: 499,
    sizes: "32B-40D",
    availableSizes: ["32B", "32C", "34B", "36C"],
    colors: [
      { name: "Dusty Rose", hex: "#af646d" },
      { name: "Periwinkle", hex: "#7b8ebd" },
      { name: "White", hex: "#ffffff" },
    ],
    image: "/images/HomePage/Products/bralettes.webp",
    hoverImage: "/images/HomePage/Products/bra.webp",
    isBestSeller: true,
    href: "/products/silk-bralette",
    description: "Delicate lace overlay with pure silk lining for relaxed luxury.",
    cupType: "Wireless",
  },
  {
    id: "prod-9",
    name: "Sports Wear Active Bra",
    subtitle: "Soft Feel | Sports Wear",
    category: "Wireless Bra",
    categorySlug: "sports-bras",
    collection: "Active Series",
    collectionSlug: "active-series",
    price: 799,
    sizes: "32B-40D",
    availableSizes: ["32B", "34B", "34C", "36B", "38B", "40D"],
    colors: [
      { name: "Black", hex: "#171717" },
      { name: "Periwinkle", hex: "#7b8ebd" },
      { name: "White", hex: "#ffffff" },
    ],
    image: "/images/HomePage/Products/sports-bra.webp",
    hoverImage: "/images/HomePage/Products/sports_v2.webp",
    isBestSeller: true,
    href: "/products/sports-wear",
    description: "High-mobility sports bra crafted with quick-dry active mesh.",
    cupType: "Non-Padded",
  },
  {
    id: "prod-10",
    name: "Shaper Bra Contour",
    subtitle: "Soft Feel | Support & Lift",
    category: "Padded Bra",
    categorySlug: "shaper-bras",
    collection: "Shaping Series",
    collectionSlug: "shaping-series",
    price: 899,
    sizes: "32B-40D",
    availableSizes: ["34B", "34C", "36B", "36C", "38B", "40D"],
    colors: [
      { name: "Dusty Rose", hex: "#af646d" },
      { name: "Soft Coral", hex: "#f2a99b" },
      { name: "Black", hex: "#171717" },
    ],
    image: "/images/HomePage/Products/shaper-bra.webp",
    hoverImage: "/images/HomePage/Products/bralettes.webp",
    isBestSeller: true,
    href: "/products/shaper-bra-contour",
    description: "Targeted side-smoothing shaper wings with uplifting cups.",
    cupType: "Padded",
  },
  {
    id: "prod-11",
    name: "Everyday Comfort Brief",
    subtitle: "Soft Feel | Daily Ease",
    category: "Panties",
    categorySlug: "panties",
    collection: "Comfort Series",
    collectionSlug: "comfort-series",
    price: 399,
    sizes: "Sizes S - XXL",
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Periwinkle", hex: "#7b8ebd" },
      { name: "Soft Coral", hex: "#f2a99b" },
      { name: "White", hex: "#ffffff" },
      { name: "Black", hex: "#171717" },
    ],
    image: "/images/HomePage/Products/panties.webp",
    hoverImage: "/images/HomePage/Products/bralettes.webp",
    isBestSeller: true,
    href: "/products/comfort-brief",
    description: "Ultra-breathable micro-modal brief designed for no-pinch waistline.",
    cupType: "Non-Padded",
  },
  {
    id: "prod-12",
    name: "Silk Loungewear Set",
    subtitle: "Soft Feel | Everyday Wear",
    category: "Silk Loungewear",
    categorySlug: "loungewear",
    collection: "Loungewear",
    collectionSlug: "loungewear",
    price: 1199,
    sizes: "Sizes XS - XL",
    availableSizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Dusty Rose", hex: "#af646d" },
      { name: "Periwinkle", hex: "#7b8ebd" },
      { name: "White", hex: "#ffffff" },
    ],
    image: "/images/HomePage/Products/loungewear.webp",
    hoverImage: "/images/HomePage/Products/sleepwear.webp",
    isBestSeller: true,
    href: "/products/soft-loungewear",
    description: "Premium fluid drape silk-blend loungewear for slow mornings.",
    cupType: "Non-Padded",
  },
];

// Helper functions for data fetching
export function getProducts(): ProductItem[] {
  return dummyProducts;
}

export function getProductById(id: string): ProductItem | undefined {
  return dummyProducts.find((p) => p.id === id);
}

export function getBestSellerProducts(): ProductItem[] {
  return dummyProducts.filter((p) => p.isBestSeller);
}

export function getProductsByCategory(category: string): ProductItem[] {
  const query = category.toLowerCase().trim();
  return dummyProducts.filter(
    (p) =>
      p.category.toLowerCase().trim() === query ||
      p.categorySlug?.toLowerCase().trim() === query
  );
}

export function getProductsByCollection(collection: string): ProductItem[] {
  const query = collection.toLowerCase().trim();
  return dummyProducts.filter(
    (p) =>
      p.collection.toLowerCase().trim() === query ||
      p.collectionSlug?.toLowerCase().trim() === query
  );
}
