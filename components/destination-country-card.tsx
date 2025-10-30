import Link from "next/link";
import Image from "next/image";
import type { Country } from "@/lib/destinations-data";

type Props = {
  country: Country;
};

export default function DestinationCountryCard({ country }: Props) {
  const { featuredPlace } = country;

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <Link
        href={`/destinations/${country.slug}`}
        className="block flex-1 focus:outline-none"
      >
        <div className="overflow-hidden rounded-t-xl">
          <Image
            src={featuredPlace.imageUrl || "/placeholder.svg"}
            alt={featuredPlace.imageAlt || featuredPlace.name}
            width={320}
            height={200}
            className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {featuredPlace.name ? `${featuredPlace.name} — ` : ""}
            {country.countryName}
          </h3>
          <p className="mt-1 line-clamp-1 text-sm text-gray-600">
            {featuredPlace.description}
          </p>
        </div>
      </Link>
      <div className="mt-auto border-t border-gray-100 p-4 pt-0">
        <Link
          href={`/booking?destination=${encodeURIComponent(
            country.countryName
          )}`}
          className="inline-flex w-full items-center justify-center rounded-md bg-[#FBBF24] px-4 py-2.5 text-sm font-semibold text-[#1E40AF] shadow transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24]/70"
        >
          View This Country
        </Link>
      </div>
    </div>
  );
}
