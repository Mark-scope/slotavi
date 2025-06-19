'use client';
import { useState } from 'react';
import { ChevronLeft, Plus, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(10);
  const router = useRouter();
  
  const dates = [
    { date: 10, day: 'We', selected: true },
    { date: 11, day: 'Th', selected: false },
    { date: 12, day: 'Fr', selected: false },
    { date: 13, day: 'Sa', selected: false },
  ];

  const scheduleItems = [
    {
      id: 1,
      time: '08:30-9:30 am',
      title: 'Booked',
      description: 'Cornrows appointement',
      status: 'booked'
    },
    {
      id: 2,
      time: '11:30-01:30 pm',
      title: 'Break',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'break'
    },
    {
      id: 3,
      time: '03:30-05:30 pm',
      title: 'Open for booking',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ni.. tempor',
      status: 'open'
    },
    {
      id: 4,
      time: '06:30-daybreak',
      title: 'Break',
      description: '',
      status: 'break'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Header */}
      <div className="bg-white px-4 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Schedule</h1>
        <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Date Selector */}
      <div className="px-4 pb-6 bg-white">
        <div className="flex space-x-3">
          {dates.map((dateItem) => (
            <button
              key={dateItem.date}
              onClick={() => setSelectedDate(dateItem.date)}
              className={`flex-1 max-w-[80px] h-20 rounded-2xl flex flex-col items-center justify-center text-center transition-all ${
                dateItem.date === selectedDate
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span className="text-xl font-medium">{dateItem.date}</span>
              <span className="text-sm">{dateItem.day}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Schedule Items */}
      <div className="px-4 space-y-6 pb-20">
        {scheduleItems.map((item) => (
          <div key={item.id} className="flex space-x-4">
            {/* Number Circle */}
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
              {item.id}
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <div className="text-sm text-gray-500 mb-1">{item.time}</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h3>
              {item.description && (
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3">
        <button className="w-12 h-12 bg-blue-500 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
        onClick={() => router.push('/manualschedule/schedule')}>
          <Plus className="w-6 h-6 text-white" />
        </button>
        <button className="w-12 h-12 bg-black rounded-full shadow-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
          <X className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Schedule;