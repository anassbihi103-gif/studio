import AboutSection from '@/components/about-section';
import CompaniesSection from '@/components/companies-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <HeroSection />
        <CompaniesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
