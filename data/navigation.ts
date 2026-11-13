export interface AnnouncementItem {
  id: string;
  text: string;
  mobileText?: string;
  highlight?: string;
  code?: string;
  link?: string;
}

export const dummyAnnouncements: AnnouncementItem[] = [
  {
    id: "ann-1",
    text: "Free Shipping Over ₹2000 — Use code",
    code: "SUMMER20",
  },
  {
    id: "ann-2",
    text: "Buy Any 2 Bras & Get 1 FREE",
    highlight: "Limited Time Festive Offer",
    link: "/offers/festive-combo",
  },
  {
    id: "ann-3",
    text: "Feather-Touch Korean Comfort Innerwear Collection",
    highlight: "Explore New Arrivals →",
    link: "/collections/new-arrivals",
  },
];

export function getAnnouncements(): AnnouncementItem[] {
  return dummyAnnouncements;
}

