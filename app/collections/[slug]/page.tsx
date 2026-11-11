import { redirect } from "next/navigation";

export function generateStaticParams() {
  return [
    { slug: "bras" },
    { slug: "panties" },
    { slug: "loungewear" },
    { slug: "shapewear" },
    { slug: "sleepwear" },
    { slug: "new-arrivals" },
  ];
}

export default function CollectionDetailPage() {
  redirect("/coming-soon");
}
