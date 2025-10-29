// app/register/page.tsx
"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

// Mock database (for demonstration only)
const registeredUsers = new Map<
  string,
  { name: string; phone: string; password: string }
>();
registeredUsers.set("arun@gmail.com", {
  name: "Arun",
  phone: "1234567890",
  password: "arun123",
});

export default function RegisterPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  function updateForm(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  function validate() {
    if (!form.name || !form.phone || !form.email || !form.password) {
      setError("Please complete all fields.");
      return false;
    }
    if (form.password.length < 4) {
      setError("Password must be at least 4 characters.");
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (registeredUsers.has(form.email)) {
      setError("This email is already registered. Try logging in.");
      return false;
    }
    setError(null);
    return true;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    // Simulate registration API call
    await new Promise((r) => setTimeout(r, 700));

    // Save new user (mock)
    registeredUsers.set(form.email, {
      name: form.name,
      phone: form.phone,
      password: form.password,
    });

    toast({
      title: "Registration successful!",
      description: "You can now log in with your email and password.",
    });

    setSubmitting(false);
    router.push("/login");
  }

  return (
    <>
      <SiteNavbar />
      <main className="min-h-screen px-4 py-10">
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-6">
              <h1 className="text-balance text-2xl font-semibold text-gray-900">
                Register
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Create your Travelio account.
              </p>

              <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
                {/* Name Field */}
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={updateForm}
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={updateForm}
                    placeholder="123-456-7890"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={updateForm}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                {/* Password Field */}
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={form.password}
                    onChange={updateForm}
                    placeholder="••••••••"
                    required
                  />
                  <p className="text-xs text-gray-500">Min. 4 characters</p>
                </div>

                {error ? (
                  <div className="text-sm text-red-600" role="alert">
                    {error}
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center rounded-md bg-[#FBBF24] px-4 py-2 text-sm font-semibold text-[#1E40AF] shadow transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24]/70 disabled:opacity-70"
                >
                  {submitting ? "Registering..." : "Register"}
                </button>
              </form>

              <div className="mt-6 text-center text-sm">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-[#1E40AF] hover:underline"
                >
                  Login here
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
