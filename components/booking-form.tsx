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
  getAllDestinations,
} from "@/lib/destinations-data";
import { PlaneTakeoff, CheckCircle2, Users, MapPin } from "lucide-react";
import { PlaceSelector } from "@/components/place-selector";
import { OriginSelector } from "@/components/origin-selector"; // <-- 1. Import new component

// ----------------- Types -----------------
type Place = {
  name: string;
  description?: string;
  price?: string | number;
  countrySlug: string;
  countryName: string;
  currencySymbol: string;
};

type Country = {
  slug: string;
  countryName: string;
  currencySymbol: string;
  places: any[];
};

// --- Transport Options ---
const TRANSPORT_OPTIONS = [
  { id: "flight", name: "Flight", basePrice: 250 },
  { id: "train", name: "Train", basePrice: 100 },
  { id: "bus", name: "Bus", basePrice: 50 },
];

// --- ORIGIN_PLACES (Unchanged) ---
const ORIGIN_PLACES = [
  // North America
  { displayName: "New York", placeName: "New York Central Park" },
  { displayName: "Los Angeles", placeName: "Los Angeles" },
  { displayName: "San Francisco", placeName: "Golden Gate Bridge" },
  { displayName: "Washington D.C.", placeName: "Washington, D.C." },
  { displayName: "Orlando", placeName: "Orlando Theme Parks" },
  { displayName: "New Orleans", placeName: "New Orleans" },
  { displayName: "Toronto", placeName: "New York Central Park" }, // Mapped to USA
  { displayName: "Vancouver", placeName: "Golden Gate Bridge" }, // Mapped to USA
  { displayName: "Mexico City", placeName: "Grand Canyon" }, // Mapped to USA

  // South America
  { displayName: "Buenos Aires", placeName: "Grand Canyon" }, // Mapped to USA
  { displayName: "Rio de Janeiro", placeName: "Grand Canyon" }, // Mapped to USA
  { displayName: "Santiago", placeName: "Grand Canyon" }, // Mapped to USA

  // Europe
  { displayName: "London", placeName: "Tower Bridge" },
  { displayName: "Manchester", placeName: "Tower Bridge" }, // Mapped to London
  { displayName: "Paris", placeName: "Eiffel Tower" },
  { displayName: "Strasbourg", placeName: "Strasbourg" },
  { displayName: "Berlin", placeName: "Eiffel Tower" }, // Mapped to France
  { displayName: "Rome", placeName: "Colosseum" },
  { displayName: "Venice", placeName: "Rialto Bridge" },
  { displayName: "Amalfi", placeName: "Amalfi Coast" },
  { displayName: "Madrid", placeName: "Sagrada Familia" }, // Mapped to Barcelona
  { displayName: "Barcelona", placeName: "Sagrada Familia" },
  { displayName: "Seville", placeName: "Plaza de España" },
  { displayName: "Moscow", placeName: "St. Basil's Cathedral" },
  { displayName: "Saint Petersburg", placeName: "Saint Petersburg Canals" },

  // Asia
  { displayName: "Dubai", placeName: "Burj Khalifa" },
  { displayName: "Abu Dhabi", placeName: "Sheikh Zayed Grand Mosque" },
  { displayName: "Tokyo", placeName: "Tokyo Skytree" },
  { displayName: "Kyoto", placeName: "Fushimi Inari Taisha" },
  { displayName: "Sapporo", placeName: "Sapporo, Hokkaido" },
  { displayName: "Nara", placeName: "Historic Nara" },
  { displayName: "Singapore", placeName: "Marina Bay Sands" },
  { displayName: "Bangkok", placeName: "Grand Palace" },
  { displayName: "Chiang Mai", placeName: "Chiang Mai" },
  { displayName: "Phuket", placeName: "Phi Phi Islands" }, // Mapped to Phi Phi
  { displayName: "Delhi", placeName: "India Gate" },
  { displayName: "Mumbai", placeName: "Chennai Marina Beach" }, // Mapped to Chennai
  { displayName: "Chennai", placeName: "Chennai Marina Beach" },
  { displayName: "Kolkata", placeName: "Chennai Marina Beach" }, // Mapped to Chennai
  { displayName: "Alleppey", placeName: "Alleppey Backwaters" },
  { displayName: "Amritsar", placeName: "Amritsar Golden Temple" },
  { displayName: "Madurai", placeName: "Madurai Meenakshi Temple" },

  // Australia
  { displayName: "Sydney", placeName: "Sydney Opera House" },
  { displayName: "Melbourne", placeName: "Sydney Opera House" }, // Mapped to Sydney
  { displayName: "Brisbane", placeName: "Great Barrier Reef" }, // Mapped to GBR

  // Africa
  { displayName: "Cairo", placeName: "Burj Khalifa" }, // Mapped to UAE
  { displayName: "Cape Town", placeName: "Burj Khalifa" }, // Mapped to UAE
].sort((a, b) => a.displayName.localeCompare(b.displayName)); 
// ------------------------------------

