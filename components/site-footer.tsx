import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

const links = [
  { id: "home", label: "Home" },
  { id: "destinations", label: "Destinations" },
  { id: "packages", label: "Packages" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-bold text-[#1E40AF]">Travelio</p>
            <p className="mt-1 text-sm text-gray-600">Crafting seamless journeys since 2010.</p>
          </div>
          <nav aria-label="Footer" className="flex items-center gap-5">
            {links.map((l) => (
              <Link key={l.id} href={`/#${l.id}`} className="text-sm text-gray-600 transition hover:text-[#1E40AF]">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-gray-600 transition hover:text-[#1E40AF]"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="text-gray-600 transition hover:text-[#1E40AF]"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-gray-600 transition hover:text-[#1E40AF]"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} Travelio. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default SiteFooter
