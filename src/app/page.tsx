import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import StatsSection from '@/components/stats-section';
import PortfolioSection from '@/components/portfolio-section';
import SkillsSection from '@/components/skills-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <HeroSection />
        <StatsSection />
        <PortfolioSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
