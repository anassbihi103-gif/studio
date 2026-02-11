import AboutSection from '@/components/about-section';
import CompaniesSection from '@/components/companies-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import PortfolioSection from '@/components/portfolio-section';
import SkillsSection from '@/components/skills-section';
import StatsSection from '@/components/stats-section';

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <CompaniesSection />
        <PortfolioSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
