import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { SiteNavbar } from "@/components/site-navbar";
import { PackageCard } from "@/components/package-card";
import { Gallery } from "@/components/gallery";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
// Importing packages and galleryImages from mock-data
import { packages, galleryImages } from "@/lib/mock-data";
// Importing the full country list
import { getCountries } from "@/lib/destinations-data";
// Importing the component that links to country detail pages
import DestinationCountryCard from "@/components/destination-country-card";

export default function HomePage() {
  // Get all countries from the data source
  const featuredCountries = getCountries().slice(0, 8); // Limit to 8 for display on the home page

  return (
    <main>
      <SiteNavbar />
      <Hero />

      {/* Featured Destinations (Now showing clickable Country Cards) */}
      <section
        aria-labelledby="destinations-heading"
        className="mx-auto max-w-6xl px-4 py-12 md:py-16"
      >
        <SectionHeading
          id="destinations"
          eyebrow="Featured"
          title="Top Destinations"
          // Updated subtitle to reflect the new clickable cards
          subtitle="Explore our handpicked countries. Click any card to discover the list of tourist places within that country."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Mapping over countries instead of old destinations list */}
          {featuredCountries.map((country) => (
            // DestinationCountryCard handles the image display and links to /destinations/[slug]
            <DestinationCountryCard key={country.slug} country={country} />
          ))}
        </div>
      </section>

      {/* Packages (Section remains unchanged) */}
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

      {/* Gallery (Section remains unchanged) */}
      <section
        aria-labelledby="gallery-heading"
        className="mx-auto max-w-6xl px-4 py-12 md:py-16"
      >
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

      {/* Contact (Section remains unchanged) */}
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
  );
}
