import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { SiteNavbar } from "@/components/site-navbar";
import { Gallery } from "@/components/gallery";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { galleryImages } from "@/lib/mock-data";
import { getCountries } from "@/lib/destinations-data";
import DestinationCountryCard from "@/components/destination-country-card";

export default function HomePage() {
  // REMOVED .slice(0, 8) to ensure all countries are displayed
  const featuredCountries = getCountries();

  return (
    <main>
      <SiteNavbar />
      <Hero />

      {/* Featured Destinations */}
      <section
        aria-labelledby="destinations-heading"
        className="mx-auto max-w-6xl px-4 py-12 md:py-16"
      >
        <SectionHeading
          id="destinations"
          title="Top Destinations"
          subtitle="Discover curated countries. Click a card to explore places within."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCountries.map((country) => (
            <DestinationCountryCard key={country.slug} country={country} />
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section
        aria-labelledby="gallery-heading"
        className="mx-auto max-w-6xl px-4 py-12 md:py-16"
      >
        <SectionHeading
          id="gallery"
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
  );
}
