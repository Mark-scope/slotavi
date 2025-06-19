'use client';

interface NotificationData {
  id: string;
  sender: string;
  message: string;
  time: string;
  isUnread: boolean;
  category: 'today' | 'earlier';
}

interface NotificationItemProps {
  notification: NotificationData;
}

export default function NotificationItem({ notification }: NotificationItemProps) {
  return (
    <div
      onClick={() => console.log('clicked:', notification.id)}
      className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
    >
      <div className="flex-shrink-0 mt-2">
        <div
          className={`w-2 h-2 rounded-full ${
            notification.isUnread ? 'bg-red-500' : 'bg-gray-300'
          }`}
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-gray-900">
              <span className="text-blue-600 font-medium">{notification.sender}</span>
              <span className="text-gray-600 ml-1">{notification.message}</span>
            </p>
          </div>
          <span className="text-sm text-gray-400 ml-4 flex-shrink-0">
            {notification.time}
          </span>
        </div>
      </div>
    </div>
  );
}
