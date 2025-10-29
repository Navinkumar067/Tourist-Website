"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SiteNavbar } from "../../components/site-navbar";
import { SiteFooter } from "../../components/site-footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

// --- Mock Database (must match Admin Dashboard setup) ---
const registeredUsers = new Map<
  string,
  { name: string; phone: string; password: string }
>();

// Admin account
registeredUsers.set("navin@123.com", {
  name: "Navin (Admin)",
  phone: "8838892353",
  password: "8838892",
});

// Demo user
registeredUsers.set("arun@123.com", {
  name: "Arun",
  phone: "1234567890",
  password: "8838892",
});

// --- Constants ---
const ADMIN_EMAIL = "navin@123.com";

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  function validate() {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return false;
    }
    setError(null);
    return true;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    try {
      const user = registeredUsers.get(email);

      if (user && user.password === password) {
        // ✅ Save mock session in localStorage
        localStorage.setItem("userEmail", email);

        toast({
          title: `Welcome back, ${user.name}!`,
          description: "You are logged in successfully.",
        });

        // ✅ Redirect admin to /admin, others to /
        if (email === ADMIN_EMAIL) {
          router.push("/admin");
        } else {
          router.push("/");
        }
      } else {
        setError("Invalid email or password.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <SiteNavbar />
      <main className="min-h-screen px-4 py-10 bg-gray-50">
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-6">
              <h1 className="text-balance text-2xl font-semibold text-gray-900">
                Login
              </h1>

              <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                  />
                </div>

                {error && (
                  <div className="text-sm text-red-600" role="alert">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center rounded-md bg-[#1E40AF] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1E3A8A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF] disabled:opacity-70"
                >
                  {submitting ? "Logging in..." : "Login"}
                </button>
              </form>

              <div className="mt-6 text-center text-sm">
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="font-medium text-[#1E40AF] hover:underline"
                >
                  Register here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
