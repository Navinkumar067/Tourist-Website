// navinkumar067/tourist-website/Tourist-Website-8c6c6825b935cd6e5823408089efeb42a33d9d6b/lib/destinations-data.ts

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
      // UPDATED to point to /India folder
      imageUrl: "/India/mahabalipuram.png",
      imageAlt: "Mahabalipuram Shore Temple at sunrise, Tamil Nadu, India",
    },
    places: [
      {
        name: "Chennai Marina Beach",
        description: "One of the world’s longest urban beaches, vibrant and breezy.",
        imageUrl: "/India/marina-beach.png",
        imageAlt: "Marina Beach shoreline in Chennai, India",
      },
      {
        name: "Madurai Meenakshi Temple",
        description: "Dravidian masterpiece with ornate gopurams and rich history.",
        // CORRECTED FILE PATH
        imageUrl: "/India/brihadeeswara-temple.png",
        imageAlt: "Meenakshi Amman Temple gopurams in Madurai, India",
      },
      {
        name: "Thanjavur Brihadeeswara Temple",
        description: "Chola-era temple famed for its giant vimana and sculptures.",
        imageUrl: "/India/brihadeeswara-temple.png",
        imageAlt: "Brihadeeswara Temple in Thanjavur, India",
      },
      {
        name: "Amritsar Golden Temple",
        description: "The holiest gurdwara of Sikhism, a beautiful golden structure.",
        imageUrl: "/India/harmandir-sahib.jpg",
        imageAlt: "Harmandir Sahib (Golden Temple) in Amritsar, India",
      },
      {
        name: "Alleppey Backwaters",
        description: "Houseboat cruises along Kerala's tranquil network of canals and lagoons.",
        imageUrl: "/India/Alleppey.jpg",
        imageAlt: "Houseboat on the backwaters of Alleppey, India",
      },
      {
        name: "New Delhi India Gate",
        description: "War memorial often compared to the Arc de Triomphe.",
        imageUrl: "/India/Delhi.jpg",
        imageAlt: "India Gate in New Delhi at dusk",
      },
      {
        name: "Mathura and Vrindavan",
        description: "Birthplaces of Lord Krishna, featuring numerous temples and cultural sites.",
        imageUrl: "/India/Mathura-and-Vrindavan.jpg",
        imageAlt: "Prem Mandir in Vrindavan, India",
      },
    ],
  },
  {
    slug: "usa",
    countryName: "USA",
    featuredPlace: {
      name: "Grand Canyon",
      description: "Vast layered red-rock canyon carved by the Colorado River.",
      imageUrl: "/USA/grand-canyon-arizona.png",
      imageAlt: "Grand Canyon cliffs at sunset in Arizona, USA",
    },
    places: [
      {
        name: "Grand Canyon",
        description: "Iconic vistas with dramatic cliffs and winding river.",
        imageUrl: "/USA/grand-canyon-arizona.png",
        imageAlt: "Grand Canyon scenic overlook",
      },
      {
        name: "New York Central Park",
        description: "Green oasis amid Manhattan’s skyline and energy.",
        imageUrl: "/USA/central-park-autumn.png",
        imageAlt: "Central Park with city skyline in the background",
      },
      {
        name: "Golden Gate Bridge",
        description: "Striking suspension bridge spanning the Golden Gate strait.",
        imageUrl: "/USA/golden-gate-bridge.png",
        imageAlt: "Golden Gate Bridge with fog in San Francisco",
      },
      {
        name: "Yosemite Valley",
        description: "Granite cliffs, waterfalls, and ancient sequoias.",
        imageUrl: "/USA/yosemite-valley.png",
        imageAlt: "Yosemite Valley with El Capitan and Half Dome",
      },
      {
        name: "Los Angeles Skyline",
        description: "The bustling metropolis known for Hollywood and beaches.",
        imageUrl: "/USA/los-angeles.jpg",
        imageAlt: "Los Angeles downtown skyline at sunset",
      },
      {
        name: "Orlando Theme Parks",
        description: "The world's theme park capital, perfect for family fun.",
        imageUrl: "/USA/orlando.jpg",
        imageAlt: "Downtown Orlando illuminated at night",
      },
      {
        name: "Washington D.C. Capitol",
        description: "The iconic center of the US government and historical monuments.",
        imageUrl: "/USA/washington.jpg",
        imageAlt: "US Capitol Building in Washington D.C. at night",
      },
    ],
  },
  {
    slug: "france",
    countryName: "France",
    featuredPlace: {
      name: "Eiffel Tower",
      description: "Paris’s iron lattice icon and sweeping city panoramas.",
      imageUrl: "/France/eiffel-tower.png",
      imageAlt: "Eiffel Tower with blue sky in Paris, France",
    },
    places: [
      {
        name: "Eiffel Tower",
        description: "Unmistakable Paris landmark with spectacular views.",
        imageUrl: "/France/eiffel-tower.png",
        imageAlt: "Eiffel Tower from the Champ de Mars",
      },
      {
        name: "Mont Saint-Michel",
        description: "Island abbey rising from tidal sands in Normandy.",
        imageUrl: "/France/mont-saint-michel.png",
        imageAlt: "Mont Saint-Michel at high tide",
      },
      {
        name: "Louvre Museum",
        description: "World’s largest art museum with glass pyramid.",
        imageUrl: "/France/louvre-museum.png",
        imageAlt: "Louvre Pyramid courtyard in Paris",
      },
      {
        name: "Versailles Palace",
        description: "Former royal residence famous for its Hall of Mirrors and vast gardens.",
        imageUrl: "/France/versailles.jpg",
        imageAlt: "The Palace of Versailles courtyard",
      },
      {
        name: "Verdon Gorge",
        description: "A river canyon known for its stunning turquoise water and kayaking.",
        imageUrl: "/France/verdon_gorge.jpg",
        imageAlt: "Verdon Gorge river with turquoise water",
      },
    ],
  },
  {
    slug: "japan",
    countryName: "Japan",
    featuredPlace: {
      name: "Fushimi Inari Taisha",
      description: "Pathways of vermilion torii gates in Kyoto’s hills.",
      imageUrl: "/Japan/fushimi-inari.png",
      imageAlt: "Torii gates at Fushimi Inari Shrine in Kyoto, Japan",
    },
    places: [
      {
        name: "Fushimi Inari Taisha",
        description: "Thousands of torii gates forming vivid trails.",
        imageUrl: "/Japan/fushimi-inari.png",
        imageAlt: "Vermilion torii gates in Kyoto",
      },
      {
        name: "Arashiyama Bamboo Grove",
        description: "Whispering bamboo stalks and serene paths.",
        imageUrl: "/Japan/arashiyama-bamboo-grove.png",
        imageAlt: "Arashiyama bamboo forest path",
      },
      {
        name: "Tokyo Skytree",
        description: "Sky-high views over the world’s largest metropolis.",
        imageUrl: "/Japan/tokyo-skytree-night.png",
        imageAlt: "Tokyo Skytree tower and skyline",
      },
      {
        name: "Mount Fuji",
        description: "Japan's sacred and tallest mountain, an iconic symbol.",
        imageUrl: "/Japan/Mount Fuji.jpg",
        imageAlt: "Mount Fuji with traditional pagoda in the foreground",
      },
      {
        name: "Historic Nara",
        description: "Home to wild deer and great Buddhist temples like Todai-ji.",
        imageUrl: "/Japan/Historic Nara.jpg",
        imageAlt: "Tōdai-ji Temple reflected in a pond in Nara, Japan",
      },
      {
        name: "Sapporo, Hokkaido",
        description: "Known for its beer, ramen, and the annual snow festival.",
        imageUrl: "/Japan/Sapporo, Hokkaido.jpg",
        imageAlt: "Sapporo city center and green spaces",
      },
    ],
  },
  {
    slug: "australia",
    countryName: "Australia",
    featuredPlace: {
      name: "Sydney Opera House",
      description: "Harbourside icon with sail-like shells and culture.",
      imageUrl: "/Australia/sydney-opera-house.png",
      imageAlt: "Sydney Opera House by the harbour",
    },
    places: [
      {
        name: "Sydney Opera House",
        description: "Architectural marvel and premier performance venue.",
        imageUrl: "/Australia/sydney-opera-house.png",
        imageAlt: "Opera House with Sydney Harbour Bridge",
      },
      {
        name: "Great Barrier Reef",
        description: "Colorful corals teeming with marine life.",
        imageUrl: "/Australia/great-barrier-reef.png",
        imageAlt: "Coral reef underwater scene",
      },
      {
        name: "Uluru",
        description: "Monolithic sandstone rock sacred to Anangu people.",
        imageUrl: "/Australia/uluru.png",
        imageAlt: "Uluru at dusk in Central Australia",
      },
      {
        name: "Sydney Harbour Bridge",
        description: "Massive steel arch bridge over Sydney Harbour.",
        imageUrl: "/France/sydney-harbor.jpg",
        imageAlt: "Sydney Harbour Bridge at sunset",
      },
      {
        name: "Bondi Beach",
        description: "One of Australia's most famous beaches, popular for surfing.",
        imageUrl: "/France/bondi-beach.jpg",
        imageAlt: "Bondi Beach with clear blue water and crowds",
      },
      {
        name: "Kakadu National Park",
        description: "Immense, biodiverse national park known for waterfalls and aboriginal rock art.",
        imageUrl: "/France/kakadu-national-park.jpg",
        imageAlt: "Jim Jim Falls in Kakadu National Park",
      },
    ],
  },
  {
    slug: "italy",
    countryName: "Italy",
    featuredPlace: {
      name: "Colosseum",
      description: "Ancient Roman amphitheatre and historic symbol.",
      imageUrl: "/Italy/colosseum-rome.png",
      imageAlt: "Colosseum exterior in Rome, Italy",
    },
    places: [
      {
        name: "Colosseum",
        description: "Icon of Imperial Rome and engineering prowess.",
        imageUrl: "/Italy/colosseum-rome.png",
        imageAlt: "Colosseum arches in Rome",
      },
      {
        name: "Venice Canals",
        description: "Gondolas, bridges, and romantic waterways.",
        imageUrl: "/Italy/venice-canals.png",
        imageAlt: "Venetian canal with gondola",
      },
      {
        name: "Rialto Bridge (Ponte di Rialto)",
        description: "One of the four bridges spanning the Grand Canal in Venice.",
        imageUrl: "/France/ponte.jpg",
        imageAlt: "Rialto Bridge over the Grand Canal, Venice",
      },
      {
        name: "Grand Canal, Venice",
        description: "The major waterway winding through Venice.",
        imageUrl: "/France/canal_grande.jpg",
        imageAlt: "Kayaks on the Grand Canal, Venice",
      },
      {
        name: "Strasbourg Cathedral (mistaken file)",
        description: "Placeholder for a city in Italy - needs updating.",
        imageUrl: "/France/strasbourg.jpg",
        imageAlt: "Strasbourg Christmas Market",
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
      imageUrl: "/UK/tower-bridge-london.jpg",
      imageAlt: "Tower Bridge spanning the Thames in London, UK",
    },
    places: [
      {
        name: "Tower Bridge",
        description: "Gothic Revival towers and river views.",
        imageUrl: "/UK/tower-bridge-london.jpg",
        imageAlt: "Tower Bridge close-up in London",
      },
      {
        name: "Westminster Abbey",
        description: "Gothic abbey church, burial site of monarchs.",
        imageUrl: "/UK/westminster-abbey-london.jpg",
        imageAlt: "Westminster Abbey at dusk in London",
      },
      {
        name: "Big Ben and Houses of Parliament",
        description: "Iconic clock tower and the seat of the UK Parliament.",
        imageUrl: "/UK/big-ben-london.jpg",
        imageAlt: "Big Ben tower at night in London",
      },
      {
        name: "The National Gallery",
        description: "Art museum in Trafalgar Square.",
        imageUrl: "/UK/national-gallery-london.jpg",
        imageAlt: "The National Gallery exterior, London",
      },
      {
        name: "Natural History Museum",
        description: "Home to life and earth science specimens.",
        imageUrl: "/UK/national-history-museum-london.jpg",
        imageAlt: "Natural History Museum exterior, London",
      },
      {
        name: "St. James's Park",
        description: "One of the Royal Parks in London.",
        imageUrl: "/UK/st-jamess-park-london.jpg",
        imageAlt: "St. James's Park lake view with city background",
      },
    ],
  },
  {
    slug: "russia",
    countryName: "Russia",
    featuredPlace: {
      name: "St. Basil's Cathedral",
      description: "Iconic cathedral in Moscow's Red Square.",
      imageUrl: "/Russia/moscow.jpg",
      imageAlt: "St. Basil's Cathedral in Moscow",
    },
    places: [
      {
        name: "St. Basil's Cathedral",
        description: "Multi-hued domes define this Red Square landmark.",
        imageUrl: "/Russia/moscow.jpg",
        imageAlt: "St. Basil's Cathedral in Moscow",
      },
      {
        name: "Kazan Kul Sharif Mosque",
        description: "Restored mosque in Kazan Kremlin, a symbol of Tatar heritage.",
        imageUrl: "/Russia/kazan.jpg",
        imageAlt: "Kul Sharif Mosque in Kazan, Russia",
      },
      {
        name: "Kizhi Island",
        description: "Historic site with unique wooden architecture including churches.",
        imageUrl: "/Russia/kizhi-island.jpg",
        imageAlt: "Wooden churches on Kizhi Island model",
      },
      {
        name: "Saint Petersburg Canals",
        description: "City often called the 'Venice of the North'.",
        imageUrl: "/Russia/saint-petersburg.jpg",
        imageAlt: "St. Petersburg canal at night",
      },
      {
        name: "Valaam Archipelago",
        description: "Monastery on an island in Lake Ladoga.",
        imageUrl: "/Russia/valaam.jpg",
        imageAlt: "Valaam Island rocky coastline and water",
      },
      {
        name: "Vladivostok Bridges",
        description: "Modern bridges connecting parts of the city over the Golden Horn Bay.",
        imageUrl: "/Russia/vladivostok.jpg",
        imageAlt: "Golden Bridge in Vladivostok, Russia",
      },
    ],
  },
  {
    slug: "spain",
    countryName: "Spain",
    featuredPlace: {
      name: "Sagrada Familia",
      description: "Gaudi's unfinished basilica, a masterpiece of Catalan Modernism.",
      imageUrl: "/Spain/sagrada-familia.jpg",
      imageAlt: "Sagrada Familia Basilica in Barcelona, Spain",
    },
    places: [
      {
        name: "Sagrada Familia",
        description: "The iconic, towering basilica in Barcelona.",
        imageUrl: "/Spain/sagrada-familia.jpg",
        imageAlt: "Sagrada Familia exterior",
      },
      {
        name: "Alhambra Palace",
        description: "Moorish palace and fortress complex in Granada.",
        imageUrl: "/Spain/alhambra-granada.jpg",
        imageAlt: "Alhambra Palace overlooking Granada",
      },
      {
        name: "Plaza de España, Seville",
        description: "Architectural masterpiece and famous landmark in Seville.",
        imageUrl: "/Spain/plaza-de-espana-seville.jpg",
        imageAlt: "Plaza de España with canal in Seville",
      },
      {
        name: "Mosque-Cathedral of Córdoba",
        description: "A unique monument showcasing Islamic and Christian architecture.",
        imageUrl: "/Spain/cordoba-mosque.jpg",
        imageAlt: "Interior of the Mosque-Cathedral of Córdoba",
      },
      {
        name: "City of Arts and Sciences",
        description: "Futuristic architectural complex in Valencia.",
        imageUrl: "/Spain/city-of-arts-valencia.jpg",
        imageAlt: "Hemisfèric building in the City of Arts and Sciences, Valencia",
      },
      {
        name: "Nerja (Costa del Sol)",
        description: "Coastal town famous for its caves and Balcón de Europa lookout.",
        imageUrl: "/Spain/nerja-costa-del-sol.jpg",
        imageAlt: "Beach on the Costa del Sol near Nerja",
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