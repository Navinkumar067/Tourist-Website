import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <header id="home" className="relative">
      <div className="relative h-[64vh] w-full min-h-[420px] md:h-[78vh]">
        <Image
          src="/tropical-coastline-sunset.png"
          alt="Tropical coastline at sunset with gentle waves"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-6xl flex-col items-start justify-center gap-4 px-4">
            <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#1E40AF] shadow">
              Explore the world with us
            </span>
            <h1 className="max-w-2xl text-pretty text-3xl font-bold leading-tight text-white sm:text-5xl">
              Your next unforgettable journey starts here
            </h1>
            <p className="max-w-xl text-pretty text-base text-gray-100 sm:text-lg">
              Discover curated destinations, tailored packages, and seamless experiences designed for every traveler.
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <Link
                href="#packages"
                className="rounded-md bg-[#FBBF24] px-5 py-2.5 text-sm font-semibold text-[#1E40AF] shadow transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24]/70"
              >
                View Packages
              </Link>
              <Link
                href="#destinations"
                className="rounded-md border border-white/70 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                Featured Destinations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
