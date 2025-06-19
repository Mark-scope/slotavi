'use client';


type Props = {
  children: React.ReactNode;
};

export default function SiteLayout({ children }: Props) {
  return (
    <div className="relative min-h-screen bg-white text-black flex">
      <div className="flex-1 min-h-screen pb-16 lg:pb-0">
        <main className="max-w-7xl mx-auto px-6 py-12">
          <div className="w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}