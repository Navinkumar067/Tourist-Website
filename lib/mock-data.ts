// Mock data for destinations, packages, and gallery images

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

export const destinations: Destination[] = [
  // --- Existing destinations ---
  {
    id: "bali",
    title: "Bali, Indonesia",
    description:
      "Experience serene beaches, lush rice terraces, and vibrant culture in the Island of the Gods.",
    imageAlt: "Beach and palm trees in Bali at golden hour",
    imageUrl: "/images/beach-palm-trees-bali.png",
  },
  {
    id: "paris",
    title: "Paris, France",
    description:
      "Stroll along the Seine, savor fine cuisine, and admire timeless art in the City of Light.",
    imageAlt: "Eiffel Tower with a warm sunset sky in Paris",
    imageUrl: "/images/eiffel-tower-sunset.png",
  },
  {
    id: "kyoto",
    title: "Kyoto, Japan",
    description:
      "Discover tranquil temples, traditional tea houses, and seasonal beauty across ancient streets.",
    imageAlt: "Traditional temple surrounded by maple trees in Kyoto",
    imageUrl: "/images/kyoto-temple-autumn-leaves.png",
  },

  // --- New Countries ---
  {
    id: "tajmahal",
    title: "Agra, India",
    description:
      "Marvel at the majestic Taj Mahal, a UNESCO World Heritage site and symbol of love.",
    imageAlt: "Taj Mahal during sunrise",
    imageUrl: "/images/taj-mahal-agra.png",
  },
  {
    id: "chennai",
    title: "Chennai, India (Tamil Nadu)",
    description:
      "Explore Marina Beach, Kapaleeshwarar Temple, and the vibrant culture of Tamil Nadu's capital.",
    imageAlt: "Marina beach in Chennai with golden sands",
    imageUrl: "/images/chennai-marina-beach.png",
  },
  {
    id: "madurai",
    title: "Madurai, India (Tamil Nadu)",
    description:
      "Visit the ancient Meenakshi Amman Temple and experience traditional Tamil heritage.",
    imageAlt: "Meenakshi Amman temple with colorful gopurams",
    imageUrl: "/images/madurai-meenakshi-temple.png",
  },
  {
    id: "ooty",
    title: "Ooty, India (Tamil Nadu)",
    description:
      "Relax in the ‘Queen of Hills’, known for tea gardens, lakes, and the Nilgiri Mountain Railway.",
    imageAlt: "Ooty tea gardens with mountain backdrop",
    imageUrl: "/images/ooty-tea-gardens.png",
  },
  {
    id: "newyork",
    title: "New York, USA",
    description:
      "See the iconic Statue of Liberty, Times Square, and the hustle of the city that never sleeps.",
    imageAlt: "Skyline view of New York City",
    imageUrl: "/images/newyork-city-skyline.png",
  },
  {
    id: "rome",
    title: "Rome, Italy",
    description:
      "Walk through history with the Colosseum, Roman Forum, and authentic Italian cuisine.",
    imageAlt: "Colosseum at sunset in Rome",
    imageUrl: "/images/rome-colosseum.png",
  },
]

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
    imageUrl: "/images/beachfront-resort-bali.png",
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
    imageUrl: "/images/seine-cruise-paris.png",
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
    imageUrl: "/images/arashiyama-bamboo-grove.png",
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
    imageUrl: "/images/tamilnadu-heritage-tour.png",
  },
]

export const galleryImages: { id: string; alt: string; src: string }[] = [
  {
    id: "gal-1",
    alt: "Sunset coastline with silhouettes of palm trees",
    src: "/images/coastline-sunset-palms.png",
  },
  {
    id: "gal-2",
    alt: "Historic city street with warm lights at dusk",
    src: "/images/historic-city-street-dusk.png",
  },
  {
    id: "gal-3",
    alt: "Mountain lake reflecting snowy peaks",
    src: "/images/mountain-lake-snowy-peaks.png",
  },
  {
    id: "gal-4",
    alt: "Traditional market with vibrant colors",
    src: "/images/traditional-market-vibrant-colors.png",
  },
  {
    id: "gal-5",
    alt: "Golden desert dunes under blue sky",
    src: "/images/desert-dunes-blue-sky.png",
  },
  {
    id: "gal-6",
    alt: "Cliffside village overlooking the sea",
    src: "/images/cliffside-village-sea-view.png",
  },
]
