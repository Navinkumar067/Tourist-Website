export type Destination = {
  id: string
  title: string
  description: string
  imageAlt: string
  imageUrl: string
}

export type TravelPackage = {
  id: string
  title: string
  price: string
  highlights: string[]
  imageAlt: string
  imageUrl: string
}

export const galleryImages: { id: string; alt: string; src: string }[] = [
  {
    id: "gal-1",
    alt: "Sunset coastline with silhouettes of palm trees",
    src: "/Global/france.jpg",
  },
  {
    id: "gal-2",
    alt: "Historic city street with warm lights at dusk",
    src: "/Global/KASHMIR.JPg",
  },
  {
    id: "gal-3",
    alt: "Mountain lake reflecting snowy peaks",
    src: "/Global/Rajasthan.jpg",
  },
  {
    id: "gal-4",
    alt: "Traditional market with vibrant colors",
    src: "/Global/france1.jpg",
  },
  {
    id: "gal-5",
    alt: "Golden desert dunes under blue sky",
    src: "/Global/italy.jpg",
  },
  {
    id: "gal-6",
    alt: "Cliffside village overlooking the sea",
    src: "/Global/italy1.jpg",
  },
]
