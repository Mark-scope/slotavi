'use client';

import { useState } from 'react';
import RateAndReviewModal from '@/components/ratingcomp/RateansReviewModal';
import RatingOverview from '@/components/ratingcomp/RatingOverview';
import RatingBreakdown from '@/components/ratingcomp/RatingBreakdown';
import UserReviewList from '@/components/ratingcomp/UserReviewList';
import WriteReviewButton from '@/components/ratingcomp/WriteAndReview';

export default function RatingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ratingData = {
    average: 3.9,
    totalReviews: 20,
    breakdown: {
      excellent: 10,
      good: 5,
      average: 3,
      poor: 2,
    },
    reviews: [
      {
        id: 1,
        name: 'Ama Serwaa',
        rating: 4.0,
        comment: 'Lorem ipsum dolor sit amet...',
        avatar: '/assets/images/avatar1.png',
        date: '2 days ago',
      },
      {
        id: 2,
        name: 'Ama Serwaa',
        rating: 4.0,
        comment: 'Lorem ipsum dolor sit amet...',
        avatar: '/assets/images/avatar2.png',
        date: '2 days ago',
      },
    ]
  };

  return (
    <div className="min-h-screen p-4 space-y-6 pb-20"> {/* extra bottom padding for button space */}
      {/* Header */}
      <div className="flex items-center justify-between mt-10">
        <h1 className="text-4xl font-bold">Rating</h1>
        <button
          onClick={() => window.history.back()}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 text-gray-800"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Ratings */}
      <RatingOverview average={ratingData.average} total={ratingData.totalReviews} />
      <RatingBreakdown breakdown={ratingData.breakdown} total={ratingData.totalReviews} />
      <UserReviewList reviews={ratingData.reviews} />

      {/* Floating Button */}
      <WriteReviewButton onClick={() => setIsModalOpen(true)} />

      {/* Modal */}
      <RateAndReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        
    </div>
  );
}
