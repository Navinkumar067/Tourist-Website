"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type GalleryItem = {
  id: string;
  alt: string;
  src: string;
};

export function Gallery({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {items.map((img) => (
          <button
            key={img.id}
            className="group relative aspect-[4/3] overflow-hidden rounded-md border border-gray-200 bg-white"
            onClick={() => {
              setActive(img);
              setOpen(true);
            }}
            aria-label={`Open image: ${img.alt}`}
            // --- THIS IS THE FIX ---
            suppressHydrationWarning={true}
            // --- END OF FIX ---
          >
            <Image
              src={
                img.src ||
                "/placeholder.svg?height=300&width=400&query=gallery%20image"
              }
              alt={img.alt}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 33vw, 50vw"
            />
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl overflow-hidden p-0">
          {active ? (
            <div className="relative h-[60vh] min-h-[360px] w-full">
              <Image
                src={
                  active.src ||
                  "/placeholder.svg?height=800&width=1200&query=lightbox%20image"
                }
                alt={active.alt}
                fill
                className="object-contain bg-black"
                sizes="100vw"
              />
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
