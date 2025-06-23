'use client'

import React, { useState, useCallback, useMemo } from 'react';
import { Clock, Check } from 'lucide-react';

const TimeSelectionPage = () => {
  // State for selected times (can select multiple)
  const [selectedTimes, setSelectedTimes] = useState(new Set());
  const [showCustomTime, setShowCustomTime] = useState(false);
  const [customTime, setCustomTime] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Time slots data
  const timeSlots = useMemo(() => ({
    morning: [
      '08:00', '08:30', '09:00', '09:30',
      '10:00', '10:30', '11:00', '11:30'
    ],
    afternoon: [
      '12:00', '12:30', '01:00', '01:30',
      '02:00', '02:30', '03:00', '03:30'
    ],
    evening: [
      '04:00', '04:30', '05:00', '05:30',
      '06:00', '06:30', '07:00'
    ]
  }), []);

  // Handle time slot selection
  const handleTimeSelect = useCallback((time) => {
    setSelectedTimes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(time)) {
        newSet.delete(time);
      } else {
        newSet.add(time);
      }
      return newSet;
    });
  }, []);

  // Handle custom time toggle
  const handleCustomTimeToggle = useCallback(() => {
    setShowCustomTime(prev => !prev);
    if (showCustomTime && customTime) {
      setSelectedTimes(prev => {
        const newSet = new Set(prev);
        newSet.delete(`custom-${customTime}`);
        return newSet;
      });
      setCustomTime('');
    }
  }, [showCustomTime, customTime]);

  // Handle custom time input
  const handleCustomTimeChange = useCallback((e) => {
    const value = e.target.value;
    setCustomTime(value);
    
    if (value) {
      setSelectedTimes(prev => {
        const newSet = new Set(prev);
        // Remove previous custom time if exists
        Array.from(newSet).forEach(time => {
          if (time.startsWith('custom-')) {
            newSet.delete(time);
          }
        });
        // Add new custom time
        newSet.add(`custom-${value}`);
        return newSet;
      });
    }
  }, []);

  // Handle save
  const handleSave = useCallback(async () => {
    if (selectedTimes.size === 0) {
      alert('check');
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const selectedTimesArray = Array.from(selectedTimes).map(time => 
        time.startsWith('custom-') ? time.replace('custom-', '') + ' (Custom)' : time
      );
      
      console.log('Selected times:', selectedTimesArray);
      alert(`Successfully saved times: ${selectedTimesArray.join(', ')}`);
      
      // Reset selections after successful save
      setSelectedTimes(new Set());
      setCustomTime('');
      setShowCustomTime(false);
      
    } catch (error) {
      console.error('Error saving times:', error);
      alert('Failed to save times. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [selectedTimes]);

  // Render time slot button
  const renderTimeSlot = useCallback((time) => {
    const isSelected = selectedTimes.has(time);
    
    return (
      <button
        key={time}
        onClick={() => handleTimeSelect(time)}
        className={`
          px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200
          ${isSelected 
            ? 'bg-blue-600 text-white shadow-md transform scale-105' 
            : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:bg-blue-50'
          }
          active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
        `}
        disabled={isLoading}
      >
        {time}
        {isSelected && (
          <Check className="w-3 h-3 inline-block ml-1" />
        )}
      </button>
    );
  }, [selectedTimes, handleTimeSelect, isLoading]);

  // Render time section
  const renderTimeSection = useCallback((title, times) => (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      <div className="grid grid-cols-4 gap-3">
        {times.map(renderTimeSlot)}
      </div>
    </div>
  ), [renderTimeSlot]);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="bg-white p-6 border-b border-gray-100">
          <h1 className="text-2xl font-bold text-gray-900">Select Time</h1>
          <p className="text-gray-600 mt-1">Choose your preferred appointment times</p>
          {selectedTimes.size > 0 && (
            <p className="text-blue-600 text-sm mt-2">
              {selectedTimes.size} time{selectedTimes.size > 1 ? 's' : ''} selected
            </p>
          )}
        </div>

        {/* Time Slots */}
        <div className="p-6 space-y-6">
          {renderTimeSection('Morning', timeSlots.morning)}
          {renderTimeSection('Afternoon', timeSlots.afternoon)}
          {renderTimeSection('Evening', timeSlots.evening)}

          {/* Custom Time Section */}
          <div className="border-t pt-6">
            <button
              onClick={handleCustomTimeToggle}
              className={`
                w-full flex items-center justify-center gap-3 p-4 rounded-xl font-medium transition-all duration-200
                ${showCustomTime 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                }
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
              `}
              disabled={isLoading}
            >
              <Clock className="w-5 h-5" />
              Custom time
              {showCustomTime && <Check className="w-4 h-4" />}
            </button>

            {/* Custom Time Input */}
            {showCustomTime && (
              <div className="mt-4 animate-in slide-in-from-top duration-200">
                <label htmlFor="custom-time" className="block text-sm font-medium text-gray-700 mb-2">
                  Enter custom time
                </label>
                <input
                  id="custom-time"
                  type="time"
                  value={customTime}
                  onChange={handleCustomTimeChange}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={isLoading}
                />
              </div>
            )}
          </div>
        </div>

        {/* Save Button */}
        <div className="p-6 bg-gray-50">
          <button
            onClick={handleSave}
            disabled={selectedTimes.size === 0 || isLoading}
            className={`
              w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200
              ${selectedTimes.size > 0 && !isLoading
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg active:scale-95' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
            `}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Saving...
              </div>
            ) : (
              'Save'
            )}
          </button>
        </div>

        {/* Selected Times Preview */}
        {selectedTimes.size > 0 && (
          <div className="px-6 pb-6">
            <div className="bg-blue-50 rounded-xl p-4">
              <h3 className="font-medium text-blue-900 mb-2">Selected Times:</h3>
              <div className="flex flex-wrap gap-2">
                {Array.from(selectedTimes).map(time => (
                  <span 
                    key={time}
                    className="bg-blue-200 text-blue-800 px-2 py-1 rounded-lg text-xs font-medium"
                  >
                    {time.startsWith('custom-') ? time.replace('custom-', '') + ' (Custom)' : time}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeSelectionPage;