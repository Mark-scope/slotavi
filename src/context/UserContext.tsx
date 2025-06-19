// context/UserContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type UserRole = 'professional' | 'client';

interface UserContextType {
  role: UserRole;
  isProfessional: boolean;
  isClient: boolean;
  setRole: (role: UserRole) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ 
  children,
  defaultRole = 'client'
}: { 
  children: ReactNode;
  defaultRole?: UserRole;
}) {
  const [role, setRole] = useState<UserRole>(defaultRole);

  const value = {
    role,
    isProfessional: role === 'professional',
    isClient: role === 'client',
    setRole
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}