'use client';
import { ChevronLeft, ChevronRight, User, Bell, HelpCircle, LogOut } from 'lucide-react';

const Settings = () => {
  const settingsItems = [
    {
      id: 'profile',
      title: 'Profile',
      icon: User,
      hasNotification: false,
      onClick: () => console.log('Profile clicked')
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: Bell,
      hasNotification: true,
      onClick: () => console.log('Notifications clicked')
    },
    {
      id: 'help',
      title: 'Help',
      icon: HelpCircle,
      hasNotification: false,
      onClick: () => console.log('Help clicked')
    },
    {
      id: 'logout',
      title: 'Logout',
      icon: LogOut,
      hasNotification: false,
      onClick: () => console.log('Logout clicked')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
      </div>

    
      <div className="px-4 py-8">
        <div className="space-y-6">
          {settingsItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={item.onClick}
                className="w-full flex items-center justify-between py-4 px-2 hover:bg-white hover:rounded-lg transition-all duration-200 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <IconComponent className="w-6 h-6 text-gray-600" />
                    {item.hasNotification && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                    )}
                  </div>
                  <span className="text-lg text-gray-900 font-medium">
                    {item.title}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Settings;