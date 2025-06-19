"use client";
import Image from "next/image";
import comb from '../../assets/icons/game-icons_comb.svg'
import barber from '../../assets/icons/barber.svg'
import teacher from '../../assets/icons/teacher.svg'
import makeup from '../../assets/icons/path1378.svg'

const serviceCards = [
  { id: "hair-stylist", name: "Hair Stylist", icon: comb },
  { id: "barber", name: "Barber", icon: barber },
  { id: "makeup-artist", name: "Makeup Artist", icon: makeup },
  { id: "me", name: "me", icon: teacher },
  { id: "and", name: "you", icon: teacher },
  { id: "you", name: "and", icon: teacher },
  { id: "me-again", name: "me", icon: teacher },
  { id: "you-again", name: "you", icon: teacher },
  { id: "again", name: "and", icon: teacher },
]

export default function Services() {
  return (
    <section className="mb-8">
  <h2 className="text-lg font-semibold mb-4">Services</h2>
  <div className="overflow-x-auto hide-scrollbar">
    <div className="flex gap-[28px] min-w-min px-1">
      {serviceCards.map((s) => (
        <div
          key={s.id}
          className="w-[77px] h-[101px] bg-white rounded-lg shadow-sm flex flex-col items-center justify-center shrink-0"
        >
          <Image src={s.icon} alt={s.name} width={30} height={30} />
          <span className="text-xs font-medium mt-2 text-center">{s.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}
