import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import CompanyLogos from '@/components/sections/CompanyLogos';
import CallToAction from '@/components/sections/CallToAction';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#53389e] from-purple-600 via-purple-500 to-indigo-500">

      <div className="flex flex-col text-white min-h-[auto] md:min-h-screen">
        <Header />
        <HeroSection />
      </div>


      <CompanyLogos />

      <CallToAction />
    </div>
  );
}