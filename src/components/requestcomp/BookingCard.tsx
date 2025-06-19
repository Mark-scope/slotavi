// components/requestcomp/BookingCard.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import clockIcon from "../../assets/icons/clock.svg";
import smallpic from "../../assets/images/Rectangle 34.png";
import { useUser } from '@/context/UserContext';

interface Booking {
  id: string;
  name: string;
  note: string;
  time: string;
  day: string;
  img: string;
  status: 'pending' | 'approved' | 'cancelled';
}

const BookingCard = () => {
  const { isProfessional } = useUser();
  
  // Sample bookings data with status
  const bookings: Booking[] = Array(4).fill({
    id: Math.random().toString(36).substring(2, 9),
    name: 'Rayan Appiah',
    note: 'Make up appointment',
    time: '09:30–10:30 am',
    day: 'Monday',
    img: smallpic,
    status: 'pending'
  });

  const handleApprove = (id: string) => {
    // Handle approval logic
    console.log(`Approved booking ${id}`);
  };

  const handleReject = (id: string) => {
    // Handle rejection logic
    console.log(`Rejected booking ${id}`);
  };

  const handleCancel = (id: string) => {
    // Handle cancellation logic
    console.log(`Cancelled booking ${id}`);
  };

  return (
    <div className="flex flex-col gap-4 mt-4 px-4">
      {bookings.map((b) => (
        <div key={b.id} className="bg-white shadow-md rounded-xl p-4">
          <div className="flex items-center gap-3">
            <Image 
              src={b.img} 
              alt="avatar" 
              width={40} 
              height={40} 
              className="rounded-full" 
            />
            <div>
              <div className="font-semibold">{b.name}</div>
              <div className="text-sm text-gray-600">{b.note}</div>
            </div>
            
            <div className="ml-auto flex gap-2">
              {isProfessional ? (
                <>
                  <button 
                    onClick={() => handleApprove(b.id)}
                    className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                  >
                    Approve
                  </button>
                  <button 
                    onClick={() => handleReject(b.id)}
                    className=" text-xl font-bold"
                  >
                    ×
                  </button>
                </>
              ) : (
                <button 
                onClick={() => handleReject(b.id)}
                className=" text-xl font-bold"
              >
                ×
              </button>
              )}
            </div>
          </div>
          
          <div className="flex items-center bg-blue-50 text-sm px-3 py-2 mt-3 rounded-md gap-2">
            <Image src={clockIcon} alt="clock" className="w-4 h-4" /> 
            {b.time} <span className="ml-auto">{b.day}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingCard;