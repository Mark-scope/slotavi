'use client';

import Image from 'next/image';
import search from '@/assets/icons/search.svg';
import notification from '../../assets/icons/menuIcon.svg';
import MenuFlow from '@/components/menu-flow/MenuFlow';

export default function Menu({
  showMenu,
  setShowMenu,
}: {
  showMenu: boolean;
  setShowMenu: (val: boolean) => void;
}) {
  return (
    <>
      {/* top icons */}
      <div className="flex gap-2 items-center">
        <button className="lg:hidden">
          <Image src={search} alt="search" width={38} height={35} />
        </button>
        <button onClick={() => setShowMenu(true)} className="lg:hidden">
          <Image src={notification} alt="notification" width={22} height={19} />
        </button>
      </div>

      {/* bottom modal menu */}
      {showMenu && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/30 backdrop-blur-sm">
          <div className="w-[390px] h-[209px]">
            <MenuFlow onClose={() => setShowMenu(false)} />
          </div>
        </div>
      )}
    </>
  );
}
