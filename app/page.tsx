import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Edoardo Vincenzi',
    jobTitle: 'Senior Front-end Developer',
    url: 'https://www.edoardovincenzi.com',
    email: 'edoardo.vincenzi95@gmail.com',
    sameAs: ['https://github.com/edoardovincenzi', 'https://www.linkedin.com/in/edoardo-vincenzi'],
    knowsAbout: ['React', 'Next.js', 'TypeScript', 'React Native', 'Tailwind CSS'],
  },
};

export default function Home() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id='main-content'>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
