// lib/guides-data.ts

// 1. Define the type for a single guide
export type Guide = {
    slug: string;
    title: string;
    description: string; // Short snippet for the card
    imageUrl: string;
    imageAlt: string;
    author: string;
    date: string;
    content: string; // The full "article" content
  };
  
  // 2. Create the mock data array
  const GUIDES: Guide[] = [
    {
      slug: "guide-to-paris",
      title: "A First-Timer's Guide to Paris",
      description: "Discover the must-see sights, from the Eiffel Tower to the halls of the Louvre.",
      imageUrl: "/France/eiffel-tower.png",
      imageAlt: "The Eiffel Tower in Paris",
      author: "Jane Doe",
      date: "October 28, 2025",
      content: "Paris, the City of Light, is a feast for the senses. Start your journey at the iconic Eiffel Tower... then, lose yourself in the endless corridors of the Louvre Museum, home to the Mona Lisa. Don't forget to wander through the charming streets of Montmartre and enjoy a coffee at a sidewalk cafe."
    },
    {
      slug: "kyoto-temple-tour",
      title: "Exploring the Temples of Kyoto",
      description: "A spiritual journey through Kyoto's most sacred and beautiful historic sites.",
      imageUrl: "/Japan/fushimi-inari.png",
      imageAlt: "Red torii gates at Fushimi Inari shrine in Kyoto",
      author: "Kenji Tanaka",
      date: "October 22, 2025",
      content: "Kyoto is the heart of traditional Japan. No trip is complete without visiting Fushimi Inari Taisha, with its thousands of vermilion torii gates. Afterward, find peace at Arashiyama Bamboo Grove. Each temple, from Kinkaku-ji (the Golden Pavilion) to Kiyomizu-dera, offers a unique glimpse into Japan's rich history."
    },
    {
      slug: "wonders-of-india",
      title: "The Golden Triangle: India's Top Sights",
      description: "An essential itinerary covering Delhi, Agra, and Jaipur.",
      imageUrl: "/India/taj-mahal-agra.png",
      imageAlt: "The Taj Mahal in Agra at sunset",
      author: "Priya Sharma",
      date: "October 15, 2025",
      content: "The 'Golden Triangle' is the perfect introduction to India. Start in Delhi to see the India Gate, then travel to Agra to witness the breathtaking beauty of the Taj Mahal. Finally, explore the 'Pink City' of Jaipur, with its stunning palaces and vibrant markets."
    },
  ];
  
  // 3. Create helper functions to get the data
  const GUIDE_MAP: Record<string, Guide> = Object.fromEntries(
    GUIDES.map((guide) => [guide.slug, guide])
  );
  
  export function getGuides() {
    return GUIDES;
  }
  
  export function getGuideBySlug(slug: string) {
    if (!slug) {
      return undefined;
    }
    return GUIDE_MAP[slug.toLowerCase()];
  }