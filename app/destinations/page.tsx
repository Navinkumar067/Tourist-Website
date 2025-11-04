import SiteNavbar from "@/components/site-navbar";
import SiteFooter from "@/components/site-footer";
import DestinationCountryCard from "@/components/destination-country-card";
import { getCountries } from "@/lib/destinations-data";
import { SectionHeading } from "@/components/section-heading";

export default function DestinationsIndexPage() {
  const countries = getCountries();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <SiteNavbar />

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-8 text-center">
          <h1 className="text-balance text-3xl font-semibold text-gray-900 sm:text-4xl">
            Explore Destinations
          </h1>
          <p className="mt-2 text-gray-600">
            Discover iconic places around the world and plan your next trip.
          </p>
        </header>

        <section aria-label="Destinations by country">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((country) => (
              <DestinationCountryCard key={country.slug} country={country} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
