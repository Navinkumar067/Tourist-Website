import { getCountryBySlug } from "@/lib/destinations-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import SiteNavbar from "@/components/site-navbar"; // Added import
import SiteFooter from "@/components/site-footer"; // Added import

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
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
