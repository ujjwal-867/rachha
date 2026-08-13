export interface EventData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  servicesIncluded: string[];
}

export const EVENTS: EventData[] = [
  {
    id: "birthday-celebration",
    slug: "birthday-celebration",
    title: "Birthday Celebrations",
    subtitle:
      "Create unforgettable moments with our premium celebration services",
    description:
      "Celebrate life's special moments with thoughtfully curated birthday experiences that blend creativity, elegance, and seamless execution. From vibrant kids' parties to sophisticated milestone celebrations, every detail—from décor to entertainment—is designed to create a joyful and unforgettable atmosphere.",
    servicesIncluded: [
      "Photography",
      "Decorators",
      "Cake",
      "DJ",
      "Entertainment",
      "Artist",
      "Sound & Lights",
      "Invites",
      "Fun entertainers",
      "Live cartoon character",
      "Game stalls",
      "Fun party artist",
    ],
  },
  {
    id: "kitty-party",
    slug: "kitty-party",
    title: "Kitty Party",
    subtitle:
      "Elevate your kitty gatherings into stylish and memorable experiences",
    description:
      "Elevate your kitty gatherings into stylish and memorable experiences with elegant décor, engaging setups, and a perfectly balanced ambiance. Whether intimate or lively, each event is designed to feel relaxed, refined, and effortlessly enjoyable for every guest.",
    servicesIncluded: [
      "Decorators",
      "Catering",
      "Artist",
      "Entertainment",
      "Invites",
      "Sound & Lights",
    ],
  },
  {
    id: "bridal-shower",
    slug: "bridal-shower",
    title: "Bridal Shower",
    subtitle:
      "Celebrate the bride-to-be with a beautifully styled bridal shower",
    description:
      "Celebrate the bride-to-be with a beautifully styled bridal shower that captures elegance, warmth, and joy. From curated themes and aesthetic décor to interactive moments and seamless coordination, every detail is designed to create a meaningful and memorable pre-wedding celebration.",
    servicesIncluded: [
      "Makeup Artist",
      "Mehendi",
      "Decorators",
      "Photographer",
      "Cake",
      "Entertainment",
      "Artist",
      "Invites",
    ],
  },
  {
    id: "naming-ceremony",
    slug: "naming-ceremony",
    title: "Naming Ceremony",
    subtitle: "Mark your child's special milestone with a serene celebration",
    description:
      "Mark your child's special milestone with a serene and thoughtfully planned naming ceremony that blends tradition with modern elegance. We create a welcoming and graceful environment where every detail reflects warmth, purity, and celebration.",
    servicesIncluded: [
      "Pandit",
      "Decorators",
      "Catering",
      "Photography",
      "Sound & Lights",
      "Invites",
    ],
  },
  {
    id: "house-warming",
    slug: "house-warming",
    title: "House Warming",
    subtitle: "Welcome new beginnings with an inviting celebration",
    description:
      "Welcome new beginnings with a house warming celebration that is both inviting and elegantly organized. From tasteful décor to smooth event flow, we ensure a warm, festive atmosphere where you can celebrate your new space with comfort and joy.",
    servicesIncluded: [
      "Decorators",
      "Catering",
      "Pandit",
      "Sound & Lights",
      "Invites",
    ],
  },
  {
    id: "wedding",
    slug: "wedding",
    title: "Wedding",
    subtitle:
      "Experience a wedding crafted with precision, luxury, and timeless elegance",
    description:
      "Experience a wedding crafted with precision, luxury, and timeless elegance. From conceptual design and grand décor to flawless coordination and guest experience, we manage every element to create a celebration that reflects your story beautifully and unfolds seamlessly.",
    servicesIncluded: [
      "Event Planner",
      "Decorators",
      "Caterers",
      "Photographer",
      "Makeup Artist",
      "Mehendi",
      "DJ",
      "Sound & Lights",
      "Pandit",
      "Choreographer",
      "Vehicles",
      "Invites",
      "Entertainment",
      "Artist",
    ],
  },
  {
    id: "engagement",
    slug: "engagement",
    title: "Engagement / Ring Ceremony",
    subtitle:
      "Celebrate your new beginning with an elegant engagement ceremony",
    description:
      "Celebrate your new beginning with an engagement ceremony designed to feel intimate, stylish, and effortlessly elegant. Every detail—from ambiance to coordination—is thoughtfully planned to ensure a smooth and memorable celebration.",
    servicesIncluded: [
      "Decorators",
      "Photographer",
      "Makeup Artist",
      "DJ",
      "Sound & Lights",
      "Cake",
      "Invites",
      "Choreographer",
    ],
  },
  {
    id: "college-events",
    slug: "college-events",
    title: "College Events",
    subtitle: "Bring energy and creativity to your college events",
    description:
      "Bring energy and creativity to your college events with professionally managed experiences that are vibrant and engaging. From cultural fests to formal gatherings, we ensure smooth execution, dynamic setups, and an atmosphere that resonates with the audience.",
    servicesIncluded: [
      "DJ",
      "Sound & Lights",
      "Artist",
      "Anchor",
      "Entertainment",
      "Event Planner",
    ],
  },
  {
    id: "anniversary",
    slug: "anniversary",
    title: "Anniversary",
    subtitle: "Celebrate your journey with an elegant anniversary event",
    description:
      "Celebrate your journey with an anniversary event designed to be elegant, personal, and meaningful. Whether intimate or grand, we create an ambiance that reflects your story while ensuring every moment feels special and beautifully curated.",
    servicesIncluded: [
      "Decorators",
      "Cake",
      "Photographer",
      "DJ",
      "Sound & Lights",
      "Entertainment",
      "Invites",
    ],
  },
  {
    id: "theme-parties",
    slug: "theme-parties",
    title: "Theme Parties",
    subtitle: "Step into a world of creativity with immersive theme parties",
    description:
      "Step into a world of creativity with immersive theme parties crafted to deliver a visually stunning and engaging experience. From concept to execution, every element is designed to bring your chosen theme to life with precision and flair.",
    servicesIncluded: [
      "Decorators",
      "Artist",
      "Entertainment",
      "DJ",
      "Sound & Lights",
      "Photography",
      "Invites",
    ],
  },
  {
    id: "surprise-events",
    slug: "surprise-events",
    title: "Surprise Events",
    subtitle:
      "Create unforgettable moments with expertly planned surprise events",
    description:
      "Create unforgettable moments with expertly planned surprise events where every detail is handled with discretion and precision. From planning to execution, we ensure a seamless reveal that feels magical, emotional, and perfectly timed.",
    servicesIncluded: [
      "Decorators",
      "Photography",
      "Cake",
      "Entertainment",
      "Artist",
      "Sound & Lights",
    ],
  },
  {
    id: "corporate-events",
    slug: "corporate-events",
    title: "Corporate Events",
    subtitle: "Deliver impactful corporate events with refined execution",
    description:
      "Deliver impactful corporate events that combine professionalism with refined execution. From conferences to celebrations, we ensure every detail aligns with your brand while creating a polished, seamless, and engaging experience.",
    servicesIncluded: [
      "Event Planner",
      "Sound & Lights",
      "Anchor",
      "Artist",
      "Catering",
      "Decorators",
    ],
  },
  {
    id: "festive-events",
    slug: "festive-events",
    title: "Festive Events",
    subtitle: "Celebrate festivals with vibrant, culturally rich experiences",
    description:
      "Celebrate festivals with vibrant, culturally rich experiences designed to bring people together. With thoughtfully curated décor, lighting, and entertainment, we create festive environments that feel joyful, immersive, and memorable.",
    servicesIncluded: [
      "Decorators",
      "Lighting",
      "Sound",
      "Artist",
      "Catering",
      "Entertainment",
      "Pandit",
    ],
  },
];

