import SiteLayout from "../templates/layout/SiteLayout";
import Image from 'next/image';
import heroImg from "../assets/images/heroImg.png";
import Button from '../components/Button'; 

export default function Home() {
  return (
   <SiteLayout>
    <div className="flex flex-row items-center justify-center text-left ">
      <div className="w-1/2 flex flex-col items-start justify-center px-10 space-y-4">
        <h1 className="text-5xl font-bold mb-4">Streamline Appointments,<br/> Simplify Scheduling.</h1>
        <p className="text-gray-600">Find and book appointments with top professionals, with ease, flexibility and convenience.</p>
        <Button label="Get Started" margin="8" />
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <Image src={heroImg} alt="Timify Hero Image" width={450} height={120} /> 
      </div>
    </div>
    </SiteLayout>
  );
}

