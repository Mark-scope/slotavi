"use client";
import Image from "next/image";
import Link from "next/link";
import popular from '../../assets/images/30 Must-Try Long Hairstyles for Men 1.png'


const popularProviders = [
  { id: "1", name: "The Don", location: "East Legon", rating: 4.5, image:popular },
  { id: "2", name: "Mavis' Inn", location: "Labadi", rating: 4.5, image: popular },
  { id: "3", name: "Mavis' Inn", location: "Labadi", rating: 4.5, image: "/mavis.jpg" },
  { id: "4", name: "Mavis' Inn", location: "Labadi", rating: 4.5, image: "/mavis.jpg" },
];


export default function PopularProv() {
  return (
    <section className="mb-8">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-lg font-semibold">Popular</h2>
    <button className="text-blue-600 text-sm">See all</button>
  </div>

  <div className="overflow-x-auto hide-scrollbar">
    <div className="flex gap-4 min-w-min">
      {popularProviders.map((p) => (
        <Link
          key={p.id}
          href={`/dashboard/${p.id}`}
          className="rounded-xl overflow-hidden bg-white shadow-sm block hover:scale-105 transition-transform min-w-[181px] max-w-[272px]"
        >
          <div className="relative h-48 w-full">
            <Image src={p.image} alt={p.name} fill className="object-cover" />
            <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/70 to-transparent text-white">
              <div className="font-medium">{p.name}</div>
              <div className="text-xs">{p.location}</div>
              <div className="text-xs">⭐ {p.rating}K</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>
  );
}
