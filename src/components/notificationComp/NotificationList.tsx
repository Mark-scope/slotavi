import NotificationItem from './NotificationItem';

interface NotificationData {
  id: string;
  sender: string;
  message: string;
  time: string;
  isUnread: boolean;
  category: 'today' | 'earlier';
}

interface NotificationListProps {
  title: string;
  notifications: NotificationData[];
}

export default function NotificationList({ title, notifications }: NotificationListProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-700 mb-2">{title}</h2>
      <div className="space-y-4">
        {notifications.map(notification => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </div>
    </div>
  );
}
