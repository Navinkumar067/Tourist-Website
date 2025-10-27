import Image from "next/image";
import Link from "next/link";
import type { Place } from "@/lib/destinations-data";

type Props = {
  place: Place;
  countrySlug: string;
};

export default function PlaceCard({ place, countrySlug }: Props) {
  const packageData = place.package;
  const destinationName = place.name;

  return (
    <div className="flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="overflow-hidden rounded-t-xl">
        <Image
          src={place.imageUrl || "/placeholder.svg"}
          alt={place.imageAlt}
          width={360}
          height={220}
          className="h-48 w-full object-cover"
        />
      </div>

      <div className="p-4 flex-1">
        <h4 className="text-xl font-semibold text-gray-900">{place.name}</h4>
        <p className="mt-1 line-clamp-2 text-sm text-gray-600">
          {place.description}
        </p>

        {packageData && (
          <div className="mt-4 border-t pt-3">
            <h5 className="text-sm font-bold text-[#1E40AF]">
              {packageData.title}
            </h5>
            {/* Display Price Prominently */}
            <p className="text-xl font-bold text-gray-900 mt-1 mb-2">
              {packageData.price}
            </p>
            <ul className="space-y-1 text-xs text-gray-700 list-none p-0 ml-0">
              {packageData.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-1 inline-block h-2 w-2 rounded-full flex-shrink-0 bg-yellow-500"
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {packageData && (
        <div className="p-4 pt-0 mt-auto">
          <Link
            href={`/booking?destination=${encodeURIComponent(destinationName)}`}
            className="inline-flex w-full items-center justify-center rounded-md bg-[#FBBF24] px-4 py-2.5 text-sm font-semibold text-[#1E40AF] shadow transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24]/70"
          >
            Book Now
          </Link>
        </div>
      )}
    </div>
  );
}
