"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Define the shape of our grouped data
type Place = {
  name: string;
  countryName: string;
};

type GroupedPlaces = {
  country: string;
  places: Place[];
};

interface PlaceSelectorProps {
  groupedPlaces: GroupedPlaces[];
  value: string; // The currently selected place name
  onSelect: (placeName: string) => void; // Function to call when a place is selected
}

export function PlaceSelector({
  groupedPlaces,
  value,
  onSelect,
}: PlaceSelectorProps) {
  const [open, setOpen] = React.useState(false);

  const selectedPlace = groupedPlaces
    .flatMap((g) => g.places)
    .find((p) => p.name === value);

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
            {selectedPlace
              ? `${selectedPlace.name} (${selectedPlace.countryName})`
              : "Select a place..."}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
        <Command>
          <CommandInput placeholder="Search for a place..." />
          <CommandList>
            <CommandEmpty>No place found.</CommandEmpty>
            {groupedPlaces.map((group) => (
              <CommandGroup key={group.country} heading={group.country}>
                {group.places.map((place) => (
                  <CommandItem
                    key={place.name}
                    value={place.name}
                    onSelect={(currentValue) => {
                      // Find the full name from the value (which might be lowercase)
                      const matchingPlace = groupedPlaces
                        .flatMap((g) => g.places)
                        .find(
                          (p) =>
                            p.name.toLowerCase() === currentValue.toLowerCase()
                        ); // <-- Fixed!

                      if (matchingPlace) {
                        onSelect(matchingPlace.name);
                      }
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === place.name ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {place.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
