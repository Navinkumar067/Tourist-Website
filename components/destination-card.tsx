import Image from "next/image";
import type { Destination } from "@/lib/mock-data";

export function DestinationCard({
  title,
  description,
  imageAlt,
  imageUrl,
}: Destination) {
  return (
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {/* Image container */}
      <div className="relative aspect-[4/3] w-full">
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

      {/* Content */}
      <div className="space-y-1 p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </article>
  );
}
