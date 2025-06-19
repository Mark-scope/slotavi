import React from 'react'
import Image from 'next/image'
import profileImg from '../assets/images/Pexels Photo by cottonbro studio.png'
import backIcon from '../assets/icons/Vector.svg'

const TopImage = () => {
  return (
    <div>

<div className="relative w-full h-60 rounded-b-3xl overflow-hidden">
        <Image src={profileImg} alt="profile" fill className="object-cover" />
        <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow">
          <Image src={backIcon} alt="back" width={24} height={24} />
        </button>
      </div>
    </div>
  )
}

export default TopImage