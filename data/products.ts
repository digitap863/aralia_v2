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
  rating?: number;
  reviewsCount?: number;
  galleryImages?: string[];
  features?: string[];
  fabricDescription?: string;
  fabricComposition?: string;
  materialImage?: string;
  specialities?: { title: string; subtitle: string }[];
  highlights?: string[];
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
    image: "/images/products/dummy.png",
    hoverImage: "/images/products/dummy.png",
    isBestSeller: true,
    href: "/products/aralia-comfort-bra-1",
    description: "Feather-light support with zero wire pressure for everyday comfort.",
    cupType: "Wireless",
    fabricComposition: "90% Polyester & 10% Spandex",
    fabricDescription: "Made with a premium, skin-friendly blend that feels soft, breathable and stays comfortable all day.",
    materialImage: "/images/products/material-silk.webp",
    features: [
      "Seamless and lightweight feel.",
      "Soft, breathable, skin-friendly fabric",
      "Gentle lift and natural shaping",
      "Ideal for everyday, all-day wear",
    ],
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
    image: "/images/products/dummy.png",
    hoverImage: "/images/products/dummy.png",
    isBestSeller: true,
    href: "/products/aralia-comfort-bra-2",
    description: "Classic breathable padded bra designed for smooth shape and continuous ease.",
    cupType: "Padded",
    fabricComposition: "90% Polyester & 10% Spandex",
    fabricDescription: "Breathable padded construction lined with skin-friendly micro-knit fabric.",
    materialImage: "/images/products/material-silk.webp",
    features: [
      "Seamless and lightweight feel.",
      "Soft, breathable, skin-friendly fabric",
      "Gentle lift and natural shaping",
      "Ideal for everyday, all-day wear",
    ],
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
    image: "/images/products/dummy.png",
    hoverImage: "/images/products/dummy.png",
    isBestSeller: true,
    href: "/products/aralia-comfort-bra-3",
    description: "Cloud-soft contour cups offering all-day gentle lift.",
    cupType: "Wireless",
    fabricComposition: "90% Polyester & 10% Spandex",
    fabricDescription: "Cloud-soft contour cups lined with airy, sweat-wicking modal blend.",
    materialImage: "/images/products/material-silk.webp",
    features: [
      "Seamless and lightweight feel.",
      "Soft, breathable, skin-friendly fabric",
      "Gentle lift and natural shaping",
      "Ideal for everyday, all-day wear",
    ],
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
    image: "/images/products/dummy.png",
    hoverImage: "/images/products/dummy.png",
    isBestSeller: true,
    href: "/products/jelly-bra",
    description: "Revolutionary jelly support band replacing rigid metal wires.",
    cupType: "Wireless",
    fabricComposition: "85% Micro-Nylon & 15% Liquid Silicone Elastane",
    fabricDescription: "Innovative liquid jelly support embedded into ultra-fine micro-nylon.",
    materialImage: "/images/products/material-silk.webp",
    features: [
      "Flexible jelly band replaces rigid wires",
      "Soft, breathable, skin-friendly fabric",
      "Zero dig-in side wings",
      "Ideal for everyday, all-day wear",
    ],
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
    image: "/images/products/dummy.png",
    hoverImage: "/images/products/dummy.png",
    isBestSeller: true,
    href: "/products/aralia-comfort-bra-4",
    description: "Breathable side wings for effortless posture support.",
    cupType: "Padded",
    fabricComposition: "90% Polyester & 10% Spandex",
    fabricDescription: "Made with a premium, skin-friendly blend that feels soft, breathable and stays comfortable all day.",
    materialImage: "/images/products/material-silk.webp",
    features: [
      "Seamless and lightweight feel.",
      "Soft, breathable, skin-friendly fabric",
      "Gentle lift and natural shaping",
      "Ideal for everyday, all-day wear",
    ],
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
    image: "/images/products/dummy.png",
    hoverImage: "/images/products/dummy.png",
    isBestSeller: false,
    href: "/products/seamless-fit-bra",
    description: "Stitch-free, laser-cut perfection that disappears under clothing.",
    cupType: "Non-Padded",
    fabricComposition: "88% Polyamide & 12% Elastane",
    fabricDescription: "Seamless bonded microfiber designed for second-skin invisibility.",
    materialImage: "/images/products/material-silk.webp",
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
    image: "/images/products/dummy.png",
    hoverImage: "/images/products/dummy.png",
    isBestSeller: true,
    href: "/products/padded-everyday",
    description: "Comfortable padded bra with soft-brushed microfiber.",
    cupType: "Padded",
    fabricComposition: "90% Polyester & 10% Spandex",
    fabricDescription: "Soft-brushed microfiber exterior with breathable inner cotton-lining.",
    materialImage: "/images/products/material-silk.webp",
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
    image: "/images/products/dummy.png",
    hoverImage: "/images/products/dummy.png",
    isBestSeller: true,
    href: "/products/silk-bralette",
    description: "Delicate lace overlay with pure silk lining for relaxed luxury.",
    cupType: "Wireless",
    fabricComposition: "92% Pure Mulberry Silk & 8% Elastane",
    fabricDescription: "Grade-6A natural mulberry silk that gently caresses the skin with cooling breathability.",
    materialImage: "/images/products/material-silk.webp",
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
    image: "/images/products/dummy.png",
    hoverImage: "/images/products/dummy.png",
    isBestSeller: true,
    href: "/products/sports-wear",
    description: "High-mobility sports bra crafted with quick-dry active mesh.",
    cupType: "Non-Padded",
    fabricComposition: "82% Moisture-Wicking Nylon & 18% Spandex",
    fabricDescription: "High-compression, four-way stretch active fabric with anti-chafing flatlock seams.",
    materialImage: "/images/products/material-silk.webp",
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
    image: "/images/products/dummy.png",
    hoverImage: "/images/products/dummy.png",
    isBestSeller: true,
    href: "/products/shaper-bra-contour",
    description: "Targeted side-smoothing shaper wings with uplifting cups.",
    cupType: "Padded",
    fabricComposition: "78% Polyamide & 22% High-Recovery Elastane",
    fabricDescription: "Firm contouring knit designed to smooth underarms and back with zero pinching.",
    materialImage: "/images/products/material-silk.webp",
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
    image: "/images/products/dummy.png",
    hoverImage: "/images/products/dummy.png",
    isBestSeller: true,
    href: "/products/comfort-brief",
    description: "Ultra-breathable micro-modal brief designed for no-pinch waistline.",
    cupType: "Non-Padded",
    fabricComposition: "95% Micro-Modal & 5% Spandex (100% Cotton Gusset)",
    fabricDescription: "Eco-certified Beechwood Micro-Modal fabric softer than silk, paired with pure cotton gusset.",
    materialImage: "/images/products/material-silk.webp",
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
    image: "/images/products/dummy.png",
    hoverImage: "/images/products/dummy.png",
    isBestSeller: true,
    href: "/products/soft-loungewear",
    description: "Premium fluid drape silk-blend loungewear for slow mornings.",
    cupType: "Non-Padded",
    fabricComposition: "95% Mulberry Silk & 5% Elastane",
    fabricDescription: "Fluid drape silk satin woven with thermal-regulating fibers for supreme relaxation.",
    materialImage: "/images/products/material-silk.webp",
  },
  {
    id: "prod-13",
    name: "Lace Trim Bikini Panty",
    subtitle: "Delicate Fit | Everyday Wear",
    category: "Panties",
    categorySlug: "panties",
    collection: "Lace Collections",
    collectionSlug: "lace-bras",
    price: 450,
    sizes: "Sizes S - XL",
    availableSizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Dusty Rose", hex: "#af646d" },
      { name: "White", hex: "#ffffff" },
      { name: "Black", hex: "#171717" },
    ],
    image: "/images/products/dummy.png",
    hoverImage: "/images/products/dummy.png",
    isBestSeller: false,
    href: "/products/lace-trim-bikini",
    description: "Classic bikini cut detailed with soft scalloped lace edges.",
    cupType: "Non-Padded",
    fabricComposition: "90% Nylon & 10% Spandex (100% Cotton Gusset)",
    fabricDescription: "Delicate stretch floral lace paired with breathable, skin-friendly cotton lining.",
    materialImage: "/images/products/material-silk.webp",
  },
  {
    id: "prod-14",
    name: "Classic Cotton Sleep Shirt",
    subtitle: "Relaxed Fit | Night Wear",
    category: "Loungewear",
    categorySlug: "loungewear",
    collection: "Loungewear",
    collectionSlug: "loungewear",
    price: 1299,
    sizes: "Sizes XS - XXL",
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Periwinkle", hex: "#7b8ebd" },
    ],
    image: "/images/products/dummy.png",
    hoverImage: "/images/products/dummy.png",
    isBestSeller: true,
    href: "/products/cotton-sleep-shirt",
    description: "Oversized pure cotton sleep shirt for breezy and comfortable nights.",
    cupType: "Non-Padded",
    fabricComposition: "100% Premium Combed Cotton",
    fabricDescription: "Pure long-staple cotton pre-washed for velvety softness and shrink resistance.",
    materialImage: "/images/products/material-silk.webp",
  },
  {
    id: "prod-15",
    name: "Sculpt High-Waist Brief",
    subtitle: "Firm Support | Core Control",
    category: "Shapewear",
    categorySlug: "shapewear",
    collection: "Shaping Series",
    collectionSlug: "shaping-series",
    price: 899,
    sizes: "Sizes M - XXL",
    availableSizes: ["M", "L", "XL", "XXL"],
    colors: [
      { name: "Soft Coral", hex: "#f2a99b" },
      { name: "Black", hex: "#171717" },
    ],
    image: "/images/products/dummy.png",
    hoverImage: "/images/products/dummy.png",
    isBestSeller: false,
    href: "/products/sculpt-high-waist",
    description: "Targeted core compression that seamlessly tucks and smooths.",
    cupType: "Non-Padded",
    fabricComposition: "75% Polyamide & 25% High-Recovery Spandex",
    fabricDescription: "High-density micro-gauge compression fabric with silicone grip band for no roll-down.",
    materialImage: "/images/products/material-silk.webp",
  },
  {
    id: "prod-16",
    name: "Aralia Maternity Nursing Bra",
    subtitle: "Gentle Hold | Motherhood",
    category: "Wireless Bra",
    categorySlug: "bras",
    collection: "Everyday Essentials",
    collectionSlug: "everyday-essentials",
    price: 999,
    sizes: "34B-42E",
    availableSizes: ["34C", "36C", "38C", "38D", "40D", "42E"],
    colors: [
      { name: "Soft Coral", hex: "#f2a99b" },
      { name: "White", hex: "#ffffff" },
    ],
    image: "/images/products/dummy.png",
    hoverImage: "/images/products/dummy.png",
    isBestSeller: true,
    href: "/products/maternity-nursing-bra",
    description: "Easy clip-down cups with expandable fabric to adapt to your changing shape.",
    cupType: "Wireless",
    fabricComposition: "92% Organic Cotton & 8% Elastane",
    fabricDescription: "Ultra-gentle hypoallergenic organic cotton with expandable ribbing for tender skin.",
    materialImage: "/images/products/material-silk.webp",
    features: [
      "One-handed easy-open nursing clips",
      "Soft, breathable, hypoallergenic fabric",
      "Expandable drop cups for fluctuating sizes",
      "Wide supportive underband without wires",
    ],
  },
  {
    id: "prod-17",
    name: "Ribbed Lounge Bralette",
    subtitle: "Stretch Fit | Weekend Wear",
    category: "Bralette",
    categorySlug: "bralettes",
    collection: "Loungewear",
    collectionSlug: "loungewear",
    price: 599,
    sizes: "Sizes S - L",
    availableSizes: ["S", "M", "L"],
    colors: [
      { name: "Dusty Rose", hex: "#af646d" },
      { name: "Periwinkle", hex: "#7b8ebd" },
      { name: "White", hex: "#ffffff" },
      { name: "Black", hex: "#171717" },
    ],
    image: "/images/products/dummy.png",
    hoverImage: "/images/products/dummy.png",
    isBestSeller: true,
    href: "/products/ribbed-lounge-bralette",
    description: "Super soft ribbed texture with a deep V-neck for effortless layering.",
    cupType: "Non-Padded",
    fabricComposition: "94% Micro-Modal & 6% Spandex",
    fabricDescription: "Fine-ribbed knit engineered with silky modal fibers for 360-degree stretch.",
    materialImage: "/images/products/material-silk.webp",
  },
  {
    id: "prod-18",
    name: "Invisible Seamless Thong",
    subtitle: "Bare Feel | Zero Lines",
    category: "Panties",
    categorySlug: "panties",
    collection: "Comfort Series",
    collectionSlug: "comfort-series",
    price: 299,
    sizes: "Sizes XS - XL",
    availableSizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Soft Coral", hex: "#f2a99b" },
      { name: "Black", hex: "#171717" },
    ],
    image: "/images/products/dummy.png",
    hoverImage: "/images/products/dummy.png",
    isBestSeller: false,
    href: "/products/invisible-seamless-thong",
    description: "Laser-cut edges ensuring absolute invisibility beneath form-fitting clothes.",
    cupType: "Non-Padded",
    fabricComposition: "85% Polyamide & 15% Elastane (100% Cotton Gusset)",
    fabricDescription: "Bonded edge, ultra-lightweight polyamide that leaves zero panty lines.",
    materialImage: "/images/products/material-silk.webp",
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
  if (!category) return [];
  const decoded = decodeURIComponent(category).toLowerCase().trim();
  const slugQuery = decoded.replace(/[\s_]+/g, "-");
  return dummyProducts.filter((p) => {
    const cat = p.category.toLowerCase().trim();
    const catSlug = (p.categorySlug || cat.replace(/[^a-z0-9]+/g, "-")).toLowerCase().trim();
    return cat === decoded || catSlug === slugQuery || catSlug === decoded;
  });
}

