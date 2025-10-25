export type Place = {
  name: string
  description: string
  imageUrl: string
  imageAlt: string
}

export type Country = {
  slug: string
  countryName: string
  featuredPlace: Place
  places: Place[]
}

export const COUNTRIES: Country[] = [
  {
    slug: "india",
    countryName: "India",
    featuredPlace: {
      name: "Mahabalipuram Shore Temple",
      description: "Pallava-era UNESCO site on Tamil Nadu's Coromandel coast.",
      imageUrl: "/arashiyama-bamboo-grove.png",
      imageAlt: "Mahabalipuram Shore Temple at sunrise, Tamil Nadu, India",
    },
    places: [
      {
        name: "Chennai Marina Beach",
        description: "One of the world’s longest urban beaches, vibrant and breezy.",
        imageUrl: "/chennai-marina-beach.png",
        imageAlt: "Marina Beach shoreline in Chennai, India",
      },
      {
        name: "Madurai Meenakshi Temple",
        description: "Dravidian masterpiece with ornate gopurams and rich history.",
        imageUrl: "/ahabalipuram-shore-temple-tamil-nadu.png",
        imageAlt: "Meenakshi Amman Temple gopurams in Madurai, India",
      },
      {
        name: "Thanjavur Brihadeeswara Temple",
        description: "Chola-era temple famed for its giant vimana and sculptures.",
        imageUrl: "/thanjavur-brihadeeswara-temple.png",
        imageAlt: "Brihadeeswara Temple in Thanjavur, India",
      },
      {
        name: "Ooty Nilgiri Hills",
        description: "Misty tea gardens, colonial charm, and cool mountain air.",
        imageUrl: "/placeholder-2h6hi.png",
        imageAlt: "Tea estates in the Nilgiri Hills, Ooty, India",
      },
      {
        name: "Kodaikanal Lake",
        description: "Serene star-shaped lake encircled by pine-covered hills.",
        imageUrl: "/placeholder-6xpmk.png",
        imageAlt: "Kodaikanal Lake and surrounding hills, India",
      },
      {
        name: "Rameswaram Pamban Bridge",
        description: "Iconic sea bridge linking Pamban Island with the mainland.",
        imageUrl: "/pamban-bridge-rameswaram.png",
        imageAlt: "Pamban Bridge over turquoise sea at Rameswaram, India",
      },
      {
        name: "Mahabalipuram Shore Temple",
        description: "Granite temple complex facing the Bay of Bengal.",
        imageUrl: "/placeholder-p5p3j.png",
        imageAlt: "Shore Temple complex at Mahabalipuram, India",
      },
    ],
  },
  {
    slug: "usa",
    countryName: "USA",
    featuredPlace: {
      name: "Grand Canyon",
      description: "Vast layered red-rock canyon carved by the Colorado River.",
      imageUrl: "/grand-canyon-arizona.png",
      imageAlt: "Grand Canyon cliffs at sunset in Arizona, USA",
    },
    places: [
      {
        name: "Grand Canyon",
        description: "Iconic vistas with dramatic cliffs and winding river.",
        imageUrl: "/grand-canyon-vista.png",
        imageAlt: "Grand Canyon scenic overlook",
      },
      {
        name: "New York Central Park",
        description: "Green oasis amid Manhattan’s skyline and energy.",
        imageUrl: "/central-park-autumn.png",
        imageAlt: "Central Park with city skyline in the background",
      },
      {
        name: "Golden Gate Bridge",
        description: "Striking suspension bridge spanning the Golden Gate strait.",
        imageUrl: "/golden-gate-bridge.png",
        imageAlt: "Golden Gate Bridge with fog in San Francisco",
      },
      {
        name: "Yosemite Valley",
        description: "Granite cliffs, waterfalls, and ancient sequoias.",
        imageUrl: "/yosemite-valley.png",
        imageAlt: "Yosemite Valley with El Capitan and Half Dome",
      },
    ],
  },
  {
    slug: "france",
    countryName: "France",
    featuredPlace: {
      name: "Eiffel Tower",
      description: "Paris’s iron lattice icon and sweeping city panoramas.",
      imageUrl: "/eiffel-tower-paris.png",
      imageAlt: "Eiffel Tower with blue sky in Paris, France",
    },
    places: [
      {
        name: "Eiffel Tower",
        description: "Unmistakable Paris landmark with spectacular views.",
        imageUrl: "/eiffel-tower.png",
        imageAlt: "Eiffel Tower from the Champ de Mars",
      },
      {
        name: "Mont Saint-Michel",
        description: "Island abbey rising from tidal sands in Normandy.",
        imageUrl: "/mont-saint-michel.png",
        imageAlt: "Mont Saint-Michel at high tide",
      },
      {
        name: "Louvre Museum",
        description: "World’s largest art museum with glass pyramid.",
        imageUrl: "/louvre-museum.png",
        imageAlt: "Louvre Pyramid courtyard in Paris",
      },
    ],
  },
  {
    slug: "japan",
    countryName: "Japan",
    featuredPlace: {
      name: "Fushimi Inari Taisha",
      description: "Pathways of vermilion torii gates in Kyoto’s hills.",
      imageUrl: "/fushimi-inari-torii-gates.png",
      imageAlt: "Torii gates at Fushimi Inari Shrine in Kyoto, Japan",
    },
    places: [
      {
        name: "Fushimi Inari Taisha",
        description: "Thousands of torii gates forming vivid trails.",
        imageUrl: "/fushimi-inari.png",
        imageAlt: "Vermilion torii gates in Kyoto",
      },
      {
        name: "Arashiyama Bamboo Grove",
        description: "Whispering bamboo stalks and serene paths.",
        imageUrl: "/arashiyama-bamboo-grove.png",
        imageAlt: "Arashiyama bamboo forest path",
      },
      {
        name: "Tokyo Skytree",
        description: "Sky-high views over the world’s largest metropolis.",
        imageUrl: "/tokyo-skytree-night.png",
        imageAlt: "Tokyo Skytree tower and skyline",
      },
    ],
  },
  {
    slug: "australia",
    countryName: "Australia",
    featuredPlace: {
      name: "Sydney Opera House",
      description: "Harbourside icon with sail-like shells and culture.",
      imageUrl: "/sydney-opera-house.png",
      imageAlt: "Sydney Opera House by the harbour",
    },
    places: [
      {
        name: "Sydney Opera House",
        description: "Architectural marvel and premier performance venue.",
        imageUrl: "/sydney-opera-house.png",
        imageAlt: "Opera House with Sydney Harbour Bridge",
      },
      {
        name: "Great Barrier Reef",
        description: "Colorful corals teeming with marine life.",
        imageUrl: "/great-barrier-reef.png",
        imageAlt: "Coral reef underwater scene",
      },
      {
        name: "Uluru",
        description: "Monolithic sandstone rock sacred to Anangu people.",
        imageUrl: "/uluru.png",
        imageAlt: "Uluru at dusk in Central Australia",
      },
    ],
  },
  {
    slug: "italy",
    countryName: "Italy",
    featuredPlace: {
      name: "Colosseum",
      description: "Ancient Roman amphitheatre and historic symbol.",
      imageUrl: "/colosseum-rome.png",
      imageAlt: "Colosseum exterior in Rome, Italy",
    },
    places: [
      {
        name: "Colosseum",
        description: "Icon of Imperial Rome and engineering prowess.",
        imageUrl: "/colosseum.png",
        imageAlt: "Colosseum arches in Rome",
      },
      {
        name: "Venice Canals",
        description: "Gondolas, bridges, and romantic waterways.",
        imageUrl: "/venice-canals.png",
        imageAlt: "Venetian canal with gondola",
      },
      {
        name: "Amalfi Coast",
        description: "Cliffside villages and crystalline Mediterranean.",
        imageUrl: "/placeholder.svg?height=220&width=360",
        imageAlt: "Amalfi Coasthouses on cliffs",
      },
    ],
  },
  {
    slug: "uk",
    countryName: "UK",
    featuredPlace: {
      name: "Tower Bridge",
      description: "Victorian bascule bridge over the Thames.",
      imageUrl: "/placeholder.svg?height=200&width=320",
      imageAlt: "Tower Bridge spanning the Thames in London, UK",
    },
    places: [
      {
        name: "Tower Bridge",
        description: "Gothic Revival towers and river views.",
        imageUrl: "/placeholder.svg?height=220&width=360",
        imageAlt: "Tower Bridge close-up in London",
      },
      {
        name: "Edinburgh Castle",
        description: "Fortress perched on an ancient volcanic plug.",
        imageUrl: "/placeholder.svg?height=220&width=360",
        imageAlt: "Edinburgh Castle atop Castle Rock",
      },
      {
        name: "Lake District",
        description: "Glacial lakes and green fells made for walks.",
        imageUrl: "/placeholder.svg?height=220&width=360",
        imageAlt: "Lake District valley and lake",
      },
    ],
  },
  {
    slug: "singapore",
    countryName: "Singapore",
    featuredPlace: {
      name: "Marina Bay Sands",
      description: "SkyPark-topped hotel shaping the city skyline.",
      imageUrl: "/placeholder.svg?height=200&width=320",
      imageAlt: "Marina Bay Sands and skyline in Singapore",
    },
    places: [
      {
        name: "Marina Bay Sands",
        description: "Skyline-defining hotel and observation deck.",
        imageUrl: "/placeholder.svg?height=220&width=360",
        imageAlt: "Marina Bay Sands in evening lights",
      },
      {
        name: "Gardens by the Bay",
        description: "Futuristic Supertrees and biodomes.",
        imageUrl: "/placeholder.svg?height=220&width=360",
        imageAlt: "Supertree Grove at Gardens by the Bay",
      },
      {
        name: "Sentosa Island",
        description: "Resorts, beaches, and family attractions.",
        imageUrl: "/placeholder.svg?height=220&width=360",
        imageAlt: "Sentosa beach and palm trees",
      },
    ],
  },
  {
    slug: "thailand",
    countryName: "Thailand",
    featuredPlace: {
      name: "Grand Palace",
      description: "Ornate royal complex at Bangkok’s heart.",
      imageUrl: "/placeholder.svg?height=200&width=320",
      imageAlt: "Grand Palace buildings in Bangkok, Thailand",
    },
    places: [
      {
        name: "Grand Palace",
        description: "Opulent spires, murals, and sacred sites.",
        imageUrl: "/placeholder.svg?height=220&width=360",
        imageAlt: "Grand Palace complex in Bangkok",
      },
      {
        name: "Phi Phi Islands",
        description: "Sheer limestone cliffs and turquoise lagoons.",
        imageUrl: "/placeholder.svg?height=220&width=360",
        imageAlt: "Phi Phi islands and bay",
      },
      {
        name: "Chiang Mai Old City",
        description: "Lanna temples and walkable walled quarter.",
        imageUrl: "/placeholder.svg?height=220&width=360",
        imageAlt: "Chiang Mai temple with golden chedi",
      },
    ],
  },
  {
    slug: "uae",
    countryName: "UAE",
    featuredPlace: {
      name: "Burj Khalifa",
      description: "World’s tallest tower with sweeping desert views.",
      imageUrl: "/placeholder.svg?height=200&width=320",
      imageAlt: "Burj Khalifa towering over Dubai skyline",
    },
    places: [
      {
        name: "Burj Khalifa",
        description: "Observation decks with panoramic cityscapes.",
        imageUrl: "/placeholder.svg?height=220&width=360",
        imageAlt: "Burj Khalifa and Dubai fountains",
      },
      {
        name: "Sheikh Zayed Grand Mosque",
        description: "Glittering white marble domes and columns.",
        imageUrl: "/placeholder.svg?height=220&width=360",
        imageAlt: "Sheikh Zayed Grand Mosque in Abu Dhabi",
      },
      {
        name: "Palm Jumeirah",
        description: "Palm-shaped island lined with resorts.",
        imageUrl: "/placeholder.svg?height=220&width=360",
        imageAlt: "Palm Jumeirah aerial view",
      },
    ],
  },
]

export const COUNTRY_MAP: Record<string, Country> = Object.fromEntries(COUNTRIES.map((c) => [c.slug, c]))

export function getCountries() {
  return COUNTRIES
}

export function getCountryBySlug(slug: string) {
  return COUNTRY_MAP[slug.toLowerCase()]
}
