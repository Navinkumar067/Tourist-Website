import {
    getPlacesByCategory,
    getAllDestinations,
  } from "@/lib/destinations-data";
  import { notFound } from "next/navigation";
  import type { Metadata } from "next";
  import { SiteNavbar } from "@/components/site-navbar";
  import { SiteFooter } from "@/components/site-footer";
  import { SectionHeading } from "@/components/section-heading";
  import { DestinationCard } from "@/components/destination-card";
  
  // Define the categories we want to build pages for
  const CATEGORIES = [
    "adventure",
    "nature",
    "heritage",
    "coastal",
    "iconic",
    "spiritual",
    "romance",
    "arts",
    "modern",
  ];
  
  // This tells Next.js which category pages to pre-build
  export async function generateStaticParams() {
    return CATEGORIES.map((category) => ({
      slug: category,
    }));
  }
  
  // --- FIX IS HERE ---
  // 1. Define Props type to expect a Promise
  type Props = {
    params: Promise<{ slug: string }>;
  };
  
  // This generates the dynamic title for the browser tab
  export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // 2. Await the params
    const resolvedParams = await params;
    const categoryName =
      resolvedParams.slug.charAt(0).toUpperCase() + resolvedParams.slug.slice(1);
    return {
      title: `${categoryName} Destinations | Travelio`,
      description: `Explore all ${categoryName} destinations available on Travelio.`,
    };
  }
  
  // This is the page component
  export default async function CategoryPage({ params }: Props) {
    // 3. Await the params
    const resolvedParams = await params;
    const places = getPlacesByCategory(resolvedParams.slug);
    const categoryName =
      resolvedParams.slug.charAt(0).toUpperCase() + resolvedParams.slug.slice(1);
  
    if (places.length === 0) {
      // Optional: You could show a "No places found" message
      // For now, we'll just redirect to 404 if the slug is invalid
      notFound();
    }
  
    return (
      <>
        <SiteNavbar />
        <main className="bg-gray-50/70 min-h-screen">
          <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
            <SectionHeading
              title={`${categoryName} Destinations`}
              subtitle={`Browse all ${places.length} places tagged as "${categoryName}"`}
            />
  
            {/* Places List */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {places.map((place) => (
                <DestinationCard
                  key={place.name}
                  title={place.name}
                  description={place.description}
                  imageUrl={place.imageUrl}
                  imageAlt={place.imageAlt}
                  countrySlug={place.countrySlug}
                />
              ))}
            </div>
          </section>
        </main>
        <SiteFooter />
      </>
    );
  }