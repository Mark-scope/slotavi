import React from 'react'
import Image from 'next/image'
import calendarIcon from '../../assets/icons/calender.svg'

const DateSel = () => {
  return (
    <div>
        <div className="flex items-center gap-2 mt-4 px-4">
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl font-medium text-base">
          <Image src={calendarIcon} alt="calendar" width={20} height={20} />
          Thursday, January 23
        </button>
      </div>

    </div>
  )
}

export default DateSel