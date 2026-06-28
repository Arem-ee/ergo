import type { Vehicle } from "@/types"

export const VEHICLES: Vehicle[] = [
  {
    id: "ergo-sedan",
    name: "ERGO S",
    tagline: "The Benchmark",
    description: "Redefining the executive sedan with unparalleled range, performance, and intelligence.",
    image: "/vehicles/model-1.png",
    href: "/vehicles/ergo-s",
    price: "from $84,900",
    specs: {
      horsepower: "670 hp",
      topSpeed: "155 mph",
      acceleration: "3.1 s",
      range: "405 mi",
    },
  },
  {
    id: "ergo-suv",
    name: "ERGO X",
    tagline: "Boundless Exploration",
    description: "A full-size SUV engineered for adventure without compromising luxury or efficiency.",
    image: "/vehicles/model-2.png",
    href: "/vehicles/ergo-x",
    price: "from $94,900",
    specs: {
      horsepower: "750 hp",
      topSpeed: "140 mph",
      acceleration: "3.8 s",
      range: "360 mi",
    },
  },
  {
    id: "ergo-sport",
    name: "ERGO R",
    tagline: "Raw Precision",
    description: "A two-seat hypercar that pushes the boundaries of aerodynamics and electric performance.",
    image: "/vehicles/model-3.png",
    href: "/vehicles/ergo-r",
    price: "from $169,900",
    specs: {
      horsepower: "1,050 hp",
      topSpeed: "217 mph",
      acceleration: "1.9 s",
      range: "290 mi",
    },
  },
  {
    id: "ergo-gt",
    name: "ERGO GT",
    tagline: "Grand Touring Redefined",
    description: "A four-door grand tourer with sumptuous comfort and relentless long-distance capability.",
    image: "/vehicles/model-4.png",
    href: "/vehicles/ergo-gt",
    price: "from $124,900",
    specs: {
      horsepower: "820 hp",
      topSpeed: "185 mph",
      acceleration: "2.7 s",
      range: "445 mi",
    },
  },
]
