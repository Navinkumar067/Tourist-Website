import Image from "next/image"
import type { Place } from "@/lib/destinations-data"

type Props = {
  place: Place
}

export default function PlaceCard({ place }: Props) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="overflow-hidden rounded-t-xl">
        <Image
          src={place.imageUrl || "/placeholder.svg"}
          alt={place.imageAlt}
          width={360}
          height={220}
          className="h-48 w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-gray-900">{place.name}</h4>
        <p className="mt-1 line-clamp-1 text-sm text-gray-600">{place.description}</p>
      </div>
    </div>
  )
}
