import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import EmployeeAdvocacySection from '@/components/EmployeeAdvocacySection';
import LeadershipSection from '@/components/LeadershipSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <ExpertiseSection />
      <EmployeeAdvocacySection />
      <LeadershipSection />
      <ContactSection />
    </main>
  );
}