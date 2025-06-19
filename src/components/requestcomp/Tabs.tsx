'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function Tabs() {
  const router = useRouter();
  const pathname = usePathname();

  // fix path check
  const currentTab = pathname.includes('reminder') ? 'reminders' : 'request';

  return (
    
    <div className="flex justify-around text-lg mt-4">
      <button
        className={`pb-2 border-b-2 ${
          currentTab === 'request'
            ? 'border-blue-600 text-blue-600 font-semibold'
            : 'text-gray-500'
        }`}
        onClick={() => router.push('/request')} 
      >
        Requests
      </button>
      <button
        className={`pb-2 border-b-2 ${
          currentTab === 'reminders'
            ? 'border-blue-600 text-blue-600 font-semibold'
            : 'text-gray-500'
        }`}
        onClick={() => router.push('/reminders')}
      >
        Reminders
      </button>
    </div>
  );
}