const SERVICE_IMAGE_MAP: Record<string, string> = {
  Photography:
    "https://images.unsplash.com/photo-1672619868507-28132de2e258?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  Decorators:
    "https://images.unsplash.com/photo-1729237261091-bae8eba0c60c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  Cake: "https://images.unsplash.com/photo-1653936392747-cbbf97f8d45c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  DJ: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&q=80",
  Entertainment:
    "https://cdn.prod.website-files.com/620b4dfc30add2618d5e13a5/622b57daf5de20bee4d93fb7_Acrobats-Performing-at-Event.jpeg",
  Artist:
    "https://assets.vogue.in/photos/669e3910f9d5efc57dd02edf/3:4/w_2560%2Cc_limit/Noor%25204.jpeg",
  "Sound & Lights":
    "https://images.unsplash.com/photo-1518890569493-668df9a00266?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  Invites:
    "https://nutcaseshop.com/cdn/shop/files/7b_c54d96d8-e623-42af-b882-7504eb5b1c20.jpg?v=1707142168",
  "Fun entertainers":
    "https://www.thrillveeraentertainment.com/images/carnival-performance-india.webp",
  "Live cartoon character":
    "https://isteam.wsimg.com/ip/3b62a509-845a-4957-9d2a-085178104441/IMG-20191115-WA0015.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25",
  "Game stalls":
    "https://www.partyrentalsindia.com/wp-content/uploads/2023/04/balloon-gun-shoot-game-stalls-for-birthday-party-chandigarh-600x600.jpg",
  "Fun party artist": "https://wowtheparty.com/img/5.jpg",
  Catering:
    "https://divinecaterers.in/wp-content/uploads/2024/04/image5-1.webp",
  "Makeup Artist":
    "https://fsia.in/uploads/84570-Shital-nitin-kudale-1731649427.jpg",
  Mehendi:
    "https://t4.ftcdn.net/jpg/17/02/93/69/360_F_1702936915_wRGtBg6Rc2IOlFcDSNduOsyDqR11MXvf.jpg",
  Photographer:
    "https://hayotfilms.com/wp-content/uploads/2023/06/event-photography-tips-featured-photo.jpg.webp",
  Pandit:
    "https://content.jdmagicbox.com/v2/comp/hyderabad/j7/040pxx40.xx40.180822073007.i8j7/catalogue/north-indian-hindi-pandit-madhapur-hyderabad-pandits-iifgync08n.jpg",
  "Event Planner":
    "https://www.v3events.in/wp-content/uploads/2025/10/wedd.jpg",
  Caterers:
    "https://content.jdmagicbox.com/v2/comp/delhi/g5/011pxx11.xx11.260219234655.f3g5/catalogue/grandiose-gourmet-shahdara-delhi-caterers-4j3ix7g1n2-250.jpg",
  Choreographer:
    "https://pub-95ccf2d427eb4955a7de1c41d3fa57dd.r2.dev/blog-g3fashion-com/2021/04/choreographers-for-wedding-dance-1024x652.jpg",
  Vehicles:
    "https://images.indianexpress.com/2025/03/vintage-cars-at-the-Sunday-event-in-Kolkata.-Partha-Paul.jpg?w=1200",
  Anchor:
    "https://www.shaadidukaan.com/user_images/innerSlider_images/default/m/39-m.jpg",
  Lighting:
    "https://d1hpn7r5i0azx7.cloudfront.net/wp-content/uploads/2016/02/wishtree-editor.jpg",
  Sound: "https://i.ytimg.com/vi/R0FDzIs48PM/maxresdefault.jpg",
};

