// components/NotificationHeader.tsx
'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface NotificationHeaderProps {
  unreadCount: number;
}

const NotificationHeader: React.FC<NotificationHeaderProps> = ({ unreadCount }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-gray-100">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mt-[45px]">Notifications</h1>
        <p className="text-gray-500">
          You have <span className="text-blue-500 font-medium">{unreadCount} unread</span> notifications
        </p>
      </div>
      
      <button
        onClick={handleGoBack}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        aria-label="Go back"
      >
        <ArrowLeft className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
};

export default NotificationHeader;