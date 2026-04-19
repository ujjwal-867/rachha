// Shared services data used across the website

export interface ServiceItem {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  path?: string; // Route path for the service; optional for dummy items
}

export interface ServiceIncluded {
  id: string;
  title: string;
  imageUrl: string;
}

// All available services
export const SERVICES: ServiceItem[] = [
  {
    id: "birthday-celebration",
    title: "Birthday Celebration",
    imageUrl:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&q=80",
    description:
      "Create unforgettable birthday moments with our premium celebration packages.",
    path: "/services/birthday-celebration",
  },
  {
    id: "wedding",
    title: "Wedding Events",
    imageUrl:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&q=80",
    description: "Your dream wedding deserves premium planning and execution.",
  },
  {
    id: "corporate",
    title: "Corporate Events",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80",
    description: "Professional events that leave lasting impressions.",
  },
  {
    id: "anniversary",
    title: "Anniversary Celebrations",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&q=80",
    description: "Celebrate your milestones in style.",
  },
  {
    id: "graduation",
    title: "Graduation Parties",
    imageUrl:
      "https://images.unsplash.com/photo-1540575467063-178cb50cb2cd?w=500&q=80",
    description: "Mark this achievement with an unforgettable celebration.",
  },
  {
    id: "engagement",
    title: "Engagement Parties",
    imageUrl:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=500&q=80",
    description: "Start your journey with a magical engagement celebration.",
  },
];

// Services included data (used in service detail pages)
export const SERVICES_INCLUDED: ServiceIncluded[] = [
  {
    id: "decoration",
    title: "Decoration",
    imageUrl:
      "https://images.unsplash.com/photo-1519167758481-dc53e14e1dda?w=500&q=80",
  },
  {
    id: "catering",
    title: "Catering",
    imageUrl:
      "https://images.unsplash.com/photo-1555939594-58d7cb561404?w=500&q=80",
  },
  {
    id: "photography",
    title: "Photography",
    imageUrl:
      "https://images.unsplash.com/photo-1502764613149-7f3d7be0766d?w=500&q=80",
  },
  {
    id: "videography",
    title: "Videography",
    imageUrl:
      "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=500&q=80",
  },
  {
    id: "entertainment",
    title: "Entertainment",
    imageUrl:
      "https://images.unsplash.com/photo-1516924962622-92b6c5a2b908?w=500&q=80",
  },
  {
    id: "lighting",
    title: "Lighting Design",
    imageUrl:
      "https://images.unsplash.com/photo-1514306688772-3eb71bcdd275?w=500&q=80",
  },
];
