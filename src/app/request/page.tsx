import Tabs from '@/components/requestcomp/Tabs';
import HeaderImage from '@/components/requestcomp/HeaderImage';
import BookingCard from '@/components/requestcomp/BookingCard';
import DateSel from '../reminders/DateSel';
import { UserProvider } from '@/context/UserContext';

export default function BookingPage() {
  // In a real app, you would determine the role from authentication
  // For now, we'll hardcode it as 'professional' or 'client'
  const userRole = 'client'; // Change to 'client' to test client view

  return (
    <UserProvider defaultRole={userRole}>
      <div className="min-h-screen bg-white md:flex">
        <div className="min-h-screen bg-white flex flex-col pb-28">
          {/* Header Image for mobile */}
          <HeaderImage/>
          <Tabs/>
          
          {/* Date selector */}
          <DateSel/>  
          
          {/* Booking Cards - will show appropriate actions based on role */}
          <BookingCard/>
        </div>
      </div>
    </UserProvider>
  );
}