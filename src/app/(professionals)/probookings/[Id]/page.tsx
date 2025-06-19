'use client';

import Image from "next/image";
import { useProBookings } from "@/context/ProBookingsContext";
import profilePic from "@/assets/images/Rectangle 34.png";
import leftArrow from "@/assets/icons/Vector.svg";
import rightArrow from "@/assets/icons/flowbite_arrow-left-outline.svg";
import calendarIcon from "@/assets/icons/calender.svg";
import clockIcon from "@/assets/icons/clock.svg";

export default function ProfessionalBooking({ params }: { params: { id: string } }) {
  const {
    bookings,
    loading,
    selectedDate,
    setSelectedDate,
    addBooking,
    updateBooking,
    deleteBooking
  } = useProBookings();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f9f9f9] flex items-center justify-center">
        <div>Loading professional bookings...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9f9f9] md:flex">
      {/* Main content */}
      <main className="flex-1 p-4 md:p-10 max-w-3xl mx-auto pb-20">
        {/* Profile Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Image
              src={profilePic}
              alt="profile"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <div className="font-semibold">ama serwaa</div>
              <div className="text-green-500 text-sm flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                online
              </div>
            </div>
          </div>

          <button 
            className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-1.5 rounded-full shadow-sm transition"
            onClick={() => addBooking({
              type: "New Availability",
              note: "Custom appointment",
              time: "10:00–11:00 am",
              day: "Friday"
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            add schedule
          </button>
        </div>

        {/* Month Selector */}
        <div className="flex justify-between items-center mb-4">
          <button className="p-2 rounded-full border">
            <Image src={leftArrow} alt="left" width={20} height={20} />
          </button>
          <h2 className="text-xl font-semibold">January 2024</h2>
          <button className="p-2 rounded-full border">
            <Image src={rightArrow} alt="right" width={20} height={20} />
          </button>
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-2 text-center mb-4">
          {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
            <div key={day} className="text-gray-500 font-medium">{day}</div>
          ))}
          {Array.from({ length: 31 }, (_, i) => {
            const day = i + 1;
            const isSelected = [6, 16, 27].includes(day);
            return (
              <button
                key={day}
                className={`py-2 rounded-lg ${isSelected ? "bg-blue-600 text-white" : "bg-white text-gray-800"} hover:bg-blue-100`}
                onClick={() => setSelectedDate(`Day ${day}, January 2024`)}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex justify-around text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <span className="w-4 h-4 border rounded-full"></span>Available
          </div>
          <div className="flex items-center gap-1">
            <span className="w-4 h-4 bg-blue-600 rounded-full"></span>Booked
          </div>
          <div className="flex items-center gap-1">
            <span className="w-4 h-4 bg-teal-800 rounded-full"></span>Unavailable
          </div>
        </div>

        {/* Selected Day Label */}
        <div className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-xl mb-4 gap-2">
          <Image src={calendarIcon} alt="calendar" width={16} height={16} />
          <span>{selectedDate}</span>
        </div>

        {/* Booking List */}
        {bookings.map((b, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl mb-4 ${
              b.status === "available"
                ? "bg-white border text-blue-600"
                : b.status === "booked"
                ? "bg-blue-600 text-white"
                : "bg-teal-800 text-white"
            }`}
          >
            <div className="font-semibold">{b.type}</div>
            <div className="text-sm mb-3">{b.note}</div>
            <div className="flex items-center bg-blue-50 text-black px-3 py-2 rounded-lg text-sm gap-2">
              <Image src={clockIcon} alt="clock" width={16} height={16} />
              {b.time}
              <span className="ml-auto">{b.day}</span>
              <button 
                onClick={() => updateBooking(idx, { status: 'booked' })}
                className="text-xs text-blue-600 hover:text-blue-800"
              >
                Edit
              </button>
              <button 
                onClick={() => deleteBooking(idx)}
                className="text-xs text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </main>

      {/* Promotions (Desktop only) */}
      <aside className="hidden lg:block w-1/4 p-6">
        <div className="bg-gray-100 p-4 rounded-lg">Promotions or Ads here</div>
      </aside>
    </div>
  );
}