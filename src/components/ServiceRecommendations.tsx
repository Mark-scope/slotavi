'use client';

import React, { useState } from 'react';

interface ServiceCategory {
  id: string;
  name: string;
}

const serviceCategories: ServiceCategory[] = [
  { id: 'graphic-designers', name: 'Graphic Designers' },
  { id: 'makeup-artist', name: 'Makeup Artist' },
  { id: 'academic-tutors', name: 'Academic Tutors' },
  { id: 'photographers', name: 'Photographers' },
  { id: 'repair-maintenance', name: 'Repair and Maintenance' },
  { id: 'consultants', name: 'Consultants' },
  { id: 'therapy-counseling', name: 'Therapy and Counseling' },
  { id: 'hairdressers', name: 'Hairdresser\'s' },
  { id: 'cleaning-services', name: 'Cleaning Services' },
];

export default function ServiceRecommendations() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleDone = () => {
    // Handle the done action here
    console.log('Selected services:', selectedServices);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 lg:p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 max-w-2xl">
            Choose your one or more services of your interest
          </h2>
          <button 
            className="text-blue-500 font-medium hover:text-blue-600 transition-colors duration-200 whitespace-nowrap"
            onClick={() => setSelectedServices([])}
          >
            Skip
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8 md:mb-10">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => toggleService(category.id)}
              className={`px-6 py-3 rounded-full border text-center ${
                selectedServices.includes(category.id)
                  ? 'bg-blue-500 text-white border-blue-500 hover:bg-blue-600'
                  : 'bg-white text-gray-800 border-gray-300 hover:border-blue-500 hover:text-blue-500'
              } transition-all duration-200 transform hover:scale-[1.02]`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleDone}
            className="w-full max-w-md bg-blue-500 text-white py-4 rounded-lg font-medium hover:bg-blue-600 transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
} 