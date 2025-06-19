'use client';

type Props = {
  breakdown: {
    excellent: number;
    good: number;
    average: number;
    poor: number;
  };
  total: number;
};

export default function RatingBreakdown({ breakdown, total }: Props) {
  const getWidth = (count: number) => `${(count / total) * 100}%`;

  return (
    <div className="space-y-2">
      {Object.entries(breakdown).map(([label, count]) => (
        <div key={label}>
          <div className="flex justify-between text-sm">
            <span className="capitalize">{label}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div
              className="bg-yellow-400 h-2 rounded-full"
              style={{ width: getWidth(count) }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
