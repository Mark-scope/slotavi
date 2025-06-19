'use client';

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useUser } from "@/context/UserContext";
import profilePic from "@/assets/images/Rectangle 34.png";
import calendarIcon from "@/assets/icons/calender.svg";
import clockIcon from "@/assets/icons/clock.svg";
import { useRouter } from "next/navigation";

const dummyBookings = [
  {
    id: '1',
    type: "Available",
    note: "Open For Booking",
    time: "09:30–10:30 am",
    day: "Monday",
    status: "available"
  },
  {
    id: '2',
    type: "Rayan Appiah",
    note: "Make up appointment",
    time: "09:30–10:30 am",
    day: "Monday",
    status: "booked"
  },
  {
    id: '3',
    type: "Break",
    note: "Lunch Break",
    time: "09:30–10:30 am",
    day: "Monday",
    status: "unavailable"
  }
];

const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [bookings, setBookings] = useState(dummyBookings);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const { isProfessional } = useUser();
  const router = useRouter();

  const addBooking = () => {
    const newBooking = {
      id: Date.now().toString(),
      type: "New Availability",
      note: "Custom appointment",
      time: "10:00–11:00 am",
      day: "Friday",
      status: "available"
    };
    setBookings([...bookings, newBooking]);
  };

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    const day = new Date(year, month, 1).getDay(); // 0=Sun,...6=Sat
    return (day + 6) % 7; // shift so that Monday = 0
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const monthName = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });

  const totalDays = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
  const calendarDays = Array(firstDay).fill(null).concat(Array.from({ length: totalDays }, (_, i) => i + 1));

  return (
    <div className="min-h-screen bg-[#f9f9f9] md:flex">
      <main className="flex-1 p-4 md:p-10 max-w-3xl mx-auto pb-20">
        {/* Profile Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Image src={profilePic} alt="profile" width={50} height={50} className="rounded-full" />
            <div>
              <div className="font-semibold">Ama Serwaa</div>
              <div className="text-green-500 text-sm flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>Online
              </div>
            </div>
          </div>

          {isProfessional && (
            <button
              className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-1.5 rounded-full shadow-sm transition"
              onClick={() => router.push('/manualschedule')}
            >
              <Plus className="w-4 h-4" />
              add schedule
            </button>
          )}
        </div>

        {/* Month Selector */}
        <div className="flex justify-between items-center mb-4">
          <button onClick={handlePrevMonth} className="p-2 rounded-full border hover:bg-gray-50 transition">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-xl font-semibold">{monthName} {currentYear}</h2>
          <button onClick={handleNextMonth} className="p-2 rounded-full border hover:bg-gray-50 transition">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-2 text-center mb-4">
          {daysOfWeek.map(day => (
            <div key={day} className="text-gray-500 font-medium">{day}</div>
          ))}
          {calendarDays.map((day, i) => (
            <div key={i}>
              {day ? (
                <button
                  onClick={() => setSelectedDate(`${monthName} ${day}, ${currentYear}`)}
                  className={`py-2 w-full rounded-lg hover:bg-blue-100 ${
                    selectedDate === `${monthName} ${day}, ${currentYear}`
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  {day}
                </button>
              ) : (
                <div></div>
              )}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex justify-around text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1"><span className="w-4 h-4 border rounded-full"></span>Available</div>
          <div className="flex items-center gap-1"><span className="w-4 h-4 bg-blue-600 rounded-full"></span>Booked</div>
          <div className="flex items-center gap-1"><span className="w-4 h-4 bg-teal-800 rounded-full"></span>Unavailable</div>
        </div>

        {/* Selected Day Label */}
        {selectedDate && (
          <div className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-xl mb-4 gap-2">
            <Image src={calendarIcon} alt="calendar" width={16} height={16} />
            <span>{selectedDate}</span>
          </div>
        )}

        {/* Booking List */}
        {bookings.map((b) => (
          <div
            key={b.id}
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
              {isProfessional && (
                <button
                  onClick={() => setBookings(bookings.filter(booking => booking.id !== b.id))}
                  className="text-xs text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
      </main>

      {/* Promotions */}
      <aside className="hidden lg:block w-1/4 p-6">
        <div className="bg-gray-100 p-4 rounded-lg">Promotions or Ads here</div>
      </aside>
    </div>
  );
}