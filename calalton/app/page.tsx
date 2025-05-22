import { Header } from '@/components/navigation/header';
import { AboutSection } from '@/components/sections/about-section';
import { BlogSection } from '@/components/sections/blog-section';
import { ContactSection } from '@/components/sections/contact-section';
import { CTASection } from '@/components/sections/cta-section';
import { FooterSection } from '@/components/sections/footer-section';
import { HeroSection } from '@/components/sections/hero-section';
import { ProjectsSection } from '@/components/sections/projects-section';

export default function Home() {
  return (
    <div className="flex flex-col gap-4 min-h-full bg-gray-50 relative">
      <Header />

      <main className="flex flex-col gap-4 max-w-4xl mx-auto px-6 bg-background min-h-screen shadow-sm relative z-10 rounded-lg mb-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
        <CTASection />
        <FooterSection />
      </main>
    </div>
  );
}
