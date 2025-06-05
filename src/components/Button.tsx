'use client';

interface PrimaryButtonProps {
  label: string;
  onClick?: () => void;
  margin?: string;
}

export default function PrimaryButton({
  label,
  onClick,
  margin = '4',
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 mt-${margin} text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200`}
    >
      {label}
    </button>
  );
}

