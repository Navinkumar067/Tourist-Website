"use client";

import BookingForm from "@/components/booking-form";
import SiteNavbar from "@/components/site-navbar";
import SiteFooter from "@/components/site-footer";
import { Suspense } from "react"; // 1. Import Suspense

// A simple loading component to show while the form loads
function BookingFormLoading() {
  return (
    <div className="text-center text-gray-600">
      <p>Loading booking form...</p>
    </div>
  );
}

export default function BookingPage() {
  return (
    <>
      <SiteNavbar />
      <main className="bg-gray-50/70 min-h-screen">
        <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-[#1E40AF]">
              Plan Your Journey
            </h1>
            <p className="mt-2 text-gray-600">
              Book your trip easily — just fill in your travel details below.
            </p>
          </header>

          {/* 2. Wrap BookingForm in Suspense */}
          <Suspense fallback={<BookingFormLoading />}>
            <BookingForm />
          </Suspense>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
