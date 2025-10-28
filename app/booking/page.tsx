import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { BookingForm } from "@/components/booking-form";
import { Suspense } from "react";

export default function BookingPage() {
  return (
    <main>
      <SiteNavbar />
      <section aria-labelledby="booking-heading" className="bg-gray-50/70">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <header className="mb-6 md:mb-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#1E40AF]">
              Booking
            </p>
            <h1
              id="booking-heading"
              className="text-pretty text-2xl font-bold text-gray-900 md:text-3xl"
            >
              Complete Your Reservation
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Fill in your details below to secure your trip. You can review
              your selections in the summary panel.
            </p>
          </header>

          <Suspense
            fallback={
              <div className="text-center text-gray-500 py-10">
                Loading booking form...
              </div>
            }
          >
            <BookingForm />
          </Suspense>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
