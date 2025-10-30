"use client";

import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type FormState = {
  name: string;
  email: string;
  phone: string;
  guests: string;
  destination: string;
  startDate: string;
  endDate: string;
  requests: string;
};

const DESTINATION_OPTIONS = [
  "India",
  "France",
  "Japan",
  "USA",
  "Russia",
] as const;

// Base price per destination
const BASE_PRICING: Record<string, number> = {
  India: 1200,
  France: 1800,
  Japan: 2200,
  USA: 1600,
  Russia: 1400,
};

// Matching currency symbols for each country
const CURRENCY_SYMBOLS: Record<string, string> = {
  India: "₹",
  France: "€",
  Japan: "¥",
  USA: "$",
  Russia: "₽",
};

// Calculate number of nights between start and end date
function nightsBetween(start: string, end: string) {
  if (!start || !end) return 0;
  const s = new Date(start).getTime();
  const e = new Date(end).getTime();
  const diff = Math.max(0, e - s);
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function BookingForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const formTopRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    guests: "1",
    destination: "",
    startDate: "",
    endDate: "",
    requests: "",
  });

  // Prefill destination if provided from query params
  useEffect(() => {
    const dest = searchParams.get("destination");
    if (dest && DESTINATION_OPTIONS.includes(dest as any)) {
      setForm((f) => ({ ...f, destination: dest }));
    }
  }, [searchParams]);

  const guestsNum = Number(form.guests || "0") || 0;
  const nights = nightsBetween(form.startDate, form.endDate);
  const base = BASE_PRICING[form.destination] ?? 0;
  const currency = CURRENCY_SYMBOLS[form.destination] || "$"; // 🪙 Get correct currency symbol

  const estimatedTotal = useMemo(() => {
    const perGuest = base * Math.max(1, guestsNum);
    const lodging = nights > 0 ? 100 * nights : 0;
    return perGuest + lodging;
  }, [base, guestsNum, nights]);

  const isValid = useMemo(() => {
    if (!form.name.trim()) return false;
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return false;
    if (!form.phone.trim()) return false;
    if (!form.destination) return false;
    if (!form.startDate || !form.endDate) return false;
    if (new Date(form.endDate) < new Date(form.startDate)) return false;
    return true;
  }, [form]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function scrollToFormTop() {
    formTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) {
      scrollToFormTop();
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setOpen(true);
  }

  return (
    <>
      <div ref={formTopRef} />
      <div className="grid gap-6 md:grid-cols-3">
        {/* ---------------------- FORM ---------------------- */}
        <form onSubmit={onSubmit} className="md:col-span-2">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  className="mt-1"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  required
                />
              </div>

              <div className="sm:col-span-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  required
                />
              </div>

              <div className="sm:col-span-1">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="mt-1"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  required
                />
              </div>

              <div className="sm:col-span-1">
                <Label htmlFor="guests">Number of Guests</Label>
                <select
                  id="guests"
                  name="guests"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF]/60"
                  value={form.guests}
                  onChange={(e) => update("guests", e.target.value)}
                >
                  {Array.from({ length: 10 }, (_, i) => String(i + 1)).map(
                    (g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div className="sm:col-span-1">
                <Label htmlFor="destination">Destination</Label>
                <select
                  id="destination"
                  name="destination"
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF]/60"
                  value={form.destination}
                  onChange={(e) => update("destination", e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select destination
                  </option>
                  {DESTINATION_OPTIONS.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-1">
                <Label htmlFor="startDate">Travel Date (From)</Label>
                <Input
                  id="startDate"
                  name="startDate"
                  type="date"
                  className="mt-1"
                  value={form.startDate}
                  onChange={(e) => update("startDate", e.target.value)}
                  required
                />
              </div>

              <div className="sm:col-span-1">
                <Label htmlFor="endDate">Travel Date (To)</Label>
                <Input
                  id="endDate"
                  name="endDate"
                  type="date"
                  className="mt-1"
                  value={form.endDate}
                  onChange={(e) => update("endDate", e.target.value)}
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="requests">Special Requests</Label>
                <Textarea
                  id="requests"
                  name="requests"
                  placeholder="Dietary needs, room preferences, or special occasions..."
                  className="mt-1 min-h-[120px]"
                  value={form.requests}
                  onChange={(e) => update("requests", e.target.value)}
                />
              </div>
            </div>

            {!isValid && (
              <p className="mt-4 text-sm text-red-600">
                Please complete all required fields with valid information.
              </p>
            )}

            <div className="mt-6">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-md bg-[#FBBF24] px-4 py-2.5 text-sm font-semibold text-[#1E40AF] shadow transition hover:opacity-90"
              >
                {submitting ? "Submitting..." : "Confirm Booking"}
              </button>
            </div>
          </div>
        </form>

        {/* ---------------------- SUMMARY ---------------------- */}
        <aside className="md:col-span-1">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Booking Summary
            </h2>
            <dl className="mt-3 space-y-2 text-sm text-gray-700">
              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Destination</dt>
                <dd className="font-medium">{form.destination || "—"}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Guests</dt>
                <dd className="font-medium">{guestsNum || "—"}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Nights</dt>
                <dd className="font-medium">{nights || "—"}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Base (per guest)</dt>
                <dd className="font-medium">
                  {currency}
                  {BASE_PRICING[form.destination] ?? 0}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Est. Total</dt>
                <dd className="font-semibold text-[#1E40AF]">
                  {currency}
                  {estimatedTotal}
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>

      {/* ---------------------- CONFIRMATION MODAL ---------------------- */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md rounded-lg p-0">
          <div className="p-5">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1E40AF]/10">
              <span className="text-[#1E40AF]" aria-hidden="true">
                ✓
              </span>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-gray-900">
              Booking Successful
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Thanks, {form.name || "Traveler"}! Confirmation email sent to{" "}
              <span className="font-medium text-gray-800">
                {form.email || "your email"}
              </span>
              .
            </p>

            <div className="mt-4 rounded-md bg-gray-50 p-3 text-sm text-gray-700">
              <p>
                <span className="font-medium">Destination:</span>{" "}
                {form.destination || "—"}
              </p>
              <p>
                <span className="font-medium">Guests:</span> {guestsNum || "—"}
              </p>
              <p>
                <span className="font-medium">Est. Total:</span> {currency}
                {estimatedTotal}
              </p>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => router.push("/")}
                className="inline-flex items-center justify-center rounded-md bg-[#1E40AF] px-4 py-2.5 text-sm font-semibold text-white shadow transition hover:opacity-90"
              >
                Back to Home
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
