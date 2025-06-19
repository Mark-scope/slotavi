'use client'

import { useState } from "react"

type Props = {
  onClick: () => void
}

export default function WriteReviewButton({ onClick }: Props) {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md p-4 bg-white border-t border-gray-100">
      <button
        onClick={onClick}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        className={`w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-150 ${
          isPressed 
            ? 'bg-blue-700 scale-98 shadow-sm' 
            : 'hover:bg-blue-700 shadow-lg'
        }`}
      >
        Write A Review
      </button>
    </div>
  )
}
