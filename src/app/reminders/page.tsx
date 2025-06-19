'use client'

import BottomNav from "@/components/ButtomNav";
import ReminderList from "@/components/reminder/ReminderList";
import DateSel from "./DateSel";
import TopImage from "@/components/TopImage";
import Tabs from "@/components/requestcomp/Tabs";
import HeaderImage from "@/components/requestcomp/HeaderImage";



export default function Reminders() {
  return (
    <div className="min-h-screen bg-white flex flex-col pb-28">
      {/* Top Profile Image */}
      <HeaderImage  />

      {/* Tabs */}
      <Tabs/>

      {/* Date Selector */}
      <DateSel />
      <ReminderList />

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
} 