import { Hero } from "@/components/hero"
import { SectionHeading } from "@/components/section-heading"
import { SiteNavbar } from "@/components/site-navbar"
import { DestinationCard } from "@/components/destination-card"
import { PackageCard } from "@/components/package-card"
import { Gallery } from "@/components/gallery"
import { ContactForm } from "@/components/contact-form"
import { SiteFooter } from "@/components/site-footer"
import { destinations, packages, galleryImages } from "@/lib/mock-data"

export default function HomePage() {
  return (
    <main>
      <SiteNavbar />
      <Hero />

      {/* Featured Destinations */}
      <section aria-labelledby="destinations-heading" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionHeading
          id="destinations"
          eyebrow="Featured"
          title="Top Destinations"
          subtitle="Handpicked places loved by our travelers for their beauty, culture, and unforgettable experiences."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <DestinationCard key={d.id} {...d} />
          ))}
        </div>
      </section>

      {/* Packages */}
      <section aria-labelledby="packages-heading" className="bg-gray-50/70">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <SectionHeading
            id="packages"
            eyebrow="Popular Deals"
            title="Curated Travel Packages"
            subtitle="Flexible itineraries and exclusive benefits to make the most of your time away."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((p) => (
              <PackageCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section aria-labelledby="gallery-heading" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionHeading
          id="gallery"
          eyebrow="Inspiration"
          title="Traveler Gallery"
          subtitle="A glimpse into the journeys we’ve crafted. Click any photo to view it larger."
        />
        <div className="mt-8">
          <Gallery items={galleryImages} />
        </div>
      </section>

      {/* Contact */}
      <section aria-labelledby="contact-heading" className="bg-gray-50/70">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <SectionHeading
            id="contact"
            eyebrow="Get in Touch"
            title="Plan Your Next Trip"
            subtitle="Tell us about your dream getaway and we’ll tailor a package just for you."
          />
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