export function getProductsByCollection(collection: string): ProductItem[] {
  if (!collection) return [];
  const decoded = decodeURIComponent(collection).toLowerCase().trim();
  const slugQuery = decoded.replace(/[\s_]+/g, "-");
  return dummyProducts.filter((p) => {
    const col = p.collection.toLowerCase().trim();
    const colSlug = (p.collectionSlug || col.replace(/[^a-z0-9]+/g, "-")).toLowerCase().trim();
    return col === decoded || colSlug === slugQuery || colSlug === decoded;
  });
}

export function getAllProductSlugs(): string[] {
  return dummyProducts.map((p) => {
    if (p.href.startsWith("/products/")) {
      return p.href.replace("/products/", "");
    }
    return p.id;
  });
}

export function getProductBySlug(slug: string): ProductItem | undefined {
  if (!slug) return undefined;
  const normalized = decodeURIComponent(slug).toLowerCase().trim();
  return dummyProducts.find((p) => {
    const productSlug = p.href.startsWith("/products/")
      ? p.href.replace("/products/", "").toLowerCase().trim()
      : p.id.toLowerCase().trim();
    return (
      productSlug === normalized ||
      p.id.toLowerCase() === normalized ||
      p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") === normalized
    );
  });
}

export function getRelatedProducts(
  product: ProductItem,
  limit: number = 4
): ProductItem[] {
  if (!product) return [];

  const targetCategory = product.category?.toLowerCase().trim();
  const targetCategorySlug = (
    product.categorySlug || targetCategory?.replace(/[^a-z0-9]+/g, "-")
  )?.toLowerCase().trim();
  const targetCollection = product.collection?.toLowerCase().trim();
  const targetCollectionSlug = (
    product.collectionSlug || targetCollection?.replace(/[^a-z0-9]+/g, "-")
  )?.toLowerCase().trim();

  // Find products where category matches OR collection matches
  const matches: { product: ProductItem; score: number }[] = [];

  for (const p of dummyProducts) {
    if (p.id === product.id) continue;

    let score = 0;
    const cat = p.category?.toLowerCase().trim();
    const catSlug = (
      p.categorySlug || cat?.replace(/[^a-z0-9]+/g, "-")
    )?.toLowerCase().trim();
    const col = p.collection?.toLowerCase().trim();
    const colSlug = (
      p.collectionSlug || col?.replace(/[^a-z0-9]+/g, "-")
    )?.toLowerCase().trim();

    // Check category match
    if (
      targetCategory &&
      (cat === targetCategory ||
        catSlug === targetCategorySlug ||
        catSlug === targetCategory)
    ) {
      score += 1;
    }

    // Check collection match
    if (
      targetCollection &&
      (col === targetCollection ||
        colSlug === targetCollectionSlug ||
        colSlug === targetCollection)
    ) {
      score += 1;
    }

    // If either matches (or both), include it
    if (score > 0) {
      matches.push({ product: p, score });
    }
  }

  // Prioritize items matching both category AND collection first, then either
  matches.sort((a, b) => b.score - a.score);

  return matches.slice(0, limit).map((m) => m.product);
}

