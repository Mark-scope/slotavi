'use client';

import Image from 'next/image';

type Props = {
  name: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
};

export default function ReviewCard({ name, rating, comment, avatar, date }: Props) {
  return (
    <div className="flex gap-3">
      <Image src={avatar} alt="user" width={40} height={40} className="rounded-xl" />
      <div className="flex-1 overflow-hidden">
        <div className="flex justify-between items-center">
          <p className="font-semibold">{name}</p>
          <span className="text-gray-400 text-sm">{date}</span>
        </div>
        <div className="flex gap-1 text-yellow-400 text-sm">
          {[...Array(5)].map((_, i) => (
            <span key={i}>{i < Math.round(rating) ? '★' : '☆'}</span>
          ))}
          <span className="text-gray-500 ml-2">({rating.toFixed(1)})</span>
        </div>
        <p className="text-sm mt-1 text-gray-700 break-words whitespace-pre-wrap">
          {comment}
        </p>
      </div>
    </div>
  );
}
