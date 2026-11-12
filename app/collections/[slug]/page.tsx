import { redirect } from "next/navigation";

export function generateStaticParams() {
  return [
    { slug: "bras" },
    { slug: "panties" },
    { slug: "loungewear" },
    { slug: "shapewear" },
    { slug: "sleepwear" },
    { slug: "new-arrivals" },
    { slug: "everyday-essentials" },
    { slug: "active-series" },
    { slug: "seamless-comfort" },
    { slug: "lace-bras" },
    { slug: "shorts-collections" },
    { slug: "lace-panties" },
  ];
}

export default function CollectionDetailPage() {
  redirect("/coming-soon");
}
