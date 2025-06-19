"use client";
import Image from "next/image";
import dashboard from "../assets/icons/dashbard.svg";
import calendar from "../assets/icons/calender.svg";
import favourite from "../assets/icons/favourite.svg";
import { useRouter } from "next/navigation";

export default function BottomNav() {
  const router = useRouter();
  return (
    <nav className="lg:hidden fixed bottom-4 left-4 right-4 bg-white  rounded-[18px] shadow-md p-3 flex justify-around z-50">
      <button className="text-blue-600 flex items-center gap-2"
      onClick={() => router.push('/dashboard')}>
        <Image src={dashboard} alt="dashboard" width={24} height={24} />
      </button>
      <button className="text-blue-600 flex items-center gap-2"
      onClick={() => router.push('/bookings/[id]')}>
        <Image src={calendar} alt="calendar" width={24} height={24} />
      </button>
      <button className="text-blue-600 flex items-center gap-2">
        <Image src={favourite} alt="favourite" width={24} height={24} />
      </button>
    </nav>
  );
}
