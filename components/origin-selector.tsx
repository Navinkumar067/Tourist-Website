"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Define the shape of our origin places
type OriginPlace = {
  displayName: string;
  placeName: string;
};

interface OriginSelectorProps {
  originPlaces: OriginPlace[];
  value: string; // The currently selected placeName
  onSelect: (placeName: string) => void; // Function to call when a place is selected
}

export function OriginSelector({
  originPlaces,
  value,
  onSelect,
}: OriginSelectorProps) {
  const [open, setOpen] = React.useState(false);

  // Find the selected origin to display its name
  const selectedOrigin = originPlaces.find((p) => p.placeName === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between text-left font-normal"
        >
          <span className="truncate">
            {selectedOrigin
              ? selectedOrigin.displayName
              : "Select an origin city..."}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
        <Command>
          <CommandInput placeholder="Search for a city..." />
          <CommandList>
            <CommandEmpty>No city found.</CommandEmpty>
            {/* We don't need grouping, so we map directly */}
            {originPlaces.map((place) => (
              <CommandItem
                key={place.displayName}
                // The value for searching is the city name
                value={place.displayName}
                onSelect={(currentValue) => {
                  // Find the full place object from the display name
                  const matchingPlace = originPlaces.find(
                    (p) =>
                      p.displayName.toLowerCase() === currentValue.toLowerCase()
                  ); // <-- Fixed!

                  if (matchingPlace) {
                    // Call onSelect with the internal placeName, not the display name
                    onSelect(matchingPlace.placeName);
                  }
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    // Check if the internal value matches
                    value === place.placeName ? "opacity-100" : "opacity-0"
                  )}
                />
                {place.displayName}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