export function getServiceImageUrl(serviceName: string): string {
  return (
    SERVICE_IMAGE_MAP[serviceName] ||
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&q=80"
  );
}

const HERO_IMAGES: Record<string, string[]> = {
  "birthday-celebration": [
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80",
    "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=1200&q=80",
    "https://images.unsplash.com/photo-1653936392747-cbbf97f8d45c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  wedding: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
    "https://media.youthincmag.com/images/0c2392cc-1a46-44b3-9fd9-4a7e368fd7a7/original.jpg",
  ],
  "corporate-events": [
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
    "https://erpnews.com/v2/wp-content/uploads/2022/09/Corporate-Event-1.webp",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
  ],
  anniversary: [
    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/a91dc911-a63b-48c9-ae67-b36789a6002a.__CR0,0,970,600_PT0_SX970_V1___.jpg",
    "https://curatedevents.com/wp-content/uploads/2023/01/Outdoor-wedding-anniversary-celebration.jpg",
    "https://cdn0.weddingwire.in/article/5234/original/1280/jpeg/124325-anniversary-celebration-ideas-at-home-1-sunny-dhiman.jpeg",
  ],
  "college-events": [
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200",
    "https://5.imimg.com/data5/WA_9696/Default/2026/1/575273642/QO/UX/KV/118425434/collage-event-organization-service.jpeg",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200",
  ],
  engagement: [
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200",
  ],
  "baby-shower": [
    "https://www.area83.in/event/baby-shower-3.webp",
    "https://5.imimg.com/data5/ANDROID/Default/2021/9/YZ/UG/HW/11461181/product-jpeg.jpg",
    "https://www.saneventhall.com/wp-content/uploads/2025/11/baby-2-1024x559.png",
  ],
  "gala-dinners": [
    "https://media.istockphoto.com/id/2196163507/photo/elegant-dining-setup-with-candles-at-night-in-a-stylish-restaurant.jpg?s=612x612&w=0&k=20&c=1nA14KGZSY31fuBf3JDxI1lKPr7g49DKfsNOdfPgC0Y=",
    "https://veoevents.co.uk/wp-content/uploads/2023/07/Gala-Dinner-Decor.jpg",
    "https://www.onstage.com.au/wp-content/uploads/2023/06/gala-dinner.jpg",
  ],
  "festive-events": [
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200",
    "https://images.pexels.com/photos/17264037/pexels-photo-17264037.jpeg",
    "https://content.jdmagicbox.com/v2/comp/mumbai/w5/022pxx22.xx22.231106120507.l5w5/catalogue/hyfxmdg8g8tjnyn-o9a6blnv6m.jpg",
  ],
  "destination-weddings": [
    "https://www.diwas.in/wp-content/uploads/2016/05/AD-Destination-weddings4.jpg",
    "https://www.v3events.in/wp-content/uploads/2025/10/manali-scaled.jpg",
    "https://weddingsbyneerajkamra.com/uploads/BlogPicturesdestination-wedding-planner-in-rajasthan-royal-splendor-awaits/default/Royal-Wedding-in-Rajasthan.jpg",
  ],
  "social-cultural-gatherings": [
    "https://mentorinfocomm.com/uploads/events/1759483802_cultural%20event.png",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200",
  ],
  "luxury-celebrations": [
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
    "https://mgnevents.b-cdn.net/app/uploads/2025/05/The-high-end-big-birthday-inspiration-and-planning-guide-Banner.webp",
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1200",
  ],
  "event-planning-consultancy": [
    "https://www.hamaraevent.com/lib/js/kcfinder/upload/images/image1%2839%29.jpg",
    "https://www.v3events.in/wp-content/uploads/2025/10/wedd.jpg",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
  ],
};

