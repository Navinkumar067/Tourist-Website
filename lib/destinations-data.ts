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

// lib/destinations-data.ts

// ... (keep the type definitions at the top of the file)

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
        name: "Taj Mahal",
        description: "Iconic mausoleum and a global symbol of love.",
        imageUrl: "/India/taj-mahal-agra.png",
        imageAlt: "Taj Mahal at sunset, Agra, India",
        price: 2500,
      },
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
      {
        name: "India Gate",
        description: "War memorial arch at the heart of New Delhi.",
        imageUrl: "/India/Delhi.jpg",
        imageAlt: "India Gate at dusk, New Delhi",
        price: 7000,
      },
      {
        name: "Mathura & Vrindavan",
        description: "Birthplace of Lord Krishna, famed for its beautiful temples.",
        imageUrl: "/India/Mathura-and-Vrindavan.jpg",
        imageAlt: "Prem Mandir in Vrindavan",
        price: 9000,
      },
      {
        name: "Mahabalipuram",
        description: "Ancient coastal town with stone temples and carvings.",
        imageUrl: "/India/mahabalipuram.png",
        imageAlt: "Shore Temple at Mahabalipuram",
        price: 8200,
      },
      {
        name: "Pamban Bridge",
        description: "Iconic railway bridge connecting Rameswaram island.",
        imageUrl: "/India/pamban-bridge.png",
        imageAlt: "Pamban Bridge over the sea in Rameswaram",
        price: 13000,
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
      {
        name: "Statue of Liberty",
        description: "A colossal neoclassical sculpture on Liberty Island.",
        imageUrl: "/USA/new-york.jpg",
        imageAlt: "Statue of Liberty with New York skyline",
        price: 200,
      },
      {
        name: "Los Angeles",
        description: "Sprawling city, home to Hollywood and movie stars.",
        imageUrl: "/USA/los-angeles.jpg",
        imageAlt: "Los Angeles freeway at sunset",
        price: 750,
      },
      {
        name: "New Orleans",
        description: "Vibrant city with a rich history of music and culture.",
        imageUrl: "/USA/new-orleans-statue-garden.jpg",
        imageAlt: "Jackson Square in New Orleans",
        price: 550,
      },
      {
        name: "Washington, D.C.",
        description: "The U.S. capital, filled with iconic monuments and museums.",
        imageUrl: "/USA/washington.jpg",
        imageAlt: "United States Capitol building at night",
        price: 400,
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
      {
        name: "Seine River Cruise",
        description: "A relaxing boat tour through the heart of Paris.",
        imageUrl: "/France/seine-cruise-paris.png",
        imageAlt: "Boat cruise on the Seine river with Eiffel Tower",
        price: 60,
      },
      {
        name: "Strasbourg",
        description: "Charming city with a blend of French and German culture.",
        imageUrl: "/France/strasbourg.jpg",
        imageAlt: "Strasbourg city square with Christmas tree",
        price: 400,
      },
      {
        name: "Verdon Gorge",
        description: "Stunning river canyon known for its turquoise-blue water.",
        imageUrl: "/France/verdon_gorge.jpg",
        imageAlt: "Boats on the turquoise water of Verdon Gorge",
        price: 350,
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
      {
        name: "Arashiyama Bamboo Grove",
        description: "A magical, towering bamboo forest in Kyoto.",
        imageUrl: "/Japan/arashiyama-bamboo-grove.png",
        imageAlt: "Walking path through Arashiyama Bamboo Grove",
        price: 17000,
      },
      {
        name: "Historic Nara",
        description: "Ancient capital with famous temples and friendly deer.",
        imageUrl: "/Japan/Historic Nara.jpg",
        imageAlt: "Todai-ji Temple in Nara at dusk",
        price: 22000,
      },
      {
        name: "Kyoto Temple",
        description: "Beautiful temple surrounded by autumn leaves.",
        imageUrl: "/Japan/kyoto-temple-autumn-leaves.png",
        imageAlt: "Japanese temple in Kyoto during autumn",
        price: 19000,
      },
      {
        name: "Sapporo, Hokkaido",
        description: "City known for its ramen, beer, and winter snow festival.",
        imageUrl: "/Japan/Sapporo, Hokkaido.jpg",
        imageAlt: "Odori Park in Sapporo, Hokkaido",
        price: 35000,
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
      {
        name: "Bondi Beach",
        description: "One of the world's most famous and iconic beaches.",
        imageUrl: "/Australia/bondi-beach.jpg",
        imageAlt: "Aerial view of Bondi Beach, Sydney",
        price: 120,
      },
      {
        name: "Kakadu National Park",
        description: "Vast park with wetlands, wildlife, and rock art.",
        imageUrl: "/Australia/kakadu-national-park.jpg",
        imageAlt: "Waterfall in Kakadu National Park",
        price: 400,
      },
      {
        name: "Sydney Harbour Bridge",
        description: "Iconic 'Coathanger' bridge with stunning city views.",
        imageUrl: "/Australia/sydney-harbor.jpg",
        imageAlt: "Sydney Harbour Bridge",
        price: 100,
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
      {
        name: "Amalfi Coast",
        description: "Stunning coastline with cliffside villages and blue waters.",
        imageUrl: "/Italy/amalfi.jpg",
        imageAlt: "Positano village on the Amalfi Coast at night",
        price: 600,
      },
      {
        name: "Sacre-Coeur Basilica",
        description: "Famous basilica in Paris (Note: This is in France).",
        imageUrl: "/Italy/basilica-scaled.jpeg",
        imageAlt: "Sacre-Coeur Basilica in Paris",
        price: 90,
      },
      {
        name: "Venice Grand Canal",
        description: "The main waterway of Venice, lined with palazzos.",
        imageUrl: "/Italy/canal_grande.jpg",
        imageAlt: "Kayaks and boats on the Grand Canal in Venice",
        price: 150,
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
      {
        name: "Big Ben",
        description: "The iconic clock tower of the Houses of Parliament.",
        imageUrl: "/UK/big-ben-london.jpg",
        imageAlt: "Big Ben clock tower at night",
        price: 40,
      },
      {
        name: "National Gallery",
        description: "Art museum in Trafalgar Square with masterpieces.",
        imageUrl: "/UK/national-gallery-london.jpg",
        imageAlt: "The National Gallery in Trafalgar Square",
        price: 20,
      },
      {
        name: "Natural History Museum",
        description: "Houses vast specimens in stunning architecture.",
        imageUrl: "/UK/national-history-museum-london.jpg",
        imageAlt: "Natural History Museum exterior in London",
        price: 22,
      },
      {
        name: "St. James's Park",
        description: "A beautiful royal park with a lake and wildlife.",
        imageUrl: "/UK/st-jamess-park-london.jpg",
        imageAlt: "St. James's Park lake with London Eye",
        price: 10,
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
      {
        name: "Gardens by the Bay",
        description: "Futuristic park with Supertree Grove and cooled conservatories.",
        imageUrl: "/Singapore/Gardens-by-the-Bay.jpg",
        imageAlt: "Supertree Grove at Gardens by the Bay",
        price: 45,
      },
      {
        name: "Merlion Park",
        description: "Home to the iconic Merlion statue overlooking the bay.",
        imageUrl: "/Singapore/Merlion-Park-Singapore.jpg",
        imageAlt: "Merlion statue at night with city skyline",
        price: 10,
      },
      {
        name: "Sri Mariamman Temple",
        description: "Singapore's oldest Hindu temple, located in Chinatown.",
        imageUrl: "/Singapore/Sri-Mariamman-Temple.jpg",
        imageAlt: "Ornate statues on the roof of Sri Mariamman Temple",
        price: 15,
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
      {
        name: "City of Arts and Sciences",
        description: "Stunning modern architecture in Valencia.",
        imageUrl: "/Spain/city-of-arts-valencia.jpg",
        imageAlt: "City of Arts and Sciences building in Valencia",
        price: 50,
      },
      {
        name: "Mosque-Cathedral of Córdoba",
        description: "A monumental mosque-turned-cathedral with striped arches.",
        imageUrl: "/Spain/cordoba-mosque.jpg",
        imageAlt: "Interior arches of the Mosque-Cathedral of Córdoba",
        price: 40,
      },
      {
        name: "Nerja, Costa del Sol",
        description: "Beautiful beaches and coastal views on the Costa del Sol.",
        imageUrl: "/Spain/nerja-costa-del-sol.jpg",
        imageAlt: "Beach in Nerja, Costa del Sol",
        price: 250,
      },
      {
        name: "Plaza de España",
        description: "Grand plaza in Seville with intricate tilework.",
        imageUrl: "/Spain/plaza-de-espana-seville.jpg",
        imageAlt: "Plaza de España in Seville",
        price: 30,
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
      {
        name: "Chiang Mai",
        description: "Cultural city with temples and lantern festivals.",
        imageUrl: "/Thailand/chiang.jpeg",
        imageAlt: "Lantern festival in Chiang Mai",
        price: 2800,
      },
      {
        name: "Doi Inthanon",
        description: "The highest peak in Thailand, with beautiful pagodas.",
        imageUrl: "/Thailand/doi-inthanon.jpg",
        imageAlt: "Royal pagodas at Doi Inthanon",
        price: 2500,
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
      {
        name: "Kazan Kremlin",
        description: "A beautiful white and blue mosque in Kazan.",
        imageUrl: "/Russia/kazan.jpg",
        imageAlt: "The Kul Sharif Mosque in Kazan Kremlin",
        price: 1200,
      },
      {
        name: "Kizhi Island",
        description: "Historic site with amazing wooden architecture.",
        imageUrl: "/Russia/kizhi-island.jpg",
        imageAlt: "Wooden churches on Kizhi Island",
        price: 2000,
      },
      {
        name: "Valaam Archipelago",
        description: "Scenic views of the monastery and rocky islands.",
        imageUrl: "/Russia/valaam.jpg",
        imageAlt: "Rocky coast of Valaam Island",
        price: 1700,
      },
      {
        name: "Vladivostok",
        description: "A major port city overlooking the Golden Horn Bay.",
        imageUrl: "/Russia/vladivostok.jpg",
        imageAlt: "View of the Zolotoy Bridge in Vladivostok",
        price: 3000,
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
      {
        name: "Sheikh Zayed Grand Mosque",
        description: "A stunning monument of Islamic architecture in Abu Dhabi.",
        imageUrl: "/UAE/Sheikh Zayed Grand Mosque.jpg",
        imageAlt: "Courtyard of Sheikh Zayed Grand Mosque",
        price: 100,
      },
    ],
  },
];

export const COUNTRY_MAP: Record<string, Country> = Object.fromEntries(
  COUNTRIES.map((c) => [c.slug, c])
);

export function getCountries() {
  return COUNTRIES;
}

export function getCountryBySlug(slug: string) {
  if (!slug) {
    return undefined;
  }
  return COUNTRY_MAP[slug.toLowerCase()];
}

// THIS IS THE NEW, CORRECT FUNCTION
export function getAllDestinations() {
  return COUNTRIES.flatMap((country) =>
    country.places.map((place) => ({
      ...place,
      countryName: country.countryName,
      countrySlug: country.slug,
      currencySymbol: country.currencySymbol,
    }))
  );
}

export function getCurrencySymbol(countryName: string) {
  const country = COUNTRIES.find((c) => c.countryName === countryName);
  return country ? country.currencySymbol : "¤";
}
