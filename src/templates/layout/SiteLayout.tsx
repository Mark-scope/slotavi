'use client';

// import Navbar from '../../components/Navbar';


type Props = {
  children: React.ReactNode;
};

export default function SiteLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* <Navbar /> */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {children}
      </main>
    </div>
  );
}
