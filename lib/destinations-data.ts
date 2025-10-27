export type PlacePackageDetail = {
  title: string;
  price: string;
  highlights: string[];
}

export type Place = {
  name: string
  description: string
  imageUrl: string
  imageAlt: string
  package?: PlacePackageDetail; 
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
      name: "Taj Mahal, Agra",
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
        package: {
          title: "Marina Beach Sunrise Experience (3D/2N)",
          price: "₹8,500",
          highlights: ["3-star Chennai hotel stay", "Guided morning beach tour", "Authentic South Indian dinner"],
        },
      },
      {
        name: "Madurai Meenakshi Temple",
        description: "Dravidian masterpiece with ornate gopurams and rich history.",
        imageUrl: "/India/meenakshi-temple.jpg",
        imageAlt: "Meenakshi Amman Temple gopurams in Madurai, India",
        package: {
          title: "Madurai Temple Pilgrimage (4D/3N)",
          price: "₹12,000",
          highlights: ["4-star accommodation near the temple", "Private car for local travel", "Daily Puja and cultural guide"],
        },
      },
      {
        name: "Thanjavur Brihadeeswara Temple",
        description: "Chola-era temple famed for its giant vimana and sculptures.",
        imageUrl: "/India/brihadeeswara-temple.png",
        imageAlt: "Brihadeeswara Temple in Thanjavur, India",
        package: {
          title: "Chola Dynasty Heritage Tour (2D/1N)",
          price: "₹6,500",
          highlights: ["Premium guesthouse stay", "Guided temple architecture workshop", "Traditional Thanjavur art visit"],
        },
      },
      {
        name: "Amritsar Golden Temple",
        description: "The holiest gurdwara of Sikhism, a beautiful golden structure.",
        imageUrl: "/India/harmandir-sahib.jpg",
        imageAlt: "Harmandir Sahib (Golden Temple) in Amritsar, India",
        package: {
          title: "Amritsar Spiritual Retreat (3D/2N)",
          price: "₹9,800",
          highlights: ["Hotel near the temple complex", "Wagah Border Ceremony transport", "Free community kitchen experience"],
        },
      },
      {
        name: "Alleppey Backwaters",
        description: "Houseboat cruises along Kerala's tranquil network of canals and lagoons.",
        imageUrl: "/India/Alleppey.jpg",
        imageAlt: "Houseboat on the backwaters of Alleppey, India",
        package: {
          title: "Kerala Houseboat Cruise (2D/1N)",
          price: "₹15,500",
          highlights: ["Luxury houseboat stay", "All meals included (local seafood)", "Private deck view and guided village tour"],
        },
      },
      {
        name: "New Delhi India Gate",
        description: "War memorial often compared to the Arc de Triomphe.",
        imageUrl: "/India/Delhi.jpg",
        imageAlt: "India Gate in New Delhi at dusk",
        package: {
          title: "Delhi Historical Walk (1 Day)",
          price: "₹3,500",
          highlights: ["Guided tour of Old and New Delhi", "India Gate and Red Fort entry", "Lunch at a traditional Dhabha"],
        },
      },
      {
        name: "Mathura and Vrindavan",
        description: "Birthplaces of Lord Krishna, featuring numerous temples and cultural sites.",
        imageUrl: "/India/Mathura-and-Vrindavan.jpg",
        imageAlt: "Prem Mandir in Vrindavan, India",
        package: {
          title: "Vrindavan Devotional Journey (3D/2N)",
          price: "₹10,200",
          highlights: ["Comfortable transport from Delhi", "Visits to major temples and Ghats", "Accommodation included"],
        },
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
        package: {
          title: "Canyon Rim Trail Explorer (2D/1N)",
          price: "$450",
          highlights: ["South Rim viewpoint access", "1 night lodging near park entrance", "Guided sunset viewing tour"],
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
          highlights: ["Central Park bike rental", "Metropolitan Museum of Art entry", "Lunch included"],
        },
      },
      {
        name: "Golden Gate Bridge",
        description: "Striking suspension bridge spanning the Golden Gate strait.",
        imageUrl: "/USA/golden-gate-bridge.png",
        imageAlt: "Golden Gate Bridge with fog in San Francisco",
        package: {
          title: "San Francisco City Highlights (3D/2N)",
          price: "$980",
          highlights: ["Hotel stay in Fisherman's Wharf", "Bay cruise tour", "Muir Woods and Sausalito trip"],
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
          highlights: ["Valley lodging or camping included", "Guided hike to Yosemite Falls", "Wildlife spotting experience"],
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
          highlights: ["Beverly Hills and Hollywood Boulevard tour", "Santa Monica Pier visit", "3 nights hotel accommodation"],
        },
      },
      {
        name: "Orlando Theme Parks",
        description: "The world's theme park capital, perfect for family fun.",
        imageUrl: "/USA/orlando.jpg",
        imageAlt: "Downtown Orlando illuminated at night",
        package: {
          title: "Orlando Magic Pass (5D/4N)",
          price: "$1,800",
          highlights: ["Theme park entry for 3 days", "Family resort stay", "Airport transfers"],
        },
      },
      {
        name: "Washington D.C. Capitol",
        description: "The iconic center of the US government and historical monuments.",
        imageUrl: "/USA/washington.jpg",
        imageAlt: "US Capitol Building in Washington D.C. at night",
        package: {
          title: "DC Monuments Tour (2D/1N)",
          price: "$380",
          highlights: ["Capitol Hill and White House visit", "Smithsonian museums access", "City walking tour"],
        },
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
        package: {
          title: "Eiffel Summit Pass (1 Day)",
          price: "€80",
          highlights: ["Skip-the-line ticket to the summit", "Champagne bar access", "Exclusive photo opportunity"],
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
          highlights: ["Return transport from Paris", "Entry to Abbey church", "Overnight stay in nearby village"],
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
          highlights: ["Skip-the-line museum entry", "2-hour expert guided tour", "Access to temporary exhibitions"],
        },
        imageAlt: "Louvre Pyramid courtyard in Paris",
      },
      {
        name: "Versailles Palace",
        description: "Former royal residence famous for its Hall of Mirrors and vast gardens.",
        imageUrl: "/France/versailles.jpg",
        package: {
          title: "Palace of Versailles Day Trip",
          price: "€180",
          highlights: ["Train ticket from Paris", "Full access to palace and gardens", "Fountain show viewing (seasonal)"],
        },
        imageAlt: "The Palace of Versailles courtyard",
      },
      {
        name: "Verdon Gorge",
        description: "A river canyon known for its stunning turquoise water and kayaking.",
        imageUrl: "/France/verdon_gorge.jpg",
        package: {
          title: "Provence Canyon & Kayak (3D/2N)",
          price: "€750",
          highlights: ["Hotel stay in nearby Moustiers", "Full-day kayak rental", "Hiking trail access"],
        },
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
        package: {
          title: "Kyoto Shrine Tour (1 Day)",
          price: "¥18,000",
          highlights: ["Guided hike through the torii gates", "Visit to Kiyomizu-dera temple", "Traditional lunch box included"],
        },
        imageAlt: "Vermilion torii gates in Kyoto",
      },
      {
        name: "Arashiyama Bamboo Grove",
        description: "Whispering bamboo stalks and serene paths.",
        imageUrl: "/Japan/arashiyama-bamboo-grove.png",
        package: {
          title: "Arashiyama Nature Retreat (1 Day)",
          price: "¥15,000",
          highlights: ["Sagano Scenic Railway ticket", "Tenryu-ji Temple entry", "Traditional boat ride on the Hozugawa River"],
        },
        imageAlt: "Arashiyama bamboo forest path",
      },
      {
        name: "Tokyo Skytree",
        description: "Sky-high views over the world’s largest metropolis.",
        imageUrl: "/Japan/tokyo-skytree-night.png",
        package: {
          title: "Tokyo Skytree Observation Deck (1 Day)",
          price: "¥8,500",
          highlights: ["Tembo Deck and Tembo Galleria access", "Priority admission lane", "Gift shop discount"],
        },
        imageAlt: "Tokyo Skytree tower and skyline",
      },
      {
        name: "Mount Fuji",
        description: "Japan's sacred and tallest mountain, an iconic symbol.",
        imageUrl: "/Japan/Mount Fuji.jpg",
        package: {
          title: "Fuji Day Trip from Tokyo",
          price: "¥32,000",
          highlights: ["Round trip bus transport", "Visit to Lake Kawaguchiko", "Lunch with Mt. Fuji views"],
        },
        imageAlt: "Mount Fuji with traditional pagoda in the foreground",
      },
      {
        name: "Historic Nara",
        description: "Home to wild deer and great Buddhist temples like Todai-ji.",
        imageUrl: "/Japan/Historic Nara.jpg",
        package: {
          title: "Nara Deer Park & Temples (1 Day)",
          price: "¥11,000",
          highlights: ["Transport from Osaka/Kyoto", "Todai-ji Temple entry", "Free deer feeding crackers"],
        },
        imageAlt: "Tōdai-ji Temple reflected in a pond in Nara, Japan",
      },
      {
        name: "Sapporo, Hokkaido",
        description: "Known for its beer, ramen, and the annual snow festival.",
        imageUrl: "/Japan/Sapporo, Hokkaido.jpg",
        package: {
          title: "Hokkaido Culinary Tour (5D/4N)",
          price: "¥95,000",
          highlights: ["4 nights boutique accommodation", "Sapporo Beer Garden visit", "Otaru Canal boat trip"],
        },
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
        package: {
          title: "Opera House Guided Tour (2 Hours)",
          price: "A$85",
          highlights: ["Backstage access (when available)", "History and architecture guide", "Harbour views"],
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
          highlights: ["Boat trip from Cairns", "All equipment provided", "Certified dive instruction"],
        },
        imageAlt: "Coral reef underwater scene",
      },
      {
        name: "Uluru",
        description: "Monolithic sandstone rock sacred to Anangu people.",
        imageUrl: "/Australia/uluru.png",
        package: {
          title: "Uluru Sunrise Base Walk (3 Days)",
          price: "A$900",
          highlights: ["National park entry pass", "Sunset viewing platform access", "Guided Aboriginal culture tour"],
        },
        imageAlt: "Uluru at dusk in Central Australia",
      },
      {
        name: "Sydney Harbour Bridge",
        description: "Massive steel arch bridge over Sydney Harbour.",
        imageUrl: "/Australia/sydney-harbor.jpg",
        package: {
          title: "Sydney Bridge Climb Experience",
          price: "A$350",
          highlights: ["Safety equipment included", "Summit photo package", "3.5 hour guided climb"],
        },
        imageAlt: "Sydney Harbour Bridge at sunset",
      },
      {
        name: "Bondi Beach",
        description: "One of Australia's most famous beaches, popular for surfing.",
        imageUrl: "/Australia/bondi-beach.jpg",
        package: {
          title: "Bondi Surf Lesson (Half Day)",
          price: "A$95",
          highlights: ["2-hour beginner surf lesson", "Wetsuit and board rental", "Professional instruction"],
        },
        imageAlt: "Bondi Beach with clear blue water and crowds",
      },
      {
        name: "Kakadu National Park",
        description: "Immense, biodiverse national park known for waterfalls and aboriginal rock art.",
        imageUrl: "/Australia/kakadu-national-park.jpg",
        package: {
          title: "Kakadu Wilderness Safari (5D/4N)",
          price: "A$1,800",
          highlights: ["All camping gear provided", "Yellow Water Billabong cruise", "Aboriginal rock art sites visit"],
        },
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
        package: {
          title: "Gladiator's Gate Access (2 Hours)",
          price: "€75",
          highlights: ["Skip-the-line entry", "Access to the Arena floor", "Roman Forum and Palatine Hill access"],
        },
        imageAlt: "Colosseum arches in Rome",
      },
      {
        name: "Venice Canals",
        description: "Gondolas, bridges, and romantic waterways.",
        imageUrl: "/Italy/venice-canals.png",
        package: {
          title: "Romantic Gondola Serenade (45 Mins)",
          price: "€120",
          highlights: ["Private gondola ride", "Singing gondolier", "Route through hidden canals"],
        },
        imageAlt: "Venetian canal with gondola",
      },
      {
        name: "Rialto Bridge (Ponte di Rialto)",
        description: "One of the four bridges spanning the Grand Canal in Venice.",
        imageUrl: "/Italy/ponte.jpg",
        package: {
          title: "Grand Canal Photo Walk (3 Hours)",
          price: "€60",
          highlights: ["Led by professional photographer", "Best viewpoints of Rialto Bridge", "Small group tour"],
        },
        imageAlt: "Rialto Bridge over the Grand Canal, Venice",
      },
      {
        name: "Grand Canal, Venice",
        description: "The major waterway winding through Venice.",
        imageUrl: "/Italy/canal_grande.jpg",
        package: {
          title: "Vaporetto Water Bus Pass (24 Hours)",
          price: "€25",
          highlights: ["Unlimited travel on water buses", "Quickest way to see all canals", "Includes island hopping"],
        },
        imageAlt: "Kayaks on the Grand Canal, Venice",
      },
      {
        name: "Duomo di Milano",
        description: "The magnificent cathedral church of Milan.",
        imageUrl: "/Italy/basilica-scaled.jpeg",
        package: {
          title: "Duomo Rooftop Experience",
          price: "€45",
          highlights: ["Fast-track entry to cathedral", "Rooftop access via elevator", "Panoramic Milan views"],
        },
        imageAlt: "Duomo di Milano exterior",
      },
      {
        name: "Amalfi Coast",
        description: "Cliffside villages and crystalline Mediterranean.",
        imageUrl: "/placeholder.svg?height=220&width=360",
        package: {
          title: "Amalfi Coast Scenic Drive (3D/2N)",
          price: "€890",
          highlights: ["Luxury accommodation in Positano", "Private driver for the coastal road", "Daily Italian cooking class"],
        },
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
        package: {
          title: "Tower Bridge Exhibition (1 Day)",
          price: "£25",
          highlights: ["Access to Victorian Engine Rooms", "Walk across the high-level glass walkway", "Digital guide included"],
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
          highlights: ["Entry to the Coronation Church", "Media guide included", "Explore the Poets' Corner"],
        },
        imageAlt: "Westminster Abbey at dusk in London",
      },
      {
        name: "Big Ben and Houses of Parliament",
        description: "Iconic clock tower and the seat of the UK Parliament.",
        imageUrl: "/UK/big-ben-london.jpg",
        package: {
          title: "London Icons Photo Tour (Half Day)",
          price: "£65",
          highlights: ["Guided tour focusing on Big Ben and Parliament Square", "Professional photo tips"],
        },
        imageAlt: "Big Ben tower at night in London",
      },
      {
        name: "The National Gallery",
        description: "Art museum in Trafalgar Square.",
        imageUrl: "/UK/national-gallery-london.jpg",
        package: {
          title: "Masterpieces Highlights Tour (2 Hours)",
          price: "£40",
          highlights: ["Exclusive look at famous paintings", "Art history expert guide", "Gallery gift voucher"],
        },
        imageAlt: "The National Gallery exterior, London",
      },
      {
        name: "Natural History Museum",
        description: "Home to life and earth science specimens.",
        imageUrl: "/UK/national-history-museum-london.jpg",
        package: {
          title: "Behind-the-Scenes Access",
          price: "£50",
          highlights: ["Private view of the Darwin Centre", "Explore specimen storage rooms", "Guided by a museum curator"],
        },
        imageAlt: "Natural History Museum exterior, London",
      },
      {
        name: "St. James's Park",
        description: "One of the Royal Parks in London.",
        imageUrl: "/UK/st-jamess-park-london.jpg",
        package: {
          title: "Royal Parks Bike Tour (3 Hours)",
          price: "£55",
          highlights: ["Bike rental included", "Ride through three Royal Parks", "Stop for traditional refreshments"],
        },
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
        package: {
          title: "Moscow Red Square Access",
          price: "₽1,500",
          highlights: ["Cathedral entry ticket", "Kremlin wall viewing access", "GUM shopping experience"],
        },
        imageAlt: "St. Basil's Cathedral in Moscow",
      },
      {
        name: "Kazan Kul Sharif Mosque",
        description: "Restored mosque in Kazan Kremlin, a symbol of Tatar heritage.",
        imageUrl: "/Russia/kazan.jpg",
        package: {
          title: "Kazan Kremlin Tour (Half Day)",
          price: "₽2,800",
          highlights: ["Guided tour of Kul Sharif Mosque", "Kremlin history lesson", "Kazan panoramic viewpoint"],
        },
        imageAlt: "Kul Sharif Mosque in Kazan, Russia",
      },
      {
        name: "Kizhi Island",
        description: "Historic site with unique wooden architecture including churches.",
        imageUrl: "/Russia/kizhi-island.jpg",
        package: {
          title: "Kizhi Wooden Architecture Day Trip",
          price: "₽4,200",
          highlights: ["Hydrofoil transport to the island", "Entry to the open-air museum", "Lunch on the island"],
        },
        imageAlt: "Wooden churches on Kizhi Island model",
      },
      {
        name: "Saint Petersburg Canals",
        description: "City often called the 'Venice of the North'.",
        imageUrl: "/Russia/saint-petersburg.jpg",
        package: {
          title: "St. Petersburg Night Canal Cruise",
          price: "₽1,800",
          highlights: ["Evening boat tour", "View drawbridges opening", "Complimentary champagne"],
        },
        imageAlt: "St. Petersburg canal at night",
      },
      {
        name: "Valaam Archipelago",
        description: "Monastery on an island in Lake Ladoga.",
        imageUrl: "/Russia/valaam.jpg",
        package: {
          title: "Lake Ladoga Monastery Excursion (2 Days)",
          price: "₽9,500",
          highlights: ["Boat transfer to Valaam", "Monastery lodging (simple cell)", "Access to scenic hiking paths"],
        },
        imageAlt: "Valaam Island rocky coastline and water",
      },
      {
        name: "Vladivostok Bridges",
        description: "Modern bridges connecting parts of the city over the Golden Horn Bay.",
        imageUrl: "/Russia/vladivostok.jpg",
        package: {
          title: "Vladivostok Viewpoint Tour",
          price: "₽1,200",
          highlights: ["Funicular ride", "Eagle's Nest viewpoint access", "Golden Bridge photo stop"],
        },
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
        package: {
          title: "Fast-Track Entry + Towers Access",
          price: "€45",
          highlights: ["Skip-the-line ticket", "Access to Passion Facade towers", "Guided audio tour"],
        },
        imageAlt: "Sagrada Familia exterior",
      },
      {
        name: "Alhambra Palace",
        description: "Moorish palace and fortress complex in Granada.",
        imageUrl: "/Spain/alhambra-granada.jpg",
        package: {
          title: "Alhambra Palace & Gardens Guided Tour",
          price: "€65",
          highlights: ["Access to Nasrid Palaces", "Generalife Gardens entry", "History expert guide"],
        },
        imageAlt: "Alhambra Palace overlooking Granada",
      },
      {
        name: "Plaza de España, Seville",
        description: "Architectural masterpiece and famous landmark in Seville.",
        imageUrl: "/Spain/plaza-de-espana-seville.jpg",
        package: {
          title: "Seville Architecture Photo Walk (2 Hours)",
          price: "€30",
          highlights: ["Focus on ceramic details and viewpoints", "Professional guide"],
        },
        imageAlt: "Plaza de España with canal in Seville",
      },
      {
        name: "Mosque-Cathedral of Córdoba",
        description: "A unique monument showcasing Islamic and Christian architecture.",
        imageUrl: "/Spain/cordoba-mosque.jpg",
        package: {
          title: "Mosque-Cathedral Skip-the-Line",
          price: "€25",
          highlights: ["Fast access to the landmark", "Morning viewing slot"],
        },
        imageAlt: "Interior of the Mosque-Cathedral of Córdoba",
      },
      {
        name: "City of Arts and Sciences",
        description: "Futuristic architectural complex in Valencia.",
        imageUrl: "/Spain/city-of-arts-valencia.jpg",
        package: {
          title: "Oceanogràfic & Science Museum Combo Ticket",
          price: "€55",
          highlights: ["Entry to Europe's largest aquarium", "Access to interactive science center", "Full-day pass"],
        },
        imageAlt: "Hemisfèric building in the City of Arts and Sciences, Valencia",
      },
      {
        name: "Nerja (Costa del Sol)",
        description: "Coastal town famous for its caves and Balcón de Europa lookout.",
        imageUrl: "/Spain/nerja-costa-del-sol.jpg",
        package: {
          title: "Nerja Caves & Beach Relaxation (1 Day)",
          price: "€40",
          highlights: ["Entry to the Caves of Nerja", "Transport to Burriana Beach", "Beach equipment rental included"],
        },
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
          highlights: ["Access to the viewing platform", "Photo booth ticket"],
        },
        imageAlt: "Marina Bay Sands in evening lights",
      },
      {
        name: "Gardens by the Bay",
        description: "Futuristic Supertrees and biodomes.",
        imageUrl: "/Singapore/Gardens-by-the-Bay.jpg",
        package: {
          title: "Flower Dome & Cloud Forest Access",
          price: "S$50",
          highlights: ["Full access to both conservatories", "Entry to the Supertree Grove"],
        },
        imageAlt: "Supertree Grove at Gardens by the Bay",
      },
      {
        name: "Sentosa Island",
        description: "Resorts, beaches, and family attractions.",
        imageUrl: "/Singapore/Sentosa-Island.jpg",
        package: {
          title: "Sentosa Fun Pass",
          price: "S$70",
          highlights: ["Access to 5 major attractions", "Island transport pass"],
        },
        imageAlt: "Sentosa beach and palm trees",
      },
      {
        name: "Sri Mariamman Temple",
        description: "Singapore's oldest Hindu temple, known for its intricate gopuram.",
        imageUrl: "/Singapore/Sri-Mariamman-Temple.jpg",
        package: {
          title: "Cultural Sightseeing Tour",
          price: "S$45",
          highlights: ["Guided historic district walk", "Entrance fees included"],
        },
        imageAlt: "Sri Mariamman Temple entrance tower",
      },
      {
        name: "Merlion Park",
        description: "Home of Singapore's iconic half-fish, half-lion statue.",
        imageUrl: "/Singapore/Merlion-Park-Singapore.jpg",
        package: {
          title: "City Photo Pass",
          price: "S$25",
          highlights: ["River cruise photo op", "Merlion lookout access"],
        },
        imageAlt: "Merlion statue overlooking Marina Bay",
      },
    ],
  },
  {
    slug: "thailand",
    countryName: "Thailand",
    featuredPlace: {
      name: "Grand Palace",
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
          highlights: ["Entry to Grand Palace", "Visit to Reclining Buddha (Wat Pho)", "Private guide"],
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
          highlights: ["Return speedboat transfer", "Snorkeling gear included", "Lunch at Maya Bay"],
        },
        imageAlt: "Phi Phi islands and bay",
      },
      {
        name: "Chiang Mai Old City",
        description: "Lanna temples and walkable walled quarter.",
        imageUrl: "/Thailand/chiang.jpeg",
        package: {
          title: "Chiang Mai Temple Cycling Tour",
          price: "฿900",
          highlights: ["Bike and helmet rental", "Visit three ancient temples", "Local guide"],
        },
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
          highlights: ["Skip-the-line ticket to floors 124 & 125", "Non-peak hours entry"],
        },
        imageAlt: "Burj Khalifa and Dubai fountains",
      },
      {
        name: "Sheikh Zayed Grand Mosque",
        description: "Glittering white marble domes and columns.",
        imageUrl: "/UAE/Sheikh Zayed Grand Mosque.jpg",
        package: {
          title: "Abu Dhabi Day Trip (From Dubai)",
          price: "AED 350",
          highlights: ["Return transport from Dubai", "Mosque visit and tour", "Ferrari World photo stop"],
        },
        imageAlt: "Sheikh Zayed Grand Mosque in Abu Dhabi",
      },
      {
        name: "Palm Jumeirah",
        description: "Palm-shaped island lined with resorts.",
        imageUrl: "/UAE/PalmJumeirah.jpg",
        package: {
          title: "Palm Jumeirah Helicopter Tour (20 Mins)",
          price: "AED 750",
          highlights: ["Aerial views of Dubai Marina and Palm Jumeirah", "Professional pilot commentary"],
        },
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
