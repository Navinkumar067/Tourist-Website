"use client";

import type React from "react";

import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    // Simple front-end validation
    if (!name || !email || !message) {
      toast({ title: "Please complete all fields." });
      setLoading(false);
      return;
    }

    // In production, send to an API route here.
    await new Promise((r) => setTimeout(r, 700));

    toast({
      title: "Thanks for reaching out!",
      description: "We’ll get back to you within 24–48 hours.",
    });
    formRef.current?.reset();
    setLoading(false);
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="grid gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:grid-cols-2 sm:p-6"
    >
      <div className="sm:col-span-1">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          required
          placeholder="Your full name"
          className="mt-1"
          // --- THIS IS THE FIX ---
          suppressHydrationWarning={true}
          // --- END OF FIX ---
        />
      </div>
      <div className="sm:col-span-1">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="mt-1"
          // --- THIS IS THE FIX ---
          suppressHydrationWarning={true}
          // --- END OF FIX ---
        />
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your travel plans..."
          className="mt-1 min-h-[140px]"
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center rounded-md bg-[#FBBF24] px-4 py-2.5 text-sm font-semibold text-[#1E40AF] shadow transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24]/70 disabled:opacity-60 sm:w-auto"
          suppressHydrationWarning={true}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
