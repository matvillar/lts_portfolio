import AboutMe from '@/components/shared/AboutMe';
import HomeHero from '@/components/shared/HomeHero';

export default function Home() {
  return (
    <main className="relative bg-gradient-to-b from-black-100/95 to-gray-200/5 via-30% flex justify-center items-center flex-col overflow-hidden mx-auto px-10 md:px-5">
      <div className="flex max-w-7xl h-screen items-center justify-center w-full">
        <HomeHero />
      </div>
      <section className="" id="about">
        <AboutMe />
      </section>
    </main>
  );
}
