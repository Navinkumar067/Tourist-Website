import Image from "next/image"
import Link from "next/link"
import type { TravelPackage } from "@/lib/mock-data"

export function PackageCard({ title, price, highlights, imageAlt, imageUrl }: TravelPackage) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={imageUrl || "/placeholder.svg?height=400&width=600&query=package%20image"}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm font-bold text-[#1E40AF]">{price}</p>
        </div>
        <ul className="mb-4 space-y-2 text-sm text-gray-600">
          {highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2">
              <span
                aria-hidden="true"
                className="mt-1 inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: "#FBBF24" }}
              />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-2">
          <Link
            href={`/booking?destination=${encodeURIComponent(title)}`}
            className="inline-flex w-full items-center justify-center rounded-md bg-[#1E40AF] px-4 py-2.5 text-sm font-semibold text-white shadow transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF]/60"
          >
            Book Now
          </Link>
        </div>
      </div>
    </article>
  )
}