const BENTO_IMAGES: Record<string, string[]> = {
  "birthday-celebration": [
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80",
    "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=1200&q=80",
    "https://images.unsplash.com/photo-1653936392747-cbbf97f8d45c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  wedding: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    "https://www.manyavar.com/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/default/dw6ab072a6/Blogs-Images/How%20to%20Choose%20the%20Right%20Wedding%20Decor%20Elements%20for%20a%20Grand%20Celebration_D.jpg",
    "https://media.youthincmag.com/images/0c2392cc-1a46-44b3-9fd9-4a7e368fd7a7/original.jpg",
  ],
  "corporate-events": [
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
    "https://erpnews.com/v2/wp-content/uploads/2022/09/Corporate-Event-1.webp",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
  ],
  anniversary: [
    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/a91dc911-a63b-48c9-ae67-b36789a6002a.__CR0,0,970,600_PT0_SX970_V1___.jpg",
    "https://curatedevents.com/wp-content/uploads/2023/01/Outdoor-wedding-anniversary-celebration.jpg",
    "https://cdn0.weddingwire.in/article/5234/original/1280/jpeg/124325-anniversary-celebration-ideas-at-home-1-sunny-dhiman.jpeg",
  ],
  "college-events": [
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200",
    "https://5.imimg.com/data5/WA_9696/Default/2026/1/575273642/QO/UX/KV/118425434/collage-event-organization-service.jpeg",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200",
  ],
  engagement: [
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200",
  ],
  "baby-shower": [
    "https://www.area83.in/event/baby-shower-3.webp",
    "https://5.imimg.com/data5/ANDROID/Default/2021/9/YZ/UG/HW/11461181/product-jpeg.jpg",
    "https://www.saneventhall.com/wp-content/uploads/2025/11/baby-2-1024x559.png",
  ],
  "gala-dinners": [
    "https://media.istockphoto.com/id/2196163507/photo/elegant-dining-setup-with-candles-at-night-in-a-stylish-restaurant.jpg?s=612x612&w=0&k=20&c=1nA14KGZSY31fuBf3JDxI1lKPr7g49DKfsNOdfPgC0Y=",
    "https://veoevents.co.uk/wp-content/uploads/2023/07/Gala-Dinner-Decor.jpg",
    "https://www.onstage.com.au/wp-content/uploads/2023/06/gala-dinner.jpg",
  ],
  "festive-events": [
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200",
    "https://images.pexels.com/photos/17264037/pexels-photo-17264037.jpeg",
    "https://content.jdmagicbox.com/v2/comp/mumbai/w5/022pxx22.xx22.231106120507.l5w5/catalogue/hyfxmdg8g8tjnyn-o9a6blnv6m.jpg",
  ],
  "destination-weddings": [
    "https://www.diwas.in/wp-content/uploads/2016/05/AD-Destination-weddings4.jpg",
    "https://www.v3events.in/wp-content/uploads/2025/10/manali-scaled.jpg",
    "https://weddingsbyneerajkamra.com/uploads/BlogPicturesdestination-wedding-planner-in-rajasthan-royal-splendor-awaits/default/Royal-Wedding-in-Rajasthan.jpg",
  ],
  "social-cultural-gatherings": [
    "https://mentorinfocomm.com/uploads/events/1759483802_cultural%20event.png",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200",
  ],
  "luxury-celebrations": [
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
    "https://mgnevents.b-cdn.net/app/uploads/2025/05/The-high-end-big-birthday-inspiration-and-planning-guide-Banner.webp",
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1200",
  ],
  "event-planning-consultancy": [
    "https://www.hamaraevent.com/lib/js/kcfinder/upload/images/image1%2839%29.jpg",
    "https://www.v3events.in/wp-content/uploads/2025/10/wedd.jpg",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
  ],
};

const FALLBACK_HERO = [
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
];

const FALLBACK_BENTO = [
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
];

export function getHeroMediaItems(slug: string): string[] {
  return HERO_IMAGES[slug] || FALLBACK_HERO;
}

export function getBentoMediaItems(slug: string): string[] {
  return BENTO_IMAGES[slug] || FALLBACK_BENTO;
}

export function getEventBySlug(slug: string): EventData | undefined {
  return EVENTS.find((e) => e.slug === slug);
}
