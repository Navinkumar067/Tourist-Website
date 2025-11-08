import { getCountryBySlug } from "@/lib/destinations-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import SiteNavbar from "@/components/site-navbar";
import SiteFooter from "@/components/site-footer";
import { Star } from "lucide-react"; // You already added this, great!

type Props = {
  params: Promise<{ country: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const country = getCountryBySlug(resolvedParams.country);

  if (!country) {
    return { title: "Destination Not Found" };
  }

  return {
    title: `${country.countryName} – Destinations | Travelio`,
    description: `Explore top destinations and attractions in ${country.countryName} with Travelio.`,
  };
}

export default async function CountryDestinationsPage({ params }: Props) {
  const resolvedParams = await params;
  const country = getCountryBySlug(resolvedParams.country);

  if (!country) {
    notFound();
  }


  // Mock data for reviews
  const mockReviews = [
    // France
    {
      id: "r1",
      author: "Jane D.",
      rating: 5,
      comment:
        "Absolutely breathtaking! The Eiffel Tower view was worth the entire trip.",
      placeName: "Eiffel Tower",
    },
    {
      id: "r2",
      author: "Mark P.",
      rating: 4,
      comment: "A must-see for art lovers. It's huge, so plan your day well.",
      placeName: "Louvre Museum",
    },
    {
      id: "r5",
      author: "Sarah L.",
      rating: 5,
      comment:
        "Incredible. The sheer scale and history are awe-inspiring. Go early!",
      placeName: "Eiffel Tower",
    },
    // India
    {
      id: "r6",
      author: "Raj K.",
      rating: 5,
      comment:
        "Truly a wonder of the world. No picture does it justice. Unforgettable.",
      placeName: "Taj Mahal",
    },
    {
      id: "r7",
      author: "Priya S.",
      rating: 4,
      comment:
        "A beautiful, long beach. Perfect for an evening walk. Very lively.",
      placeName: "Chennai Marina Beach",
    },
    // USA
    {
      id: "r8",
      author: "Tom H.",
      rating: 5,
      comment:
        "The scale is unimaginable. We took a helicopter tour and it was worth every penny.",
      placeName: "Grand Canyon",
    },
    {
      id: "r9",
      author: "Maria G.",
      rating: 4,
      comment:
        "A lovely escape from the city buzz. We rented a boat and had a picnic.",
      placeName: "New York Central Park",
    },
    // Japan
    {
      id: "r10",
      author: "Kenji W.",
      rating: 5,
      comment:
        "Walking through the thousands of red gates was a spiritual experience.",
      placeName: "Fushimi Inari Taisha",
    },
    {
      id: "r11",
      author: "Lisa B.",
      rating: 5,
      comment:
        "The views from the top are insane. You can see the entire city sprawl.",
      placeName: "Tokyo Skytree",
    },
    // Australia
    {
      id: "r12",
      author: "David L.",
      rating: 5,
      comment:
        "Iconic for a reason. We saw a show here and the acoustics were perfect.",
      placeName: "Sydney Opera House",
    },
    {
      id: "r13",
      author: "Megan F.",
      rating: 4,
      comment:
        "Snorkeling was amazing, but be sure to use reef-safe sunscreen!",
      placeName: "Great Barrier Reef",
    },
    // Italy
    {
      id: "r14",
      author: "Luca M.",
      rating: 5,
      comment:
        "Stepping inside the Colosseum is like traveling back in time. A must-do in Rome.",
      placeName: "Colosseum",
    },
    {
      id: "r15",
      author: "Sophie V.",
      rating: 4,
      comment: "Very crowded but so beautiful. The heart of Venice!",
      placeName: "Rialto Bridge",
    },
    // UK
    {
      id: "r16",
      author: "Arthur E.",
      rating: 4,
      comment:
        "A marvel of engineering. We did the glass floor walk and it was fantastic.",
      placeName: "Tower Bridge",
    },
    {
      id: "r17",
      author: "Helen T.",
      rating: 5,
      comment:
        "So much history in one place. The audio guide was very informative.",
      placeName: "Westminster Abbey",
    },
    // Singapore
    {
      id: "r18",
      author: "Chen L.",
      rating: 5,
      comment:
        "The infinity pool at the top is incredible. A true icon of modern Singapore.",
      placeName: "Marina Bay Sands",
    },
    {
      id: "r19",
      author: "Aisha R.",
      rating: 5,
      comment:
        "The Supertree Grove light show at night is pure magic. Don't miss it!",
      placeName: "Gardens by the Bay",
    },
    // Spain
    {
      id: "r20",
      author: "Javier G.",
      rating: 5,
      comment:
        "Gaudi's masterpiece. Unlike any church I've ever seen. Book tickets way in advance.",
      placeName: "Sagrada Familia",
    },
    {
      id: "r21",
      author: "Chloe P.",
      rating: 5,
      comment:
        "The palace and gardens are stunning. I spent a whole day here and could have stayed longer.",
      placeName: "Alhambra Palace",
    },
    // Thailand
    {
      id: "r22",
      author: "Ben W.",
      rating: 5,
      comment:
        "So intricate and beautiful. The level of detail on every building is just amazing.",
      placeName: "Grand Palace",
    },
    {
      id: "r23",
      author: "Anna S.",
      rating: 5,
      comment:
        "The water is crystal clear, just like the pictures. Maya Bay was stunning.",
      placeName: "Phi Phi Islands",
    },
    // Russia
    {
      id: "r24",
      author: "Dmitri P.",
      rating: 5,
      comment:
        "The colorful domes in Red Square are the symbol of Moscow. Even more beautiful in person.",
      placeName: "St. Basil's Cathedral",
    },
    {
      id: "r25",
      author: "Olga V.",
      rating: 4,
      comment: "A beautiful city, even in winter. The canals are so romantic.",
      placeName: "Saint Petersburg Canals",
    },
    // UAE
    {
      id: "r26",
      author: "Mikey J.",
      rating: 5,
      comment:
        "Going to the top of the tallest building in the world... what more is there to say? Epic.",
      placeName: "Burj Khalifa",
    },
    {
      id: "r27",
      author: "Fatima A.",
      rating: 5,
      comment:
        "A peaceful and breathtakingly beautiful place. The architecture is stunning.",
      placeName: "Sheikh Zayed Grand Mosque",
    },
  ];
  // --- END OF MOCK DATA ---

  return (
    <>
      <SiteNavbar />
      <main className="bg-gray-50/70 min-h-screen">
        <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Discover {country.countryName}
            </h1>
            <p className="mt-2 text-gray-600">
              Explore amazing places and experiences across{" "}
              {country.countryName}.
            </p>
          </header>

          {/* Places List */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {country.places.map((place) => (
              <div
                key={place.name}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <Image
                  src={place.imageUrl}
                  alt={place.imageAlt}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {place.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {place.description}
                  </p>

                  <div className="mt-4 border-t border-gray-100 pt-4">
                    <a
                      href={`/booking?destination=${encodeURIComponent(
                        place.name
                      )}`}
                      className="inline-flex w-full items-center justify-center rounded-md bg-[#FBBF24] px-4 py-2.5 text-sm font-semibold text-[#1E40AF] shadow transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24]/70"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --- ADDED REVIEWS SECTION --- */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Reviews for {country.countryName}
            </h2>

            <div className="space-y-8">
              {/* We loop over each place and show reviews for it */}
              {country.places.map((place) => {
                // Filter reviews for the current place
                const placeReviews = mockReviews.filter(
                  (r) => r.placeName === place.name
                );

                // If no reviews, don't show anything for this place
                if (placeReviews.length === 0) {
                  return null;
                }

                // Calculate average rating
                const avgRating =
                  placeReviews.reduce((acc, r) => acc + r.rating, 0) /
                  placeReviews.length;

                return (
                  <div
                    key={place.name}
                    className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {place.name}
                    </h3>

                    {/* Average Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.round(avgRating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {avgRating.toFixed(1)} out of 5 stars
                      </span>
                    </div>

                    {/* Individual Reviews */}
                    <div className="space-y-4">
                      {placeReviews.map((review) => (
                        <div
                          key={review.id}
                          className="border-t border-gray-100 pt-4"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-gray-900">
                              {review.author}
                            </h4>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? "text-yellow-400 fill-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="mt-1 text-sm text-gray-700">
                            {review.comment}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* --- END OF REVIEWS SECTION --- */}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