// ... (All helpers, Component export, and state definitions remain the same) ...
// ... (getCountries, parsePrice, formatNumber) ...
// ... (export function BookingForm() ... ) ...
// ... (all useState hooks ... ) ...

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

  const allPlaces = useMemo(() => getAllDestinations(), []);

  const initialDestinationParam = searchParams.get("destination") || "";

  // ----------------- Form State -----------------
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState<number>(1);

  const [fromPlaceName, setFromPlaceName] = useState<string>(
    ORIGIN_PLACES[0].placeName // Default to the first item in our new sorted list
  );

  const [toPlaceName, setToPlaceName] = useState<string>(
    allPlaces.find((p) => p.name === initialDestinationParam)?.name ||
      allPlaces[1]?.name ||
      ""
  );
  const [transportMode, setTransportMode] = useState<string>(
    TRANSPORT_OPTIONS[0].id
  );
  const [selectedPlaces, setSelectedPlaces] = useState<Record<string, boolean>>(
    {}
  );
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // --- Group places for the "Travel To" PlaceSelector ---
  const groupedPlaces = useMemo(() => {
    const groups: Record<string, Place[]> = {};
    
    allPlaces.forEach((place) => {
      if (!groups[place.countryName]) {
        groups[place.countryName] = [];
      }
      groups[place.countryName].push(place);
    });
    return Object.keys(groups)
      .sort()
      .map((countryName) => ({
        country: countryName,
        places: groups[countryName],
      }));
  }, [allPlaces]);

  // ----------------- Memoized Values -----------------
  const fromPlace = useMemo(
    () => allPlaces.find((p) => p.name === fromPlaceName),
    [fromPlaceName, allPlaces]
  );
  const toPlace = useMemo(
    () => allPlaces.find((p) => p.name === toPlaceName),
    [toPlaceName, allPlaces]
  );
  const toCountryPlaces = useMemo(() => {
    if (!toPlace) return [];
    const country = getCountries().find((c) => c.slug === toPlace.countrySlug);
    return (
      country?.places.map((p) => ({
        ...p,
        currencySymbol: country.currencySymbol,
      })) || []
    );
  }, [toPlace]);

  const toCurrency = toPlace?.currencySymbol ?? "$";

  // ----------------- Pre-selection Logic -----------------
  useEffect(() => {
    const destinationPlace = allPlaces.find(
      (p) => p.name.toLowerCase() === initialDestinationParam.toLowerCase()
    );
    if (destinationPlace) {
      setToPlaceName(destinationPlace.name);
    }
  }, [initialDestinationParam, allPlaces]);

  useEffect(() => {
    if (toPlace) {
      setSelectedPlaces({ [toPlace.name]: true });
    }
    setSelectedPlaces((prev) => {
      const clean: Record<string, boolean> = {};
      Object.keys(prev).forEach((k) => {
        if (toCountryPlaces.find((p) => p.name === k)) {
          clean[k] = prev[k];
        }
      });
      if (toPlace) {
        clean[toPlace.name] = true;
      }
      return clean;
    });
  }, [toPlace, toCountryPlaces]);

  // ----------------- Price Calculation -----------------
  const placeNumericPrice = useMemo(() => {
    const map = new Map<string, { value: number; currency: string }>();
    allPlaces.forEach((p) => {
      const parsed = parsePrice(p.price);
      map.set(p.name, parsed);
    });
    return map;
  }, [allPlaces]);

  const selectedPlaceNames = useMemo(
    () => Object.keys(selectedPlaces).filter((k) => selectedPlaces[k]),
    [selectedPlaces]
  );

  const placesSubtotalPerPerson = useMemo(() => {
    let sum = 0;
    for (const name of selectedPlaceNames) {
      const parsed = placeNumericPrice.get(name);
      if (parsed) sum += parsed.value;
    }
    return sum;
  }, [selectedPlaceNames, placeNumericPrice]);

  const totalPlacesCost = useMemo(
    () => placesSubtotalPerPerson * Math.max(1, guests),
    [placesSubtotalPerPerson, guests]
  );

  const selectedTransport = useMemo(
    () =>
      TRANSPORT_OPTIONS.find((t) => t.id === transportMode) ??
      TRANSPORT_OPTIONS[0],
    [transportMode]
  );

  const transportCostPerPerson = useMemo(() => {
    if (!fromPlace || !toPlace) return 0;
    const distanceMultiplier =
      fromPlace.countrySlug === toPlace.countrySlug ? 1.0 : 1.5;
    return selectedTransport.basePrice * distanceMultiplier;
  }, [fromPlace, toPlace, selectedTransport]);

  const totalTransportCost = useMemo(
    () => transportCostPerPerson * Math.max(1, guests),
    [transportCostPerPerson, guests]
  );

  const total = useMemo(
    () => totalPlacesCost + totalTransportCost,
    [totalPlacesCost, totalTransportCost]
  );

  // ----------------- Validation -----------------
  const isValid = useMemo(() => {
    if (!name.trim()) return false;
    if (!/^\S+@\S+\.\S+$/.test(email)) return false;
    if (!phone.trim()) return false;
    if (!fromPlaceName || !toPlaceName) return false;
    if (selectedPlaceNames.length === 0) return false;
    if (!(guests >= 1)) return false;
    if (!transportMode) return false;
    return true;
  }, [
    name,
    email,
    phone,
    fromPlaceName,
    toPlaceName,
    selectedPlaceNames,
    guests,
    transportMode,
  ]);

  // ----------------- Handlers -----------------
  function togglePlace(name: string) {
    if (name === toPlace?.name) return;
    setSelectedPlaces((s) => ({ ...s, [name]: !s[name] }));
  }

  function handleSelectAllPlaces(selectAll = true) {
    const newMap: Record<string, boolean> = {};
    toCountryPlaces.forEach((p) => (newMap[p.name] = selectAll));
    if (toPlace) {
      newMap[toPlace.name] = true;
    }
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

  // ----------------- Render -----------------
  return (
    <>
      <div className="grid gap-6 md:grid-cols-3">
        {/* FORM */}
        <form onSubmit={onSubmit} className="md:col-span-2">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Personal Info */}
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

              {/* --- 2. "Travel From" (Professional Combobox) --- */}
              <div>
                <Label>Travel From</Label>
                <OriginSelector
                  originPlaces={ORIGIN_PLACES}
                  value={fromPlaceName}
                  onSelect={setFromPlaceName}
                />
              </div>
              {/* ------------------------------------------- */}

              {/* "Travel To" (Professional Combobox) */}
              <div>
                <Label>Travel To</Label>
                <PlaceSelector
                  groupedPlaces={groupedPlaces}
                  value={toPlaceName}
                  onSelect={setToPlaceName}
                />
              </div>
              
              {/* Transport Select */}
              <div className="sm:col-span-2">
                <Label>Mode of Transport</Label>
                <select
                  value={transportMode}
                  onChange={(e) => setTransportMode(e.target.value)}
                  className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
                >
                  {TRANSPORT_OPTIONS.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Multi-place checkboxes */}
              <div className="sm:col-span-2">
                <div className="flex justify-between items-center">
                  <Label>Choose additional places to visit in {toPlace?.countryName || 'your destination'}</Label>
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
                  {toCountryPlaces.length === 0 && (
                    <p className="text-sm text-gray-500">
                      Loading places...
                    </p>
                  )}
                  {toCountryPlaces.map((p) => {
                    const parsed = placeNumericPrice.get(p.name) ?? {
                      value: 0,
                      currency: toCurrency,
                    };
                    const isDestination = p.name === toPlace?.name;
                    return (
                      <label
                        key={p.name}
                        className={`flex items-center gap-3 border p-3 rounded-md ${isDestination ? "bg-blue-50 border-blue-200" : "hover:bg-gray-50"}`}
                      >
                        <input
                          type="checkbox"
                          checked={!!selectedPlaces[p.name]}
                          onChange={() => togglePlace(p.name)}
                          className="h-4 w-4"
                          disabled={isDestination}
                        />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <span className="font-medium">
                              {p.name} {isDestination && "(Your Destination)"}
                            </span>
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

              {/* Special Requests */}
              <div className="sm:col-span-2">
                <Label>Special Requests</Label>
                <Textarea
                  placeholder="Dietary needs, preferences..."
                  className="mt-1"
                />
              </div>
            </div>

            {/* Validation & Submit */}
            {!isValid && (
              <p className="mt-4 text-sm text-red-600">
                Please fill all fields and select at least one place.
              </p>
            )}

            <div className="mt-6">
              <button
                type="submit"
                disabled={submitting}
                className="rounded-md bg-yellow-400 px-4 py-2.5 text-sm font-semibold text-blue-900 shadow hover:opacity-90 disabled:opacity-70"
              >
                {submitting ? "Submitting..." : "Confirm Booking"}
              </button>
            </div>
          </div>
        </form>

        {/* --- Summary & Modal --- */}
        <aside className="md:col-span-1">
          <div className="rounded-lg border bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Booking Summary
            </h2>
            
            <div className="mt-4 space-y-4">
                <div className="flex items-center gap-3">
                    <MapPin className="size-5 text-blue-600 flex-shrink-0" />
                    <div className="text-sm">
                        <p className="font-medium text-gray-800">Trip</p>
                        <p className="text-gray-600">{fromPlace?.name ? ORIGIN_PLACES.find(op => op.placeName === fromPlace.name)?.displayName : '...'} to {toPlace?.name || '...'}</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-3">
                    <Users className="size-5 text-blue-600 flex-shrink-0" />
                    <div className="text-sm">
                        <p className="font-medium text-gray-800">Guests</p>
                        <p className="text-gray-600">{guests} Traveler(s)</p>
                    </div>
                </div>
            </div>

            <hr className="my-5 border-gray-200" />
            <dl className="space-y-3 text-sm text-gray-700">
              
              <div className="flex items-center justify-between">
                <dt className="flex items-center gap-2 text-gray-600">
                  <PlaneTakeoff className="size-4" />
                  <span>Transport ({selectedTransport.name})</span>
                </dt>
                <dd className="font-medium">{toCurrency}{formatNumber(totalTransportCost)}</dd>
              </div>
              <div className="flex justify-between pl-6 text-xs text-gray-500">
                <dt>{guests} x {toCurrency}{formatNumber(transportCostPerPerson)} / person</dt>
              </div>

              {/* THIS IS THE FIXED LINE */}
              <div className="flex items-center justify-between">
                <dt className="flex items-center gap-2 text-gray-600">
                  <CheckCircle2 className="size-4" />
                  <span>Activities ({selectedPlaceNames.length} selected)</span>
                </dt>
                <dd className="font-medium">{toCurrency}{formatNumber(totalPlacesCost)}</dd>
              </div>
              {/* END OF FIX */}

              <div className="flex justify-between pl-6 text-xs text-gray-500">
                <dt>{guests} x {toCurrency}{formatNumber(placesSubtotalPerPerson)} / person</dt>
              </div>

              <hr className="my-3 border-gray-200" />
              <div className="flex justify-between text-base font-semibold text-blue-900">
                <dt>Total Price</dt>
                <dd>
                  {toCurrency}
                  {formatNumber(total)}
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>

      {/* Confirmation Modal */}
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
              Thanks, {name || "Traveler"}! Your trip from {fromPlace?.name ? ORIGIN_PLACES.find(op => op.placeName === fromPlace.name)?.displayName : '...'} to {toPlace?.name} is confirmed.
            </p>
            <div className="mt-4 rounded-md bg-gray-50 p-3 text-sm text-gray-700">
              <p>
                <span className="font-medium">Transport:</span>{" "}
                {selectedTransport.name} ({toCurrency}{formatNumber(totalTransportCost)})
              </p>
              <p>
                <span className="font-medium">Activities:</span>{" "}
                {selectedPlaceNames.join(", ")} ({toCurrency}{formatNumber(totalPlacesCost)})
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