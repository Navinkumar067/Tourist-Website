"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  getCountries as getCountriesFn,
  COUNTRIES as COUNTRIES_CONST,
} from "@/lib/destinations-data";

// ----------------- Types -----------------
type Place = {
  name: string;
  description?: string;
  price?: string | number;
};

type Country = {
  slug: string;
  countryName: string;
  currencySymbol: string;
  places: Place[];
};

// ----------------- Helpers -----------------
function getCountries(): Country[] {
  try {
    const fn = getCountriesFn as unknown as () => Country[];
    if (typeof fn === "function") {
      const res = fn();
      if (Array.isArray(res)) return res;
    }
  } catch {
    // ignore
  }
  try {
    if (Array.isArray(COUNTRIES_CONST as unknown as Country[])) {
      return COUNTRIES_CONST as unknown as Country[];
    }
  } catch {
    // ignore
  }
  return [];
}

function parsePrice(priceRaw?: string | number): {
  value: number;
  currency: string;
} {
  if (priceRaw == null) return { value: 0, currency: "$" };
  if (typeof priceRaw === "number") return { value: priceRaw, currency: "$" };

  const s = String(priceRaw).trim();
  const currencyMatch = s.match(/^([^\d\.\,\s]+)/);
  let currency = currencyMatch ? currencyMatch[1] : "";
  const numeric = s.replace(/[^0-9.]/g, "");
  const value = numeric ? parseFloat(numeric) : 0;

  return { value: Number.isNaN(value) ? 0 : value, currency: currency || "$" };
}

function formatNumber(n: number) {
  return Number.isInteger(n) ? n.toString() : n.toFixed(2);
}

