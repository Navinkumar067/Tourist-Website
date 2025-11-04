import Image from "next/image";
import Link from "next/link";

export interface Destination {
  title: string;
  description: string;
  imageAlt?: string;
  imageUrl?: string;
  countrySlug?: string; // e.g. "india"
  countryName?: string; // optional, human readable
}

export function DestinationCard({
  title,
  description,
  imageAlt,
  imageUrl,
  countrySlug,
}: Destination) {
  // Build link to booking page, including both country and destination
  const bookingHref = countrySlug
    ? `/booking?country=${encodeURIComponent(
        countrySlug
      )}&destination=${encodeURIComponent(title)}`
    : `/booking?destination=${encodeURIComponent(title)}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {/* Image Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={
            imageUrl ||
            "/placeholder.svg?height=400&width=600&query=destination%20image"
          }
          alt={imageAlt || title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-1 p-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        </div>

        {/* Book Now Button */}
        <div className="mt-4 border-t border-gray-100 pt-4">
          <Link
            href={bookingHref}
            prefetch={true}
            className="inline-flex w-full items-center justify-center rounded-md bg-[#FBBF24] px-4 py-2.5 text-sm font-semibold text-[#1E40AF] shadow transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24]/70"
          >
            Book Now
          </Link>
        </div>
      </div>
    </article>
  );
}
