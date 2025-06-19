'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import profilePic from "@/assets/images/Rectangle 34.png";
import { ArrowLeft } from 'lucide-react';
import ButtomNav from '../ButtomNav';

export default function HeaderImage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="relative w-full h-60 rounded-b-3xl overflow-hidden">
      <Image
        src={profilePic}
        alt="profile"
        fill
        className="object-cover"
      />

      {/* Move the back button to the right */}
      <button
        onClick={handleGoBack}
        className="absolute top-4 right-4 bg-white p-2 rounded-full hover:bg-gray-50 transition"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      <ButtomNav />
    </div>
  );
}
