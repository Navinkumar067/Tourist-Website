"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { Menu, UserCircle } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "destinations", label: "Destinations" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  // Load user info from localStorage
  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    setUserEmail(email);
    setIsAdmin(email === "navin@123.com");
  }, []);

  const onNavClick = useCallback((targetId: string) => {
    setOpen(false);
    scrollToId(targetId);
  }, []);

  const handleUserClick = () => {
    if (isAdmin) router.push("/admin");
    else router.push("/user");
  };

  return (
    <nav
      className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur"
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/#home"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              onNavClick("home");
            }
          }}
          className="font-bold text-lg text-[#1E40AF]"
          aria-label="Go to Home"
        >
          Travelio
        </Link>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="h-6 w-6" />
        </button>

        <div className="ml-auto hidden items-center gap-6 md:flex">
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/#${item.id}`}
                  onClick={(e) => {
                    if (isHome) {
                      e.preventDefault();
                      onNavClick(item.id);
                    }
                  }}
                  className="text-sm font-medium text-gray-600 transition-colors hover:text-[#1E40AF]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Show login or user icon */}
          {!userEmail ? (
            <Link
              href="/login"
              className="rounded-md bg-[#1E40AF] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1E3A8A]"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleUserClick}
              className="p-1 focus:outline-none hover:opacity-80"
              aria-label="User Account"
            >
              <UserCircle className="h-8 w-8 text-[#1E40AF]" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/#${item.id}`}
                  onClick={(e) => {
                    if (isHome) {
                      e.preventDefault();
                      onNavClick(item.id);
                    }
                    setOpen(false);
                  }}
                  className="block py-2 text-sm font-medium text-gray-700 transition-colors hover:text-[#1E40AF]"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Login/User Icon */}
            <li>
              {!userEmail ? (
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-medium text-[#1E40AF] hover:underline"
                >
                  Login
                </Link>
              ) : (
                <button
                  onClick={() => {
                    setOpen(false);
                    handleUserClick();
                  }}
                  className="block py-2 text-sm font-medium text-[#1E40AF]"
                >
                  <UserCircle className="inline h-5 w-5 mr-1 text-[#1E40AF]" />
                  Profile
                </button>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default SiteNavbar;
