// Centralized Product Reviews Data

export interface ReviewItem {
  id: string;
  productId?: string; // Optional: specific to a product or generic for brand
  name: string;
  isVerified: boolean;
  date: string;
  timestamp: number; // For dynamic chronological sorting
  rating: number; // e.g. 4, 4.5, 5
  comment: string;
}

export interface ReviewRatingSummary {
  average: number;
  totalCount: number;
  breakdown: {
    stars: number;
    count: number;
    percentage: number;
  }[];
}

export const dummyReviews: ReviewItem[] = [
  {
    id: "rev-1",
    productId: "prod-1",
    name: "Liam K.",
    isVerified: true,
    date: "August 18, 2026",
    timestamp: 1787011200000,
    rating: 4,
    comment:
      "This bra is hands down the most comfortable innerwear I've worn. The fabric is buttery soft, highly breathable, and provides natural support without any underwire digging into my ribs. Holds its shape beautifully after multiple washes.",
  },
  {
    id: "rev-2",
    productId: "prod-1",
    name: "Ava H.",
    isVerified: true,
    date: "August 19, 2026",
    timestamp: 1787097600000,
    rating: 4.5,
    comment:
      "The cloud-soft contour cups provide gentle shaping while keeping a completely natural silhouette beneath form-fitting tops. Zero slipping straps throughout my entire workday. Absolutely love the muted blush color and seamless feel.",
  },
  {
    id: "rev-3",
    productId: "prod-1",
    name: "Ava H.",
    isVerified: true,
    date: "August 19, 2026",
    timestamp: 1787097600000,
    rating: 4.5,
    comment:
      "Extremely breathable and lightweight. Living in warm weather, finding innerwear that doesn't trap heat is rare. The laser-cut edges ensure no visible lines under thin t-shirts. Will definitely be ordering more.",
  },
  {
    id: "rev-4",
    name: "Samantha D.",
    isVerified: true,
    date: "August 20, 2026",
    timestamp: 1787184000000,
    rating: 5,
    comment:
      "Worth every single rupee. The multi-stretch micro-knit feels like a luxurious second skin. Ordered my true sister size according to the chart and it fit like a dream right out of the box.",
  },
  {
    id: "rev-5",
    name: "Chloe M.",
    isVerified: true,
    date: "August 21, 2026",
    timestamp: 1787270400000,
    rating: 5,
    comment:
      "I was skeptical about wireless support for a 36C bust, but this bra surpassed all expectations. It provides the lift of a classic underwire with none of the evening back ache. 10/10 recommend.",
  },
  {
    id: "rev-6",
    name: "Elena P.",
    isVerified: true,
    date: "August 22, 2026",
    timestamp: 1787356800000,
    rating: 4.5,
    comment:
      "Super soft band and zero pinching on the underarms. It feels like wearing nothing while still keeping everything smoothly in place. Fabric dries fast after washing.",
  },
  {
    id: "rev-7",
    name: "Jessica T.",
    isVerified: true,
    date: "August 23, 2026",
    timestamp: 1787443200000,
    rating: 5,
    comment:
      "The silk touch blend is remarkable. Seamless under lightweight modal shirts and tight dresses with no visible ridges. Customer service was also super helpful with size exchange advice.",
  },
  {
    id: "rev-8",
    name: "Rhea S.",
    isVerified: true,
    date: "August 24, 2026",
    timestamp: 1787529600000,
    rating: 4,
    comment:
      "Delicate, high quality construction. The straps are soft yet stay put without digging into the shoulders. I've already recommended Aralia to my sister and mom.",
  },
];

/**
 * Fetch reviews for a specific product or return default catalog reviews
 */
export function getReviewsByProductId(productId?: string): ReviewItem[] {
  if (!productId) return dummyReviews;
  const matches = dummyReviews.filter((r) => r.productId === productId);
  return matches.length > 0 ? matches : dummyReviews;
}

/**
 * Fetch all available customer reviews
 */
export function getAllReviews(): ReviewItem[] {
  return dummyReviews;
}

/**
 * Dynamically computes rating summary, average score and star breakdown
 */
export function calculateReviewSummary(
  reviewsList: ReviewItem[]
): ReviewRatingSummary {
  const total = reviewsList.length;
  if (total === 0) {
    return {
      average: 4.8,
      totalCount: 451,
      breakdown: [
        { stars: 5, count: 351, percentage: 78 },
        { stars: 4, count: 77, percentage: 17 },
        { stars: 3, count: 18, percentage: 4 },
        { stars: 2, count: 5, percentage: 1 },
        { stars: 1, count: 0, percentage: 0 },
      ],
    };
  }

  // Count stars
  const counts: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  let sum = 0;

  reviewsList.forEach((r) => {
    const starFloor = Math.min(5, Math.max(1, Math.round(r.rating)));
    counts[starFloor] = (counts[starFloor] || 0) + 1;
    sum += r.rating;
  });

  const average = Number((sum / total).toFixed(1));

  // If calculating on a small sample, scale breakdown to realistic proportions matching the mockup
  const breakdown = [5, 4, 3, 2, 1].map((stars) => {
    const count = counts[stars] || 0;
    const percentage = Math.round((count / total) * 100);
    return {
      stars,
      count,
      percentage,
    };
  });

  return {
    average: average || 4.8,
    totalCount: total,
    breakdown,
  };
}

