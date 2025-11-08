"use client";

import * as React from "react";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { Menu, UserCircle } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// --- FIX IS HERE ---
// 1. Moved ListItem to the top
// 2. REMOVED the "text-foreground" classes from the `<a>` and `<div>`
//    This allows the component to correctly inherit "text-popover-foreground" (black)
//    from the NavigationMenuContent.
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          {/* This div no longer has "text-foreground" */}
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
// --- END OF FIX ---

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Define our new nav structure
const mainNavItems = [
  { id: "home", label: "Home", href: "/#home" },
  { id: "destinations", label: "Destinations", href: "/#destinations" },
  { id: "gallery", label: "Gallery", href: "/#gallery" },
];

const categories = [
  {
    slug: "adventure",
    title: "Adventure",
    description: "For the thrill-seekers",
  },
  { slug: "nature", title: "Nature", description: "Breathtaking landscapes" },
  {
    slug: "heritage",
    title: "Heritage",
    description: "Explore history and culture",
  },
  { slug: "coastal", title: "Coastal", description: "Sun, sand, and sea" },
  { slug: "iconic", title: "Iconic", description: "World-famous landmarks" },
  {
    slug: "spiritual",
    title: "Spiritual",
    description: "Temples, mosques, and peace",
  },
  { slug: "romance", title: "Romance", description: "Perfect for couples" },
  { slug: "arts", title: "Arts", description: "Museums and creative hubs" },
  { slug: "modern", title: "Modern", description: "Cutting-edge architecture" },
];

const trailingNavItem = {
  id: "contact",
  label: "Contact",
  href: "/#contact",
};

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

  const handleLinkClick = (e: React.MouseEvent, href: string, id: string) => {
    if (href.startsWith("/#") && isHome) {
      e.preventDefault();
      onNavClick(id);
    }
    // For other links (like /categories/*), let the default Link behavior happen
  };

  const handleMobileLinkClick = (
    e: React.MouseEvent,
    href: string,
    id: string
  ) => {
    handleLinkClick(e, href, id);
    setOpen(false);
  };

  return (
    <nav
      className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur"
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/#home"
          onClick={(e) => handleLinkClick(e, "/#home", "home")}
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

        {/* 2. UPDATED DESKTOP NAVBAR */}
        <div className="ml-auto hidden items-center gap-6 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Main Links */}
              {mainNavItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      onClick={(e) => handleLinkClick(e, item.href, item.id)}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}

              {/* Categories Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {categories.map((cat) => (
                      <ListItem
                        key={cat.title}
                        href={`/categories/${cat.slug}`}
                        title={cat.title}
                      >
                        {cat.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Contact Link */}
              <NavigationMenuItem>
                <Link href={trailingNavItem.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    onClick={(e) =>
                      handleLinkClick(
                        e,
                        trailingNavItem.href,
                        trailingNavItem.id
                      )
                    }
                  >
                    {trailingNavItem.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Login/User Icon */}
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

      {/* 3. UPDATED MOBILE MENU */}
      {open && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {/* Main Links */}
            {mainNavItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={(e) => handleMobileLinkClick(e, item.href, item.id)}
                  className="block py-2 text-sm font-medium text-gray-700 transition-colors hover:text-[#1E40AF]"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Categories List (Mobile) */}
            <li>
              <span className="block py-2 text-sm font-semibold text-gray-900">
                Categories
              </span>
              <ul className="pl-4">
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/categories/${cat.slug}`}
                      onClick={() => setOpen(false)} // Just close the menu
                      className="block py-1.5 text-sm font-medium text-gray-600 transition-colors hover:text-[#1E40AF]"
                    >
                      {cat.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Contact Link */}
            <li>
              <Link
                href={trailingNavItem.href}
                onClick={(e) =>
                  handleMobileLinkClick(
                    e,
                    trailingNavItem.href,
                    trailingNavItem.id
                  )
                }
                className="block py-2 text-sm font-medium text-gray-700 transition-colors hover:text-[#1E40AF]"
              >
                {trailingNavItem.label}
              </Link>
            </li>

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