// ----------------- Component -----------------
export function BookingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const countries = useMemo(() => getCountries(), []);
  const initialDestinationParam = searchParams.get("destination") || "";

  const placeToCountry = useMemo(() => {
    const map = new Map<
      string,
      { countrySlug: string; countryName: string; place: Place }
    >();
    countries.forEach((c) => {
      c.places.forEach((p) => {
        if (p.name)
          map.set(p.name.toLowerCase(), {
            countrySlug: c.slug,
            countryName: c.countryName,
            place: p,
          });
      });
    });
    return map;
  }, [countries]);

  // ----------------- Form State -----------------
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState<number>(1);
  const [fromCountrySlug, setFromCountrySlug] = useState<string>(
    countries[0]?.slug ?? ""
  );
  const [toCountrySlug, setToCountrySlug] = useState<string>(
    countries[0]?.slug ?? ""
  );
  const [selectedPlaces, setSelectedPlaces] = useState<Record<string, boolean>>(
    {}
  );
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // ----------------- Preselect from ?destination -----------------
  useEffect(() => {
    if (!initialDestinationParam) return;
    const key = initialDestinationParam.toLowerCase();
    const match = placeToCountry.get(key);
    if (match) {
      setToCountrySlug(match.countrySlug);
      setSelectedPlaces({ [match.place.name]: true });
    } else {
      const country = countries.find(
        (c) =>
          c.countryName.toLowerCase() === initialDestinationParam.toLowerCase()
      );
      if (country) setToCountrySlug(country.slug);
    }
  }, [initialDestinationParam, placeToCountry, countries]);

  const countryOptions = countries.map((c) => ({
    slug: c.slug,
    name: c.countryName,
  }));

  const toCountry = countries.find((c) => c.slug === toCountrySlug);
  const toPlaces = toCountry?.places ?? [];

  // ----------------- Currency Symbol Logic -----------------
  const toCurrency = useMemo(() => {
    if (toCountry?.currencySymbol) return toCountry.currencySymbol;

    if (toCountry?.places?.length) {
      const firstPlace = toCountry.places[0];
      const parsed = parsePrice(firstPlace.price);
      if (parsed.currency) return parsed.currency;
    }

    return "$";
  }, [toCountry]);

  // ----------------- Price Calculation -----------------
  const placeNumericPrice = useMemo(() => {
    const map = new Map<string, { value: number; currency: string }>();
    countries.forEach((c) => {
      c.places.forEach((p) => {
        const parsed = parsePrice(p.price);
        map.set(p.name, parsed);
      });
    });
    return map;
  }, [countries]);

  const selectedPlaceNames = useMemo(
    () => Object.keys(selectedPlaces).filter((k) => selectedPlaces[k]),
    [selectedPlaces]
  );

  const subtotalPerPerson = useMemo(() => {
    let sum = 0;
    for (const name of selectedPlaceNames) {
      const parsed = placeNumericPrice.get(name);
      if (parsed) sum += parsed.value;
    }
    return sum;
  }, [selectedPlaceNames, placeNumericPrice]);

  const total = useMemo(
    () => subtotalPerPerson * Math.max(1, guests),
    [subtotalPerPerson, guests]
  );

  // ----------------- Validation -----------------
  const isValid = useMemo(() => {
    if (!name.trim()) return false;
    if (!/^\S+@\S+\.\S+$/.test(email)) return false;
    if (!phone.trim()) return false;
    if (!toCountrySlug) return false;
    if (selectedPlaceNames.length === 0) return false;
    if (!(guests >= 1)) return false;
    return true;
  }, [name, email, phone, toCountrySlug, selectedPlaceNames, guests]);

  // ----------------- Handlers -----------------
  function togglePlace(name: string) {
    setSelectedPlaces((s) => ({ ...s, [name]: !s[name] }));
  }

  function handleSelectAllPlaces(selectAll = true) {
    const newMap: Record<string, boolean> = {};
    toPlaces.forEach((p) => (newMap[p.name] = selectAll));
    setSelectedPlaces(newMap);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setOpen(true);
  }

  useEffect(() => {
    setSelectedPlaces((prev) => {
      const clean: Record<string, boolean> = {};
      Object.keys(prev).forEach((k) => {
        if (toPlaces.find((p) => p.name === k)) clean[k] = prev[k];
      });
      return clean;
    });
  }, [toCountrySlug]);

  // ----------------- Render -----------------
  return (
    <>
      <div className="grid gap-6 md:grid-cols-3">
        {/* FORM */}
        <form onSubmit={onSubmit} className="md:col-span-2">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="guests">Guests</Label>
                <Input
                  id="guests"
                  type="number"
                  min={1}
                  value={guests}
                  onChange={(e) =>
                    setGuests(Math.max(1, Number(e.target.value)))
                  }
                />
              </div>

              {/* Travel From / To */}
              <div>
                <Label>Travel From</Label>
                <select
                  value={fromCountrySlug}
                  onChange={(e) => setFromCountrySlug(e.target.value)}
                  className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
                >
                  {countryOptions.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Label>Travel To</Label>
                <select
                  value={toCountrySlug}
                  onChange={(e) => setToCountrySlug(e.target.value)}
                  className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
                >
                  {countryOptions.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Multi-place checkboxes */}
              <div className="sm:col-span-2">
                <div className="flex justify-between items-center">
                  <Label>Choose places</Label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleSelectAllPlaces(true)}
                      className="text-sm text-blue-600 underline"
                    >
                      Select all
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectAllPlaces(false)}
                      className="text-sm text-gray-600 underline"
                    >
                      Clear
                    </button>
                  </div>
                </div>

                <div className="mt-2 grid gap-2">
                  {toPlaces.length === 0 && (
                    <p className="text-sm text-gray-500">
                      No places for this country.
                    </p>
                  )}
                  {toPlaces.map((p) => {
                    const parsed = placeNumericPrice.get(p.name) ?? {
                      value: 0,
                      currency: toCurrency,
                    };
                    return (
                      <label
                        key={p.name}
                        className="flex items-center gap-3 border p-3 rounded-md hover:bg-gray-50"
                      >
                        <input
                          type="checkbox"
                          checked={!!selectedPlaces[p.name]}
                          onChange={() => togglePlace(p.name)}
                          className="h-4 w-4"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <span className="font-medium">{p.name}</span>
                            <span>
                              {toCurrency}
                              {formatNumber(parsed.value)}
                            </span>
                          </div>
                          <p className="text-xs text-gray-600">
                            {p.description}
                          </p>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="sm:col-span-2">
                <Label>Special Requests</Label>
                <Textarea
                  placeholder="Dietary needs, preferences..."
                  className="mt-1"
                />
              </div>
            </div>

            {!isValid && (
              <p className="mt-4 text-sm text-red-600">
                Please fill all fields and select at least one place.
              </p>
            )}

            <div className="mt-6">
              <button
                type="submit"
                disabled={submitting}
                className="rounded-md bg-yellow-400 px-4 py-2.5 text-sm font-semibold text-blue-900 shadow hover:opacity-90"
              >
                {submitting ? "Submitting..." : "Confirm Booking"}
              </button>
            </div>
          </div>
        </form>

        {/* SUMMARY */}
        <aside className="md:col-span-1">
          <div className="rounded-lg border bg-white p-4 shadow-sm sm:p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Booking Summary
            </h2>
            <dl className="mt-3 space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <dt>From</dt>
                <dd>
                  {countries.find((c) => c.slug === fromCountrySlug)
                    ?.countryName ?? "—"}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt>To</dt>
                <dd>{toCountry?.countryName ?? "—"}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Places</dt>
                <dd>
                  {selectedPlaceNames.length > 0
                    ? selectedPlaceNames.join(", ")
                    : "—"}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt>Guests</dt>
                <dd>{guests}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Subtotal / person</dt>
                <dd>
                  {toCurrency}
                  {formatNumber(subtotalPerPerson)}
                </dd>
              </div>
              <div className="flex justify-between font-semibold text-blue-900">
                <dt>Total</dt>
                <dd>
                  {toCurrency}
                  {formatNumber(total)}
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>

      {/* CONFIRMATION MODAL */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md rounded-lg p-0">
          <div className="p-5">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
              <span className="text-blue-900 font-bold">✓</span>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-gray-900">
              Booking Confirmed
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Thanks, {name || "Traveler"}! Your booking for{" "}
              {selectedPlaceNames.length} place(s) is confirmed.
            </p>
            <div className="mt-4 rounded-md bg-gray-50 p-3 text-sm text-gray-700">
              <p>
                <span className="font-medium">To:</span>{" "}
                {toCountry?.countryName ?? "—"}
              </p>
              <p>
                <span className="font-medium">Selected places:</span>{" "}
                {selectedPlaceNames.length > 0
                  ? selectedPlaceNames.join(", ")
                  : "—"}
              </p>
              <p className="mt-2 font-medium">
                Total: {toCurrency}
                {formatNumber(total)}
              </p>
            </div>
            <div className="mt-5 flex gap-3">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md border bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow hover:bg-gray-50"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  router.push("/");
                }}
                className="rounded-md bg-blue-900 px-4 py-2.5 text-sm font-semibold text-white shadow hover:opacity-90"
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

export default BookingForm;
