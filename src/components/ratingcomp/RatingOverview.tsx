'use client';

type Props = {
  average: number;
  total: number;
};

export default function RatingOverview({ average, total }: Props) {
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold">Overall Rating</h2>
      <div className="text-5xl font-bold text-blue-950 mt-2">{average.toFixed(1)}</div>
      <div className="flex justify-center gap-1 mt-1">
        {[...Array(5)].map((_, i) => (
          <span key={i}>{i < Math.round(average) ? '⭐' : '☆'}</span>
        ))}
      </div>
      <p className="text-gray-500 mt-1">Based on {total} reviews</p>
    </div>
  );
}
