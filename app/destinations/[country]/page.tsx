import type { Metadata } from "next";
import SiteNavbar from "@/components/site-navbar";
import SiteFooter from "@/components/site-footer";
import PlaceCard from "@/components/place-card";
import { COUNTRIES, getCountryBySlug } from "@/lib/destinations-data";
import { notFound } from "next/navigation";

type Props = {
  params: { country: string };
};

export function generateStaticParams() {
  return COUNTRIES.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {

  const country = getCountryBySlug(params.country);
  if (!country) return { title: "Destination Not Found" };
  return {
    title: `${country.countryName} – Destinations | Travalio`,
    description: `Tourist places and travel packages in ${country.countryName}.`,
  };
}
export default async function CountryDestinationsPage({ params }: Props) {
 
  const country = getCountryBySlug(params.country);
  if (!country) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
    
      <SiteNavbar />

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-8 text-center">
          <h1 className="text-balance text-3xl font-semibold text-gray-900 sm:text-4xl">
            {country.countryName}
          </h1>
          <p className="mt-2 text-gray-600">
            Explore handpicked tourist places in {country.countryName}.
          </p>
        </header>

        <section aria-label={`${country.countryName} tourist places`}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {country.places.map((place) => (
              <PlaceCard
                key={place.name}
                place={place}
                countrySlug={country.slug} 
              />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
