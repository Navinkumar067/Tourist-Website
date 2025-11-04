// lib/destinations-data.ts

export type Place = {
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  price: number; // round-trip cost per person in local currency
};

export type Country = {
  slug: string;
  countryName: string;
  currencySymbol: string;
  featuredPlace: Omit<Place, "name" | "price">;
  places: Place[];
};

// ----------------------
// MASTER COUNTRY DATASET
// ----------------------

export const COUNTRIES: Country[] = [
  // 🇮🇳 INDIA
  {
    slug: "india",
    countryName: "India",
    currencySymbol: "₹",
    featuredPlace: {
      description: "Iconic mausoleum and a global symbol of love.",
      imageUrl: "/India/taj-mahal-agra.png",
      imageAlt: "Taj Mahal at sunset, Agra, India",
    },
    places: [
      {
        name: "Chennai Marina Beach",
        description: "One of the world’s longest urban beaches, vibrant and breezy.",
        imageUrl: "/India/marina-beach.png",
        imageAlt: "Marina Beach shoreline in Chennai, India",
        price: 8500,
      },
      {
        name: "Madurai Meenakshi Temple",
        description: "Dravidian masterpiece with ornate gopurams and rich history.",
        imageUrl: "/India/meenakshi-temple.jpg",
        imageAlt: "Meenakshi Amman Temple in Madurai, India",
        price: 12000,
      },
      {
        name: "Thanjavur Brihadeeswara Temple",
        description: "Chola-era temple famed for its giant vimana and sculptures.",
        imageUrl: "/India/brihadeeswara-temple.png",
        imageAlt: "Brihadeeswara Temple in Thanjavur, India",
        price: 9500,
      },
      {
        name: "Amritsar Golden Temple",
        description: "The holiest gurdwara of Sikhism, a beautiful golden structure.",
        imageUrl: "/India/harmandir-sahib.jpg",
        imageAlt: "Golden Temple in Amritsar, India",
        price: 11000,
      },
      {
        name: "Alleppey Backwaters",
        description: "Houseboat cruises along Kerala's tranquil network of canals and lagoons.",
        imageUrl: "/India/Alleppey.jpg",
        imageAlt: "Houseboat in Alleppey, Kerala",
        price: 15500,
      },
    ],
  },

  // 🇺🇸 USA
  {
    slug: "usa",
    countryName: "USA",
    currencySymbol: "$",
    featuredPlace: {
      description: "Vast layered red-rock canyon carved by the Colorado River.",
      imageUrl: "/USA/grand-canyon-arizona.png",
      imageAlt: "Grand Canyon cliffs at sunset, Arizona, USA",
    },
    places: [
      {
        name: "Grand Canyon",
        description: "Iconic vistas with dramatic cliffs and winding river.",
        imageUrl: "/USA/grand-canyon-arizona.png",
        imageAlt: "Grand Canyon scenic overlook",
        price: 450,
      },
      {
        name: "New York Central Park",
        description: "Green oasis amid Manhattan’s skyline and energy.",
        imageUrl: "/USA/central-park-autumn.png",
        imageAlt: "Central Park, New York City",
        price: 150,
      },
      {
        name: "Golden Gate Bridge",
        description: "Striking suspension bridge spanning the Golden Gate strait.",
        imageUrl: "/USA/golden-gate-bridge.png",
        imageAlt: "Golden Gate Bridge with fog in San Francisco",
        price: 980,
      },
      {
        name: "Yosemite Valley",
        description: "Granite cliffs, waterfalls, and ancient sequoias.",
        imageUrl: "/USA/yosemite-valley.png",
        imageAlt: "Yosemite Valley view with El Capitan",
        price: 620,
      },
      {
        name: "Orlando Theme Parks",
        description: "The world's theme park capital, perfect for family fun.",
        imageUrl: "/USA/orlando.jpg",
        imageAlt: "Orlando city lights",
        price: 1800,
      },
    ],
  },

  // 🇫🇷 FRANCE
  {
    slug: "france",
    countryName: "France",
    currencySymbol: "€",
    featuredPlace: {
      description: "Paris’s iron lattice icon and sweeping city panoramas.",
      imageUrl: "/France/eiffel-tower.png",
      imageAlt: "Eiffel Tower, Paris, France",
    },
    places: [
      {
        name: "Eiffel Tower",
        description: "Unmistakable Paris landmark with spectacular views.",
        imageUrl: "/France/eiffel-tower.png",
        imageAlt: "Eiffel Tower from the Champ de Mars",
        price: 80,
      },
      {
        name: "Mont Saint-Michel",
        description: "Island abbey rising from tidal sands in Normandy.",
        imageUrl: "/France/mont-saint-michel.png",
        imageAlt: "Mont Saint-Michel at high tide",
        price: 550,
      },
      {
        name: "Louvre Museum",
        description: "World’s largest art museum with glass pyramid.",
        imageUrl: "/France/louvre-museum.png",
        imageAlt: "Louvre Pyramid in Paris",
        price: 120,
      },
      {
        name: "Versailles Palace",
        description: "Former royal residence famous for its Hall of Mirrors.",
        imageUrl: "/France/versailles.jpg",
        imageAlt: "Palace of Versailles",
        price: 180,
      },
    ],
  },

  // 🇯🇵 JAPAN
  {
    slug: "japan",
    countryName: "Japan",
    currencySymbol: "¥",
    featuredPlace: {
      description: "Pathways of vermilion torii gates in Kyoto’s hills.",
      imageUrl: "/Japan/fushimi-inari.png",
      imageAlt: "Torii gates at Fushimi Inari Shrine, Kyoto, Japan",
    },
    places: [
      {
        name: "Fushimi Inari Taisha",
        description: "Thousands of torii gates forming vivid trails.",
        imageUrl: "/Japan/fushimi-inari.png",
        imageAlt: "Vermilion torii gates in Kyoto",
        price: 18000,
      },
      {
        name: "Tokyo Skytree",
        description: "Sky-high views over the world’s largest metropolis.",
        imageUrl: "/Japan/tokyo-skytree-night.png",
        imageAlt: "Tokyo Skytree tower and skyline",
        price: 8500,
      },
      {
        name: "Mount Fuji",
        description: "Japan's sacred and tallest mountain, an iconic symbol.",
        imageUrl: "/Japan/Mount Fuji.jpg",
        imageAlt: "Mount Fuji with pagoda in foreground",
        price: 32000,
      },
    ],
  },

  // 🇦🇺 AUSTRALIA
  {
    slug: "australia",
    countryName: "Australia",
    currencySymbol: "A$",
    featuredPlace: {
      description: "Harbourside icon with sail-like shells and culture.",
      imageUrl: "/Australia/sydney-opera-house.png",
      imageAlt: "Sydney Opera House by the harbour",
    },
    places: [
      {
        name: "Sydney Opera House",
        description: "Architectural marvel and premier performance venue.",
        imageUrl: "/Australia/sydney-opera-house.png",
        imageAlt: "Sydney Harbour view",
        price: 85,
      },
      {
        name: "Great Barrier Reef",
        description: "Colorful corals teeming with marine life.",
        imageUrl: "/Australia/great-barrier-reef.png",
        imageAlt: "Coral reef underwater scene",
        price: 250,
      },
      {
        name: "Uluru",
        description: "Monolithic sandstone rock sacred to Anangu people.",
        imageUrl: "/Australia/uluru.png",
        imageAlt: "Uluru at dusk in Central Australia",
        price: 900,
      },
    ],
  },

  // 🇮🇹 ITALY
  {
    slug: "italy",
    countryName: "Italy",
    currencySymbol: "€",
    featuredPlace: {
      description: "Ancient Roman amphitheatre and historic symbol.",
      imageUrl: "/Italy/colosseum-rome.png",
      imageAlt: "Colosseum exterior, Rome, Italy",
    },
    places: [
      {
        name: "Colosseum",
        description: "Icon of Imperial Rome and engineering prowess.",
        imageUrl: "/Italy/colosseum-rome.png",
        imageAlt: "Colosseum arches in Rome",
        price: 75,
      },
      {
        name: "Rialto Bridge",
        description: "Famous bridge over Venice’s Grand Canal.",
        imageUrl: "/Italy/ponte.jpg",
        imageAlt: "Rialto Bridge in Venice",
        price: 60,
      },
      {
        name: "Vatican City",
        description: "Spiritual and artistic heart of Rome.",
        imageUrl: "/Italy/vatican.jpg",
        imageAlt: "St. Peter’s Basilica, Vatican City",
        price: 120,
      },
    ],
  },

  // 🇬🇧 UK
  {
    slug: "uk",
    countryName: "UK",
    currencySymbol: "£",
    featuredPlace: {
      description: "Victorian bascule bridge over the Thames.",
      imageUrl: "/UK/tower-bridge-london.jpg",
      imageAlt: "Tower Bridge, London, UK",
    },
    places: [
      {
        name: "Tower Bridge",
        description: "Gothic Revival towers and river views.",
        imageUrl: "/UK/tower-bridge-london.jpg",
        imageAlt: "Tower Bridge close-up",
        price: 25,
      },
      {
        name: "Westminster Abbey",
        description: "Gothic abbey church and royal coronation site.",
        imageUrl: "/UK/westminster-abbey-london.jpg",
        imageAlt: "Westminster Abbey at dusk",
        price: 30,
      },
    ],
  },

  // 🇸🇬 SINGAPORE
  {
    slug: "singapore",
    countryName: "Singapore",
    currencySymbol: "S$",
    featuredPlace: {
      description: "SkyPark-topped hotel shaping the city skyline.",
      imageUrl: "/Singapore/MarinabaySand.jpg",
      imageAlt: "Marina Bay Sands, Singapore",
    },
    places: [
      {
        name: "Marina Bay Sands",
        description: "Skyline-defining hotel and observation deck.",
        imageUrl: "/Singapore/MarinabaySand.jpg",
        imageAlt: "Marina Bay Sands in evening lights",
        price: 32,
      },
      {
        name: "Sentosa Island",
        description: "Resorts, beaches, and family attractions.",
        imageUrl: "/Singapore/Sentosa-Island.jpg",
        imageAlt: "Sentosa Island beach",
        price: 70,
      },
    ],
  },

  // 🇪🇸 SPAIN
  {
    slug: "spain",
    countryName: "Spain",
    currencySymbol: "€",
    featuredPlace: {
      description: "Gaudi's unfinished basilica, a masterpiece of Modernism.",
      imageUrl: "/Spain/sagrada-familia.jpg",
      imageAlt: "Sagrada Familia Basilica in Barcelona, Spain",
    },
    places: [
      {
        name: "Sagrada Familia",
        description: "The iconic, towering basilica in Barcelona.",
        imageUrl: "/Spain/sagrada-familia.jpg",
        imageAlt: "Sagrada Familia exterior",
        price: 45,
      },
      {
        name: "Alhambra Palace",
        description: "Moorish palace and fortress complex in Granada.",
        imageUrl: "/Spain/alhambra-granada.jpg",
        imageAlt: "Alhambra Palace overlooking Granada",
        price: 65,
      },
    ],
  },

  // 🇹🇭 THAILAND
  {
    slug: "thailand",
    countryName: "Thailand",
    currencySymbol: "฿",
    featuredPlace: {
      description: "Ornate royal complex at Bangkok’s heart.",
      imageUrl: "/Thailand/grand-palace.jpg",
      imageAlt: "Grand Palace in Bangkok, Thailand",
    },
    places: [
      {
        name: "Grand Palace",
        description: "Opulent spires, murals, and sacred sites.",
        imageUrl: "/Thailand/grand-palace.jpg",
        imageAlt: "Grand Palace complex in Bangkok",
        price: 1500,
      },
      {
        name: "Phi Phi Islands",
        description: "Sheer limestone cliffs and turquoise lagoons.",
        imageUrl: "/Thailand/Phi-Phi.jpg",
        imageAlt: "Phi Phi islands and bay",
        price: 3200,
      },
    ],
  },

  // 🇷🇺 RUSSIA
  {
    slug: "russia",
    countryName: "Russia",
    currencySymbol: "₽",
    featuredPlace: {
      description: "Iconic cathedral in Moscow's Red Square.",
      imageUrl: "/Russia/moscow.jpg",
      imageAlt: "St. Basil's Cathedral in Moscow",
    },
    places: [
      {
        name: "St. Basil's Cathedral",
        description: "Multi-hued domes define this Red Square landmark.",
        imageUrl: "/Russia/moscow.jpg",
        imageAlt: "St. Basil's Cathedral, Moscow",
        price: 1500,
      },
      {
        name: "Saint Petersburg Canals",
        description: "City often called the 'Venice of the North'.",
        imageUrl: "/Russia/saint-petersburg.jpg",
        imageAlt: "St. Petersburg canal at night",
        price: 1800,
      },
    ],
  },

  // 🇦🇪 UAE
  {
    slug: "uae",
    countryName: "UAE",
    currencySymbol: "AED",
    featuredPlace: {
      description: "World’s tallest tower with sweeping desert views.",
      imageUrl: "/UAE/burj-khalifa.jpg",
      imageAlt: "Burj Khalifa towering over Dubai skyline",
    },
    places: [
      {
        name: "Burj Khalifa",
        description: "Observation decks with panoramic cityscapes.",
        imageUrl: "/UAE/burj-khalifa.jpg",
        imageAlt: "Burj Khalifa and Dubai fountains",
        price: 180,
      },
      {
        name: "Palm Jumeirah",
        description: "Palm-shaped island lined with resorts.",
        imageUrl: "/UAE/PalmJumeirah.jpg",
        imageAlt: "Palm Jumeirah aerial view",
        price: 750,
      },
    ],
  },
];

// ----------------------
// HELPERS
// ----------------------

export const COUNTRY_MAP: Record<string, Country> = Object.fromEntries(
  COUNTRIES.map((c) => [c.slug, c])
);

export function getCountries() {
  return COUNTRIES;
}

export function getCountryBySlug(slug: string) {
  return COUNTRY_MAP[slug.toLowerCase()];
}

export function getAllDestinations() {
  return COUNTRIES.flatMap((country) =>
    country.places.map((place) => ({
      country: country.countryName,
      countrySlug: country.slug,
      currencySymbol: country.currencySymbol,
      ...place,
    }))
  );
}

export function getCurrencySymbol(countryName: string) {
  const country = COUNTRIES.find((c) => c.countryName === countryName);
  return country ? country.currencySymbol : "¤";
}
