"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";

// Mock booking data for user
const MOCK_USER_BOOKINGS = [
  {
    id: "B101",
    destination: "Bali",
    date: "2025-11-02",
    time: "10:30 AM",
    payment: "Confirmed",
    total: "$1200",
  },
  {
    id: "B102",
    destination: "Paris",
    date: "2025-12-14",
    time: "03:45 PM",
    payment: "Pending",
    total: "€1800",
  },
];

export default function UserDashboard() {
  const router = useRouter();
  const [user, setUser] = React.useState<{
    email: string;
    name: string;
  } | null>(null);

  React.useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (!email) {
      router.push("/login");
      return;
    }

    const name = email === "navin@123.com" ? "Navin (Admin)" : "Arun";
    setUser({ email, name });
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    router.push("/"); // 🔹 Redirect to home page after logout
  };

  if (!user) return null;

  return (
    <>
      <SiteNavbar />
      <main className="min-h-screen bg-gray-50/70 p-4 sm:p-8">
        <div className="mx-auto max-w-5xl">
          <header className="flex items-center justify-between mb-8">
            <SectionHeading
              eyebrow="User Dashboard"
              title="My Travel Bookings"
              subtitle={`Welcome, ${user.name}!`}
            />
            <Button
              variant="outline"
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              Logout
            </Button>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            {MOCK_USER_BOOKINGS.map((b) => (
              <Card key={b.id} className="bg-white p-4 shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-[#1E40AF] text-lg font-semibold">
                    {b.destination}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-700 space-y-1">
                  <p>
                    <span className="font-medium">Booking ID:</span> {b.id}
                  </p>
                  <p>
                    <span className="font-medium">Date:</span> {b.date}
                  </p>
                  <p>
                    <span className="font-medium">Time:</span> {b.time}
                  </p>
                  <p>
                    <span className="font-medium">Total:</span> {b.total}
                  </p>
                  <p>
                    <span className="font-medium">Payment Status:</span>{" "}
                    <span
                      className={`${
                        b.payment === "Confirmed"
                          ? "text-green-600 font-medium"
                          : "text-yellow-600 font-medium"
                      }`}
                    >
                      {b.payment}
                    </span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
