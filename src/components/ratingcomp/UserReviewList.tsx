'use client';

import ReviewCard from '../../components/ratingcomp/ReviewCard';

type Review = {
  id: number;
  name: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
};

type Props = {
  reviews: Review[];
};

export default function UserReviewList({ reviews }: Props) {
  return (
    <div className="space-y-4">
      {reviews.map((r) => (
        <ReviewCard key={r.id} {...r} />
      ))}
    </div>
  );
}
