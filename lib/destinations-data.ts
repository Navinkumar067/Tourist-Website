// destinations-data.ts
export type PlacePackageDetail = {
  title: string;
  price: string;
  highlights: string[];
};

export type Place = {
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  package?: PlacePackageDetail;
};

export type Country = {
  slug: string;
  countryName: string;
  featuredPlace: Omit<Place, "name">;
  places: Place[];
};

export const COUNTRIES: Country[] = [
  {
    slug: "india",
    countryName: "India",
    featuredPlace: {
      description: "Iconic mausoleum and a global symbol of love.",
      imageUrl: "/India/taj-mahal-agra.png",
      imageAlt: "Taj Mahal at sunset, Agra, India",
    },
    places: [
      {
        name: "Chennai Marina Beach",
        description:
          "One of the world’s longest urban beaches, vibrant and breezy.",
        imageUrl: "/India/marina-beach.png",
        imageAlt: "Marina Beach shoreline in Chennai, India",
        package: {
          title: "Marina Beach Sunrise Experience (3D/2N)",
          price: "₹8,500",
          highlights: [
            "3-star Chennai hotel stay",
            "Guided morning beach tour",
            "Authentic South Indian dinner",
          ],
        },
      },
      {
        name: "Madurai Meenakshi Temple",
        description:
          "Dravidian masterpiece with ornate gopurams and rich history.",
        imageUrl: "/India/meenakshi-temple.jpg",
        imageAlt: "Meenakshi Amman Temple gopurams in Madurai, India",
        package: {
          title: "Madurai Temple Pilgrimage (4D/3N)",
          price: "₹12,000",
          highlights: [
            "4-star accommodation near the temple",
            "Private car for local travel",
            "Daily Puja and cultural guide",
          ],
        },
      },
      {
        name: "Thanjavur Brihadeeswara Temple",
        description:
          "Chola-era temple famed for its giant vimana and sculptures.",
        imageUrl: "/India/brihadeeswara-temple.png",
        imageAlt: "Brihadeeswara Temple in Thanjavur, India",
        package: {
          title: "Chola Dynasty Heritage Tour (2D/1N)",
          price: "₹6,500",
          highlights: [
            "Premium guesthouse stay",
            "Guided temple architecture workshop",
            "Traditional Thanjavur art visit",
          ],
        },
      },
      {
        name: "Amritsar Golden Temple",
        description:
          "The holiest gurdwara of Sikhism, a beautiful golden structure.",
        imageUrl: "/India/harmandir-sahib.jpg",
        imageAlt: "Harmandir Sahib (Golden Temple) in Amritsar, India",
        package: {
          title: "Amritsar Spiritual Retreat (3D/2N)",
          price: "₹9,800",
          highlights: [
            "Hotel near the temple complex",
            "Wagah Border Ceremony transport",
            "Free community kitchen experience",
          ],
        },
      },
      {
        name: "Alleppey Backwaters",
        description:
          "Houseboat cruises along Kerala's tranquil network of canals and lagoons.",
        imageUrl: "/India/Alleppey.jpg",
        imageAlt: "Houseboat on the backwaters of Alleppey, India",
        package: {
          title: "Kerala Houseboat Cruise (2D/1N)",
          price: "₹15,500",
          highlights: [
            "Luxury houseboat stay",
            "All meals included (local seafood)",
            "Private deck view and guided village tour",
          ],
        },
      },
      {
        name: "New Delhi India Gate",
        description:
          "War memorial often compared to the Arc de Triomphe.",
        imageUrl: "/India/Delhi.jpg",
        imageAlt: "India Gate in New Delhi at dusk",
        package: {
          title: "Delhi Historical Walk (1 Day)",
          price: "₹3,500",
          highlights: [
            "Guided tour of Old and New Delhi",
            "India Gate and Red Fort entry",
            "Lunch at a traditional Dhabha",
          ],
        },
      },
      {
        name: "Mathura and Vrindavan",
        description:
          "Birthplaces of Lord Krishna, featuring numerous temples and cultural sites.",
        imageUrl: "/India/Mathura-and-Vrindavan.jpg",
        imageAlt: "Prem Mandir in Vrindavan, India",
        package: {
          title: "Vrindavan Devotional Journey (3D/2N)",
          price: "₹10,200",
          highlights: [
            "Comfortable transport from Delhi",
            "Visits to major temples and Ghats",
            "Accommodation included",
          ],
        },
      },
    ],
  },
  {
    slug: "usa",
    countryName: "USA",
    featuredPlace: {
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
        package: {
          title: "Canyon Rim Trail Explorer (2D/1N)",
          price: "$450",
          highlights: [
            "South Rim viewpoint access",
            "1 night lodging near park entrance",
            "Guided sunset viewing tour",
          ],
        },
      },
      {
        name: "New York Central Park",
        description: "Green oasis amid Manhattan’s skyline and energy.",
        imageUrl: "/USA/central-park-autumn.png",
        imageAlt: "Central Park with city skyline in the background",
        package: {
          title: "NYC Park & Museum Day (1 Day)",
          price: "$150",
          highlights: [
            "Central Park bike rental",
            "Metropolitan Museum of Art entry",
            "Lunch included",
          ],
        },
      },
      {
        name: "Golden Gate Bridge",
        description:
          "Striking suspension bridge spanning the Golden Gate strait.",
        imageUrl: "/USA/golden-gate-bridge.png",
        imageAlt: "Golden Gate Bridge with fog in San Francisco",
        package: {
          title: "San Francisco City Highlights (3D/2N)",
          price: "$980",
          highlights: [
            "Hotel stay in Fisherman's Wharf",
            "Bay cruise tour",
            "Muir Woods and Sausalito trip",
          ],
        },
      },
      {
        name: "Yosemite Valley",
        description: "Granite cliffs, waterfalls, and ancient sequoias.",
        imageUrl: "/USA/yosemite-valley.png",
        imageAlt: "Yosemite Valley with El Capitan and Half Dome",
        package: {
          title: "Yosemite Falls Hike (3D/2N)",
          price: "$620",
          highlights: [
            "Valley lodging or camping included",
            "Guided hike to Yosemite Falls",
            "Wildlife spotting experience",
          ],
        },
      },
      {
        name: "Los Angeles Skyline",
        description: "The bustling metropolis known for Hollywood and beaches.",
        imageUrl: "/USA/los-angeles.jpg",
        imageAlt: "Los Angeles downtown skyline at sunset",
        package: {
          title: "Hollywood & Beaches Tour (4D/3N)",
          price: "$1,150",
          highlights: [
            "Beverly Hills and Hollywood Boulevard tour",
            "Santa Monica Pier visit",
            "3 nights hotel accommodation",
          ],
        },
      },
      {
        name: "Orlando Theme Parks",
        description:
          "The world's theme park capital, perfect for family fun.",
        imageUrl: "/USA/orlando.jpg",
        imageAlt: "Downtown Orlando illuminated at night",
        package: {
          title: "Orlando Magic Pass (5D/4N)",
          price: "$1,800",
          highlights: [
            "Theme park entry for 3 days",
            "Family resort stay",
            "Airport transfers",
          ],
        },
      },
    ],
  },
  {
    slug: "france",
    countryName: "France",
    featuredPlace: {
      description: "Paris’s iron lattice icon and sweeping city panoramas.",
      imageUrl: "/France/eiffel-tower.png",
      imageAlt: "Eiffel Tower with blue sky in Paris, France",
    },
    places: [
      {
        name: "Eiffel Tower",
        description: "Unmistakable Paris landmark with spectacular views.",
        imageUrl: "/France/eiffel-tower.png",
        package: {
          title: "Eiffel Summit Pass (1 Day)",
          price: "€80",
          highlights: [
            "Skip-the-line ticket to the summit",
            "Champagne bar access",
            "Exclusive photo opportunity",
          ],
        },
        imageAlt: "Eiffel Tower from the Champ de Mars",
      },
      {
        name: "Mont Saint-Michel",
        description: "Island abbey rising from tidal sands in Normandy.",
        imageUrl: "/France/mont-saint-michel.png",
        package: {
          title: "Normandy Abbey Tour (2D/1N)",
          price: "€550",
          highlights: [
            "Return transport from Paris",
            "Entry to Abbey church",
            "Overnight stay in nearby village",
          ],
        },
        imageAlt: "Mont Saint-Michel at high tide",
      },
      {
        name: "Louvre Museum",
        description: "World’s largest art museum with glass pyramid.",
        imageUrl: "/France/louvre-museum.png",
        package: {
          title: "Louvre & Mona Lisa Guided Tour (1 Day)",
          price: "€120",
          highlights: [
            "Skip-the-line museum entry",
            "2-hour expert guided tour",
            "Access to temporary exhibitions",
          ],
        },
        imageAlt: "Louvre Pyramid courtyard in Paris",
      },
      {
        name: "Versailles Palace",
        description:
          "Former royal residence famous for its Hall of Mirrors and vast gardens.",
        imageUrl: "/France/versailles.jpg",
        package: {
          title: "Palace of Versailles Day Trip",
          price: "€180",
          highlights: [
            "Train ticket from Paris",
            "Full access to palace and gardens",
            "Fountain show viewing (seasonal)",
          ],
        },
        imageAlt: "The Palace of Versailles courtyard",
      },
    ],
  },
  {
    slug: "japan",
    countryName: "Japan",
    featuredPlace: {
      description: "Pathways of vermilion torii gates in Kyoto’s hills.",
      imageUrl: "/Japan/fushimi-inari.png",
      imageAlt: "Torii gates at Fushimi Inari Shrine in Kyoto, Japan",
    },
    places: [
      {
        name: "Fushimi Inari Taisha",
        description: "Thousands of torii gates forming vivid trails.",
        imageUrl: "/Japan/fushimi-inari.png",
        package: {
          title: "Kyoto Shrine Tour (1 Day)",
          price: "¥18,000",
          highlights: [
            "Guided hike through the torii gates",
            "Visit to Kiyomizu-dera temple",
            "Traditional lunch box included",
          ],
        },
        imageAlt: "Vermilion torii gates in Kyoto",
      },
      {
        name: "Tokyo Skytree",
        description:
          "Sky-high views over the world’s largest metropolis.",
        imageUrl: "/Japan/tokyo-skytree-night.png",
        package: {
          title: "Tokyo Skytree Observation Deck (1 Day)",
          price: "¥8,500",
          highlights: [
            "Tembo Deck and Tembo Galleria access",
            "Priority admission lane",
            "Gift shop discount",
          ],
        },
        imageAlt: "Tokyo Skytree tower and skyline",
      },
      {
        name: "Mount Fuji",
        description:
          "Japan's sacred and tallest mountain, an iconic symbol.",
        imageUrl: "/Japan/Mount Fuji.jpg",
        package: {
          title: "Fuji Day Trip from Tokyo",
          price: "¥32,000",
          highlights: [
            "Round trip bus transport",
            "Visit to Lake Kawaguchiko",
            "Lunch with Mt. Fuji views",
          ],
        },
        imageAlt: "Mount Fuji with traditional pagoda in the foreground",
      },
    ],
  },
  {
    slug: "australia",
    countryName: "Australia",
    featuredPlace: {
      description: "Harbourside icon with sail-like shells and culture.",
      imageUrl: "/Australia/sydney-opera-house.png",
      imageAlt: "Sydney Opera House by the harbour",
    },
    places: [
      {
        name: "Sydney Opera House",
        description:
          "Architectural marvel and premier performance venue.",
        imageUrl: "/Australia/sydney-opera-house.png",
        package: {
          title: "Opera House Guided Tour (2 Hours)",
          price: "A$85",
          highlights: [
            "Backstage access (when available)",
            "History and architecture guide",
            "Harbour views",
          ],
        },
        imageAlt: "Opera House with Sydney Harbour Bridge",
      },
      {
        name: "Great Barrier Reef",
        description: "Colorful corals teeming with marine life.",
        imageUrl: "/Australia/great-barrier-reef.png",
        package: {
          title: "Cairns Dive & Snorkel (1 Day)",
          price: "A$250",
          highlights: [
            "Boat trip from Cairns",
            "All equipment provided",
            "Certified dive instruction",
          ],
        },
        imageAlt: "Coral reef underwater scene",
      },
      {
        name: "Uluru",
        description:
          "Monolithic sandstone rock sacred to Anangu people.",
        imageUrl: "/Australia/uluru.png",
        package: {
          title: "Uluru Sunrise Base Walk (3 Days)",
          price: "A$900",
          highlights: [
            "National park entry pass",
            "Sunset viewing platform access",
            "Guided Aboriginal culture tour",
          ],
        },
        imageAlt: "Uluru at dusk in Central Australia",
      },
    ],
  },
  {
    slug: "italy",
    countryName: "Italy",
    featuredPlace: {
      description: "Ancient Roman amphitheatre and historic symbol.",
      imageUrl: "/Italy/colosseum-rome.png",
      imageAlt: "Colosseum exterior in Rome, Italy",
    },
    places: [
      {
        name: "Colosseum",
        description: "Icon of Imperial Rome and engineering prowess.",
        imageUrl: "/Italy/colosseum-rome.png",
        package: {
          title: "Gladiator's Gate Access (2 Hours)",
          price: "€75",
          highlights: [
            "Skip-the-line entry",
            "Access to the Arena floor",
            "Roman Forum and Palatine Hill access",
          ],
        },
        imageAlt: "Colosseum arches in Rome",
      },
      {
        name: "Rialto Bridge",
        description:
          "One of the four bridges spanning the Grand Canal in Venice.",
        imageUrl: "/Italy/ponte.jpg",
        package: {
          title: "Grand Canal Photo Walk (3 Hours)",
          price: "€60",
          highlights: [
            "Led by professional photographer",
            "Best viewpoints of Rialto Bridge",
            "Small group tour",
          ],
        },
        imageAlt: "Rialto Bridge over the Grand Canal, Venice",
      },
    ],
  },
  {
    slug: "uk",
    countryName: "UK",
    featuredPlace: {
      description: "Victorian bascule bridge over the Thames.",
      imageUrl: "/UK/tower-bridge-london.jpg",
      imageAlt: "Tower Bridge spanning the Thames in London, UK",
    },
    places: [
      {
        name: "Tower Bridge",
        description: "Gothic Revival towers and river views.",
        imageUrl: "/UK/tower-bridge-london.jpg",
        package: {
          title: "Tower Bridge Exhibition (1 Day)",
          price: "£25",
          highlights: [
            "Access to Victorian Engine Rooms",
            "Walk across the glass walkway",
            "Digital guide included",
          ],
        },
        imageAlt: "Tower Bridge close-up in London",
      },
      {
        name: "Westminster Abbey",
        description: "Gothic abbey church, burial site of monarchs.",
        imageUrl: "/UK/westminster-abbey-london.jpg",
        package: {
          title: "Westminster Abbey Entry",
          price: "£30",
          highlights: [
            "Entry to the Coronation Church",
            "Media guide included",
            "Explore the Poets' Corner",
          ],
        },
        imageAlt: "Westminster Abbey at dusk in London",
      },
    ],
  },
  {
    slug: "russia",
    countryName: "Russia",
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
        package: {
          title: "Moscow Red Square Access",
          price: "₽1,500",
          highlights: [
            "Cathedral entry ticket",
            "Kremlin wall viewing access",
            "GUM shopping experience",
          ],
        },
        imageAlt: "St. Basil's Cathedral in Moscow",
      },
      {
        name: "Saint Petersburg Canals",
        description: "City often called the 'Venice of the North'.",
        imageUrl: "/Russia/saint-petersburg.jpg",
        package: {
          title: "St. Petersburg Night Canal Cruise",
          price: "₽1,800",
          highlights: [
            "Evening boat tour",
            "View drawbridges opening",
            "Complimentary champagne",
          ],
        },
        imageAlt: "St. Petersburg canal at night",
      },
    ],
  },
  {
    slug: "spain",
    countryName: "Spain",
    featuredPlace: {
      description:
        "Gaudi's unfinished basilica, a masterpiece of Catalan Modernism.",
      imageUrl: "/Spain/sagrada-familia.jpg",
      imageAlt: "Sagrada Familia Basilica in Barcelona, Spain",
    },
    places: [
      {
        name: "Sagrada Familia",
        description: "The iconic, towering basilica in Barcelona.",
        imageUrl: "/Spain/sagrada-familia.jpg",
        package: {
          title: "Fast-Track Entry + Towers Access",
          price: "€45",
          highlights: [
            "Skip-the-line ticket",
            "Access to Passion Facade towers",
            "Guided audio tour",
          ],
        },
        imageAlt: "Sagrada Familia exterior",
      },
      {
        name: "Alhambra Palace",
        description:
          "Moorish palace and fortress complex in Granada.",
        imageUrl: "/Spain/alhambra-granada.jpg",
        package: {
          title: "Alhambra Palace & Gardens Guided Tour",
          price: "€65",
          highlights: [
            "Access to Nasrid Palaces",
            "Generalife Gardens entry",
            "History expert guide",
          ],
        },
        imageAlt: "Alhambra Palace overlooking Granada",
      },
    ],
  },
  {
    slug: "singapore",
    countryName: "Singapore",
    featuredPlace: {
      description: "SkyPark-topped hotel shaping the city skyline.",
      imageUrl: "/Singapore/MarinabaySand.jpg",
      imageAlt: "Marina Bay Sands and skyline in Singapore",
    },
    places: [
      {
        name: "Marina Bay Sands",
        description: "Skyline-defining hotel and observation deck.",
        imageUrl: "/Singapore/MarinabaySand.jpg",
        package: {
          title: "SkyPark Observation Deck",
          price: "S$32",
          highlights: [
            "Access to the viewing platform",
            "Photo booth ticket",
          ],
        },
        imageAlt: "Marina Bay Sands in evening lights",
      },
      {
        name: "Sentosa Island",
        description: "Resorts, beaches, and family attractions.",
        imageUrl: "/Singapore/Sentosa-Island.jpg",
        package: {
          title: "Sentosa Fun Pass",
          price: "S$70",
          highlights: [
            "Access to 5 major attractions",
            "Island transport pass",
          ],
        },
        imageAlt: "Sentosa beach and palm trees",
      },
    ],
  },
  {
    slug: "thailand",
    countryName: "Thailand",
    featuredPlace: {
      description: "Ornate royal complex at Bangkok’s heart.",
      imageUrl: "/Thailand/grand-palace.jpg",
      imageAlt: "Grand Palace buildings in Bangkok, Thailand",
    },
    places: [
      {
        name: "Grand Palace",
        description: "Opulent spires, murals, and sacred sites.",
        imageUrl: "/Thailand/grand-palace.jpg",
        package: {
          title: "Grand Palace & Wat Pho Tour",
          price: "฿1,500",
          highlights: [
            "Entry to Grand Palace",
            "Visit to Reclining Buddha (Wat Pho)",
            "Private guide",
          ],
        },
        imageAlt: "Grand Palace complex in Bangkok",
      },
      {
        name: "Phi Phi Islands",
        description: "Sheer limestone cliffs and turquoise lagoons.",
        imageUrl: "/Thailand/Phi-Phi.jpg",
        package: {
          title: "Speedboat Day Trip to Phi Phi",
          price: "฿3,200",
          highlights: [
            "Return speedboat transfer",
            "Snorkeling gear included",
            "Lunch at Maya Bay",
          ],
        },
        imageAlt: "Phi Phi islands and bay",
      },
    ],
  },
  {
    slug: "uae",
    countryName: "UAE",
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
        package: {
          title: "Burj Khalifa At The Top Access",
          price: "AED 180",
          highlights: [
            "Skip-the-line ticket to floors 124 & 125",
            "Non-peak hours entry",
          ],
        },
        imageAlt: "Burj Khalifa and Dubai fountains",
      },
      {
        name: "Palm Jumeirah",
        description: "Palm-shaped island lined with resorts.",
        imageUrl: "/UAE/PalmJumeirah.jpg",
        package: {
          title: "Palm Jumeirah Helicopter Tour (20 Mins)",
          price: "AED 750",
          highlights: [
            "Aerial views of Dubai Marina and Palm Jumeirah",
            "Professional pilot commentary",
          ],
        },
        imageAlt: "Palm Jumeirah aerial view",
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
  return COUNTRY_MAP[slug.toLowerCase()];
}

