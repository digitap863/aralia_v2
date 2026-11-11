import { redirect } from "next/navigation";

export function generateStaticParams() {
  return [
    { slug: "combo" },
    { slug: "summer-pack" },
    { slug: "festive-combo" },
  ];
}

export default function OfferDetailPage() {
  redirect("/coming-soon");
}
