"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { SiteNavbar } from "../../components/site-navbar"
import { SiteFooter } from "../../components/site-footer"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  function validate() {
    if (!email || !password) {
      setError("Please enter both email and password.")
      return false
    }
    setError(null)
    return true
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)

    try {
      if (email === "admin@example.com" && password === "1234") {
        router.push("/")
      } else {
        setError("Invalid credentials. Try admin@example.com / 1234.")
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <SiteNavbar />
      <main className="min-h-screen px-4 py-10">
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-6">
              <h1 className="text-balance text-2xl font-semibold text-gray-900">Login</h1>
              <p className="mt-1 text-sm text-gray-600">Use admin@example.com and 1234 to continue.</p>

              <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-800">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none ring-0 focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]"
                    placeholder="you@example.com"
                    aria-invalid={!!error && !email}
                    aria-describedby={!!error && !email ? "email-error" : undefined}
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="password" className="text-sm font-medium text-gray-800">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none ring-0 focus:border-[#1E40AF] focus:ring-2 focus:ring-[#1E40AF]"
                    placeholder="••••"
                    aria-invalid={!!error && !password}
                    aria-describedby={!!error && !password ? "password-error" : undefined}
                  />
                </div>

                {error ? (
                  <div
                    id={!email ? "email-error" : !password ? "password-error" : "form-error"}
                    className="text-sm text-red-600"
                    role="alert"
                  >
                    {error}
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center rounded-md bg-[#1E40AF] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1E3A8A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF] disabled:opacity-70"
                >
                  {submitting ? "Logging in..." : "Login"}
                </button>
              </form>

              <div className="mt-6 text-center">
                <Link href="/" className="text-sm font-medium text-[#1E40AF] hover:underline">
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
