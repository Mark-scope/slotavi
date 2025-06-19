'use client'

import React from 'react'
import Image from 'next/image'
import userImg from '../../assets/images/Rectangle 34.png'

const reminders = [
    {
      id: 1,
      name: "Rayan Appiah",
      type: "Make up appointment",
      time: "09:30-10:30 am",
      day: "Monday",
      avatar: userImg,
    },
    {
      id: 2,
      name: "Rayan Appiah",
      type: "Make up appointment",
      time: "09:30-10:30 am",
      day: "Monday",
      avatar: userImg,
    },
    {
      id: 3,
      name: "Rayan Appiah",
      type: "Make up appointment",
      time: "09:30-10:30 am",
      day: "Monday",
      avatar: userImg,
    },
  ];

const ReminderList = () => {
  return (
    <div>
        <div className="flex flex-col gap-4 mt-4 px-4">
        {reminders.map((reminder) => (
          <div key={reminder.id} className="bg-white rounded-xl shadow p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image src={reminder.avatar} alt={reminder.name} width={40} height={40} className="rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-base">{reminder.name}</div>
                  <div className="text-blue-700 text-sm font-medium">{reminder.type}</div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-red-500 text-xl font-bold">×</button>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2 mt-1">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <span className="text-base font-medium text-blue-900">{reminder.time}</span>
              <span className="ml-auto text-base text-blue-900 font-medium">{reminder.day}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReminderList