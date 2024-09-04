import AboutMe from '@/components/shared/AboutMe';
import Projects from '@/components/shared/Projects';
import HomeHero from '@/components/shared/HomeHero';
import Experience from '@/components/shared/Experience';
import ContactMe from '@/components/shared/ContactMe';
import Footer from '@/components/shared/Footer';

export default function Home() {
  return (
    <main className="relative bg-gradient-to-b from-black-100/95 to-gray-200/5 via-30% flex justify-center items-center flex-col overflow-hidden mx-auto px-10 md:px-5">
      <div className="flex max-w-7xl h-screen items-center justify-center w-full">
        <HomeHero />
      </div>

      <AboutMe />

      <Experience />

      <Projects />

      <ContactMe />
      <Footer />
    </main>
  );
}
