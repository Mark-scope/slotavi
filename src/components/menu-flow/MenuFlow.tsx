'use client';

import { User, Bell, Settings } from 'lucide-react';
import { useRouter } from 'next/navigation';

const MenuFlow = ({ onClose }: { onClose: () => void }) => {
  const router = useRouter(); // moved inside component and corrected import

  const handleClick = () => {
    router.push('/notification/2');
  };

  return (
    <div className="w-full bg-white rounded-t-3xl shadow-lg">
      {/* top bar handle */}
      <button
        className="w-full flex justify-center pt-3 pb-2 cursor-pointer"
        onClick={onClose}
      >
        <div className="w-10 h-1 bg-gray-300 rounded-full" />
      </button>

      {/* menu items */}
      <div className="p-4 flex flex-col gap-4">
        <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <User className="w-6 h-6 text-gray-700" />
          <span className="text-gray-800 text-lg">profile</span>
        </div>

        <div
          className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md transition-colors"
          onClick={handleClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleClick()}
        >
          <Bell className="w-6 h-6 text-gray-700" />
          <span className="text-gray-800 text-lg">notifications</span>
        </div>

        <button className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
        onClick={() => router.push('/settings')}>
          <Settings className="w-6 h-6 text-gray-700" />
          <span className="text-gray-800 text-lg">settings</span>
        </button>
      </div>
    </div>
  );
};

export default MenuFlow;
