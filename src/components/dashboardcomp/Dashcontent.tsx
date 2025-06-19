'use client';

import { useState } from 'react';
import Menu from '../../components/dashboardcomp/Menu';
import Services from '../../components/dashboardcomp/Services';
import PopularProv from '../../components/dashboardcomp/PopularProv';
import HotDeals from '../../components/dashboardcomp/HotDeals';
import BottomNav from '../../components/ButtomNav';

export default function DashboardContent() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 max-w-2xl mx-auto w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">who do you want to book?</h1>
          <div className="flex gap-2">
            <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
          </div>
        </div>

        <Services />
        <PopularProv />
        <HotDeals />
      </main>

      <div className={showMenu ? 'hidden' : ''}>
  <BottomNav />
</div>
    </div>
  );
}
