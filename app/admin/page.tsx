"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Users, PlaneTakeoff, DollarSign, LogOut } from "lucide-react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";

// --- Mock Data Imports (Must match mock authentication from login/register) ---
const MOCK_REGISTERED_USERS = new Map<
  string,
  { name: string; phone: string; password: string }
>();
// Added new testing user credentials:
MOCK_REGISTERED_USERS.set("navin@123.com", {
  name: "Navin (Admin)",
  phone: "8838892",
  password: "8838892",
});
MOCK_REGISTERED_USERS.set("jane@travel.com", {
  name: "Jane Doe",
  phone: "9876543210",
  password: "secure",
});

const MOCK_BOOKINGS = [
  {
    id: "B001",
    user: "Jane Doe",
    destination: "Paris Delight",
    total: "€1,599",
    status: "Confirmed",
  },
  {
    id: "B002",
    user: "Navin (Admin)",
    destination: "Grand Canyon",
    total: "$1,400",
    status: "Pending",
  },
  {
    id: "B003",
    user: "Jane Doe",
    destination: "Tokyo Skytree",
    total: "¥1,600",
    status: "Confirmed",
  },
  {
    id: "B004",
    user: "Navin (Admin)",
    destination: "Sentosa Fun Pass",
    total: "S$70",
    status: "Cancelled",
  },
];

// Set the admin email to the new testing account
const ADMIN_EMAIL = "navin@123.com";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = React.useState("");
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  // Simulated Authentication Check
  React.useEffect(() => {
    const loggedInEmail = localStorage.getItem("userEmail");
    if (loggedInEmail === ADMIN_EMAIL) {
      setUserEmail(loggedInEmail);
      setIsAuthenticated(true);
    } else {
      router.push("/login");
    }
  }, [router]);

  if (!isAuthenticated) {
    return (
      <div className="flex h-screen items-center justify-center text-gray-600">
        Redirecting to Login...
      </div>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    router.push("/login");
  };

  const totalRevenue = MOCK_BOOKINGS.filter((b) => b.status === "Confirmed")
    .map((b) => parseFloat(b.total.replace(/[^0-9.-]+/g, "")) || 0)
    .reduce((sum, amount) => sum + amount, 0);

  const totalUsers = MOCK_REGISTERED_USERS.size;
  const totalBookings = MOCK_BOOKINGS.length;

  return (
    <>
      <SiteNavbar />
      <main className="min-h-screen bg-gray-50/70 p-4 sm:p-8">
        <div className="mx-auto max-w-6xl">
          <header className="flex items-center justify-between mb-8">
            <SectionHeading
              eyebrow="Admin View"
              title="Dashboard Overview"
              subtitle={`Welcome back, ${
                MOCK_REGISTERED_USERS.get(userEmail)?.name || "Admin"
              }!`}
            />
            <Button
              variant="outline"
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <LogOut className="size-4" />
              Logout
            </Button>
          </header>

          {/* KPI Cards */}
          <div className="grid gap-6 md:grid-cols-3 mb-10">
            <Card className="bg-white p-6 shadow-md">
              <CardHeader className="p-0">
                <CardTitle className="text-sm font-medium flex items-center justify-between text-gray-500">
                  Total Users
                  <Users className="size-4 text-[#1E40AF]" />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-4">
                <div className="text-2xl font-bold">{totalUsers}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Total registered accounts
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white p-6 shadow-md">
              <CardHeader className="p-0">
                <CardTitle className="text-sm font-medium flex items-center justify-between text-gray-500">
                  Confirmed Bookings
                  <PlaneTakeoff className="size-4 text-[#1E40AF]" />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-4">
                <div className="text-2xl font-bold">{totalBookings}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Bookings this period
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white p-6 shadow-md">
              <CardHeader className="p-0">
                <CardTitle className="text-sm font-medium flex items-center justify-between text-gray-500">
                  Estimated Revenue
                  <DollarSign className="size-4 text-[#1E40AF]" />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-4">
                {/* NOTE: This uses USD symbol just to show the sum; actual data is multi-currency */}
                <div className="text-2xl font-bold">
                  ${totalRevenue.toFixed(2)}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  From confirmed bookings (USD equivalent)
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Bookings Table */}
          <Card className="bg-white shadow-md p-6">
            <CardTitle className="text-xl font-semibold mb-4 p-0">
              Recent Activity
            </CardTitle>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Booking ID</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Destination</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MOCK_BOOKINGS.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell className="font-medium">{booking.id}</TableCell>
                    <TableCell>{booking.user}</TableCell>
                    <TableCell>{booking.destination}</TableCell>
                    <TableCell className="text-right">
                      {booking.total}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                          booking.status === "Confirmed"
                            ? "bg-green-100 text-green-800"
                            : booking.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableCaption>A list of recent mock bookings.</TableCaption>
            </Table>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
