import { UserProvider } from '@/context/UserContext';
import  {ProBookingsProvider} from '../../../context/ProBookingsContext'; // or ProBookingsContext
import { ReactNode } from 'react';

export default function ProfessionalLayout({ children }: { children: ReactNode }) {
  return (
    <UserProvider>
      <div className="min-h-screen flex">
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </UserProvider>
  );
}
