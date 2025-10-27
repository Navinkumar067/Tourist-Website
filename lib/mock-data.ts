// navinkumar067/tourist-website/Tourist-Website-8c6c6825b935cd6e5823408089efeb42a33d9d6b/lib/mock-data.ts

// Mock data for packages and gallery images.
// Destination data is now managed by lib/destinations-data.ts

export type Destination = {
  id: string
  title: string
  description: string
  imageAlt: string
  imageUrl: string
}

export type TravelPackage = {
  id: string
  title: string
  price: string
  highlights: string[]
  imageAlt: string
  imageUrl: string
}

// NOTE: The 'destinations' export is removed as it's replaced by a component iteration over 'COUNTRIES'

export const packages: TravelPackage[] = [
  {
    id: "bali-escape",
    title: "Bali Escape (6D/5N)",
    price: "$1,299",
    highlights: [
      "4-star beachfront resort",
      "Ubud day tour + waterfalls",
      "Snorkeling excursion",
      "Daily breakfast included",
    ],
    imageAlt: "Beachfront resort in Bali with clear blue water",
    // UPDATED PATH
    imageUrl: "/beachfront-resort-bali.png",
  },
  {
    id: "paris-delight",
    title: "Paris Delight (5D/4N)",
    price: "$1,599",
    highlights: [
      "Central boutique hotel",
      "Louvre & Seine cruise",
      "Wine & cheese tasting",
      "Airport transfers",
    ],
    imageAlt: "Seine river cruise view with Paris architecture",
    // UPDATED PATH
    imageUrl: "/France/seine-cruise-paris.png",
  },
  {
    id: "kyoto-tranquility",
    title: "Kyoto Tranquility (7D/6N)",
    price: "$1,899",
    highlights: [
      "Ryokan stay with onsen",
      "Arashiyama bamboo grove",
      "Tea ceremony experience",
      "JR pass segment",
    ],
    imageAlt: "Arashiyama bamboo grove path in Kyoto",
    // UPDATED PATH
    imageUrl: "/India/arashiyama-bamboo-grove.png", // NOTE: This image file seems misplaced, keeping the current file name for continuity
  },
  {
    id: "tamilnadu-travel",
    title: "Tamil Nadu Heritage Tour (7D/6N)",
    price: "$999",
    highlights: [
      "Visit Meenakshi Temple in Madurai",
      "Enjoy Marina Beach in Chennai",
      "Explore Ooty hill stations",
      "Daily local cuisine included",
    ],
    imageAlt: "Tamil Nadu cultural highlights",
    // Placeholder, assume the image is in the root for now unless moved
    imageUrl: "/placeholder.svg",
  },
]

export const galleryImages: { id: string; alt: string; src: string }[] = [
  {
    id: "gal-1",
    alt: "Sunset coastline with silhouettes of palm trees",
    src: "/coastline-sunset-palms.png",
  },
  {
    id: "gal-2",
    alt: "Historic city street with warm lights at dusk",
    src: "/historic-city-street-dusk.png",
  },
  {
    id: "gal-3",
    alt: "Mountain lake reflecting snowy peaks",
    src: "/mountain-lake-snowy-peaks.png",
  },
  {
    id: "gal-4",
    alt: "Traditional market with vibrant colors",
    src: "/traditional-market-vibrant-colors.png",
  },
  {
    id: "gal-5",
    alt: "Golden desert dunes under blue sky",
    src: "/desert-dunes-blue-sky.png",
  },
  {
    id: "gal-6",
    alt: "Cliffside village overlooking the sea",
    src: "/cliffside-village-sea-view.png",
  },
]