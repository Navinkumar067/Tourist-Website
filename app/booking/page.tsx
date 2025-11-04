"use client";

import BookingForm from "@/components/booking-form";

export default function BookingPage() {
  return (
    <main className="bg-gray-50/70">
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#1E40AF]">
            Plan Your Journey
          </h1>
          <p className="mt-2 text-gray-600">
            Book your trip easily — just fill in your travel details below.
          </p>
        </header>

        {/* Booking Form Component */}
        <BookingForm />
      </section>
    </main>
  );
}
