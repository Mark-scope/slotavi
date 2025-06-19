'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { StarIcon } from '@heroicons/react/24/solid';

export default function RateAndReviewModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [rating, setRating] = useState(4);
  const [comment, setComment] = useState('');

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 overflow-y-auto">
  <div className="flex items-center justify-center min-h-screen bg-white/30 backdrop-blur-sm p-4">
    <Dialog.Panel className="bg-white/90 rounded-2xl p-6 w-full max-w-md shadow-lg">
      <Dialog.Title className="text-center text-2xl font-bold mb-4">Rate and Review</Dialog.Title>

      <p className="text-center text-gray-500 mb-2">Rating ({rating}/5)</p>

      <div className="flex justify-center space-x-2 mb-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <StarIcon
            key={i}
            className={`w-8 h-8 cursor-pointer ${
              i <= rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            onClick={() => setRating(i)}
          />
        ))}
      </div>

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full h-32 border-2 border-blue-500 rounded-xl p-2 mb-6"
        placeholder="Write your review..."
      />

      <div className="flex justify-between space-x-4">
        <button
          onClick={onClose}
          className="flex-1 py-2 bg-blue-500 text-white rounded-lg font-semibold"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            console.log({ rating, comment });
            onClose();
          }}
          className="flex-1 py-2 bg-blue-500 text-white rounded-lg font-semibold"
        >
          Post
        </button>
      </div>
    </Dialog.Panel>
  </div>
</Dialog>

  );
}
