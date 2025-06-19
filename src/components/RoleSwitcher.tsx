'use client';

import { useUser } from '@/context/ProBookingsContext';

const RoleSwitcher = () => {
  const { role, switchRole } = useUser();

  return (
    <div className="fixed top-4 right-4 bg-white p-4 rounded-lg shadow-lg border z-50">
      <h3 className="font-medium mb-2">Test Role Switcher</h3>
      <div className="space-x-2">
        <button
          onClick={() => switchRole('client')}
          className={`px-3 py-1 rounded text-sm ${
            role === 'client' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Client
        </button>
        <button
          onClick={() => switchRole('professional')}
          className={`px-3 py-1 rounded text-sm ${
            role === 'professional' ? 'bg-green-500 text-white' : 'bg-gray-200'
          }`}
        >
          Professional
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-2">Current: {role}</p>
    </div>
  );
};

export default RoleSwitcher;