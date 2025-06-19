import React from 'react';
import { ArrowLeft } from 'lucide-react';
import NotificationHeader from '@/components/notificationComp/NotificationHeader';
import NotificationList from '@/components/notificationComp/NotificationList';


interface NotificationData {
    id: string;
    sender: string;
    message: string;
    time: string;
    isUnread: boolean;
    category: 'today' | 'earlier';
  }
// Mock data - replace with your actual data fetching
const mockNotifications: NotificationData[] = [
  {
    id: '1',
    sender: 'Rayan Appiah',
    message: 'sent you an appointment request',
    time: '2h ago',
    isUnread: true,
    category: 'today'
  },
  {
    id: '2',
    sender: 'Rayan Appiah',
    message: 'sent you an appointment request',
    time: '2h ago',
    isUnread: true,
    category: 'today'
  },
  {
    id: '3',
    sender: 'Rayan Appiah',
    message: 'sent you an appointment request',
    time: '2h ago',
    isUnread: true,
    category: 'today'
  },
  {
    id: '4',
    sender: 'Rayan Appiah',
    message: 'sent you an appointment request',
    time: '5 days ago',
    isUnread: false,
    category: 'earlier'
  },
  {
    id: '5',
    sender: 'Rayan Appiah',
    message: 'sent you an appointment request',
    time: '6 days ago',
    isUnread: false,
    category: 'earlier'
  },
  {
    id: '6',
    sender: 'Rayan Appiah',
    message: 'sent you an appointment request',
    time: '10 days ago',
    isUnread: false,
    category: 'earlier'
  }
];

interface NotificationPageProps {
  params: {
    id: string;
  };
}

export default function NotificationPage({ params }: NotificationPageProps) {
  const unreadCount = mockNotifications.filter(n => n.isUnread).length;
  const todayNotifications = mockNotifications.filter(n => n.category === 'today');
  const earlierNotifications = mockNotifications.filter(n => n.category === 'earlier');

  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      <NotificationHeader unreadCount={unreadCount} />
      
      <div className="px-6 space-y-6">
        {todayNotifications.length > 0 && (
          <NotificationList 
            title="Today" 
            notifications={todayNotifications} 
          />
        )}
        
        {earlierNotifications.length > 0 && (
          <NotificationList 
            title="Earlier" 
            notifications={earlierNotifications} 
          />
        )}
      </div>
    </div>
  );
}