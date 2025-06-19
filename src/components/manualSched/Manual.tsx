
// components/ManualSchedule.jsx
'use client';
import { useState } from 'react';
import { ChevronLeft, Home, Calendar, Play, Heart } from 'lucide-react';
import ButtomNav from '../ButtomNav';

const ManualSchedule = () => {
  const [formData, setFormData] = useState({
    title: '',
    startTime: '08:30',
    endTime: '',
    notes: ''
  });

  const handleInputChange = (field :any, value :any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Manual Schedule</h1>
        <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Form Content */}
      <div className="flex-1 px-4 py-6 space-y-8">
        {/* Title Field */}
        <div className="space-y-2">
          <label className="text-gray-400 text-sm font-medium">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            className="w-full text-2xl font-medium text-gray-900 bg-transparent border-none outline-none placeholder-gray-300"
            placeholder="Enter title"
          />
        </div>

        {/* Start Time Field */}
        <div className="space-y-2">
          <label className="text-gray-400 text-sm font-medium">Start time</label>
          <input
            type="time"
            value={formData.startTime}
            onChange={(e) => handleInputChange('startTime', e.target.value)}
            className="w-full text-2xl font-medium text-gray-900 bg-transparent border-none outline-none"
          />
        </div>

        {/* End Time Field */}
        <div className="space-y-4">
          <label className="text-gray-400 text-sm font-medium">End time</label>
          <div className="border-b border-blue-500 pb-2">
            <input
              type="time"
              value={formData.endTime}
              onChange={(e) => handleInputChange('endTime', e.target.value)}
              className="w-full text-lg text-gray-900 bg-transparent border-none outline-none"
              placeholder="Select end time"
            />
          </div>
        </div>

        {/* Notes Field */}
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-1 h-16 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
            <div className="flex-1">
              <textarea
                value={formData.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                placeholder="Note something down"
                className="w-full text-gray-400 bg-transparent border-none outline-none resize-none text-base leading-relaxed"
                rows={4}
              />
            </div>
          </div>
        </div>
      </div>
<ButtomNav />
    
    </div>
  );
};

export default ManualSchedule;