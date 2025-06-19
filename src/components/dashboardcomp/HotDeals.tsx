"use client";
import Image from "next/image";
import hotdeal from "../../assets/images/Rectangle 29.png";

// This will eventually be replaced with API data from a database
const hotDealsData = [
  {
    id: 1,
    title: "Sheek Hair and Spa",
    location: "North Legon",
    rating: "⭐ 4.5K",
    discount: "25% off",
    image: hotdeal,
  },
  {
    id: 2,
    title: "Glow Beauty Studio",
    location: "East Legon",
    rating: "⭐ 4.3K",
    discount: "20% off",
    image: hotdeal,
  },
  {
    id: 3,
    title: "Royal Touch Salon",
    location: "Osu",
    rating: "⭐ 4.8K",
    discount: "15% off",
    image: hotdeal,
  },
];

export default function HotDeals() {
  return (
    <section className="mb-20">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">hot deals</h2>
        <button className="text-blue-600 text-sm">see all</button>
      </div>

      {/* horizontal scroll container */}
      <div className="flex overflow-x-auto gap-4 hide-scrollbar">
        {hotDealsData.map((deal) => (
          <div
            key={deal.id}
            className="relative h-48 min-w-full rounded-xl overflow-hidden bg-white shadow-sm shrink-0"
          >
            {/* Background image */}
            <Image
              src={deal.image}
              alt={deal.title}
              fill
              className="object-cover z-0"
            />

            {/* Discount badge */}
            <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full z-10">
              {deal.discount}
            </div>

            {/* Overlay text */}
            <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/70 to-transparent text-white z-10">
              <div className="font-medium">{deal.title}</div>
              <div className="text-xs">{deal.location}</div>
              <div className="text-xs">{deal.rating}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
