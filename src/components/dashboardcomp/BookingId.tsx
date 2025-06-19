'use client'

import Image from "next/image";
import { useRouter } from "next/navigation"; // ✅ Needed for back() and push()
import { notFound } from "next/navigation";
import { ArrowLeft, Heart, MapPin, MessageCircle, Star } from "lucide-react";
import BottomNav from "../../components/ButtomNav";
import don from '../../assets/icons/girl.svg'
// Simulated data
const popularProviders = [
  { 
    id: "1", 
    name: "The Don", 
    location: "East Legon", 
    rating: 4.5, 
    image: don,
    role: "Hair Dresser",
    description: "Professional hair styling and grooming services with over 5 years of experience.",
    services: ["Haircut", "Styling", "Beard Trim", "Hair Wash"],
    profile: don,
    online: true
  },
  { 
    id: "2", 
    name: "Mavis' Inn", 
    location: "Labadi", 
    rating: 4.5, 
    image: "/mavis.jpg",
    role: "Beauty Specialist",
    description: "Full-service beauty salon offering comprehensive beauty treatments.",
    services: ["Facial", "Massage", "Manicure", "Pedicure"],
    profile: "/mavis-profile.jpg",
    online: false
  },
  { 
    id: "3", 
    name: "Kwame's Cuts", 
    location: "Osu", 
    rating: 4.8, 
    image: "/kwame.jpg",
    role: "Master Barber",
    description: "Expert barber with premium grooming services.",
    services: ["Fade Cuts", "Beard Styling", "Hot Towel", "Hair Treatment"],
    profile: "/kwame-profile.jpg",
    online: true
  },
];

export default function ProviderDetail({ id }: { id: string }) {
  const router = useRouter();
  const provider = popularProviders.find(p => p.id === id);

  if (!provider) {
    return notFound();
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <div className="w-full md:hidden">
        <div className="relative w-full h-64 rounded-b-3xl overflow-hidden">
          <Image src={provider.image} alt="cover" fill className="object-cover" />
          <button 
            onClick={() => router.back()}
            className="absolute top-4 left-4 bg-white rounded-full p-2 hover:bg-gray-50 transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-50 transition">
            <Heart className="w-5 h-5" />
          </div>
        </div>

        <div className="p-6">
          <h1 className="text-2xl font-semibold">{provider.role}</h1>
          <div className="flex items-center gap-1 text-gray-500 mt-1">
            <MapPin className="w-4 h-4" />
            <span>{provider.location}</span>
          </div>

          <div className="flex items-center gap-1 mt-2">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="font-semibold">{provider.rating}</span>
          </div>

          <hr className="my-4" />
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            {provider.description}
          </p>

          <h2 className="text-lg font-semibold mb-2">My Services</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {provider.services.map((service, idx) => (
              <span key={idx} className="px-3 py-1 border rounded-full text-sm text-gray-700">
                {service}
              </span>
            ))}
          </div>

          <h2 className="text-lg font-semibold mb-3">Offered by</h2>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 bg-gray-200 rounded-xl overflow-hidden">
              <Image
                src={provider.profile}
                alt={provider.name}
                width={56}
                height={56}
                className="rounded-xl object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="font-semibold">{provider.name}</div>
              <div className={`text-sm flex items-center gap-1 ${provider.online ? 'text-green-500' : 'text-gray-400'}`}>
                <span className={`w-2 h-2 rounded-full inline-block ${provider.online ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                {provider.online ? 'Online' : 'Offline'}
              </div>
            </div>
            <button className="p-2 rounded-full hover:bg-gray-50 transition">
              <MessageCircle className="w-6 h-6 text-blue-600" />
            </button>
          </div>

          <button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold text-lg shadow-lg transition mb-4"
            onClick={() => router.push(`/bookings/${provider.id}`)}
          >
            Book Now
          </button>
        </div>

        <BottomNav />
      </div>
    </div>
  );
}
