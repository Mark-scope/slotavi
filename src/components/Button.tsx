'use client';

export default function Button({ label }: { label: string }) {
  return (
    <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium text-center mt-6 hover:bg-blue-700">
      {label}
    </button>
  );
}
