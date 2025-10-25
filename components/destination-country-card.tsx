import Link from "next/link";
import Image from "next/image";
import type { Country } from "@/lib/destinations-data";

type Props = {
  country: Country;
};

export default function DestinationCountryCard({ country }: Props) {
  const { featuredPlace } = country;

  return (
    <Link
      href={`/destinations/${country.slug}`}
      className="group block rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
    >
      {/* Image Section */}
      <div className="overflow-hidden rounded-t-xl">
        <Image
          src={featuredPlace.imageUrl || "/placeholder.svg"}
          alt={featuredPlace.imageAlt || featuredPlace.name}
          width={320}
          height={200}
          className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      {/* Text Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {featuredPlace.name} — {country.countryName}
        </h3>
        <p className="mt-1 line-clamp-1 text-sm text-gray-600">
          {featuredPlace.description}
        </p>
      </div>
    </Link>
  );
}
