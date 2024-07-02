// import About from "@/components/About";
// import ContactMe from "@/components/ContactMe";
// import Header from "@/components/Header";
// import Hero from "@/components/Hero";
// import Projects from "@/components/Projects";
// import WorkExperience from "@/components/WorkExperience";
// import { getExperiences, getPageInfo, getProjects, getSkills, getSocials } from "@/utils/sanity";
// import dynamic from "next/dynamic";
// import Link from "next/link";
import { fetchAllData } from '@/utils/GetData';

import { client } from "@/sanity/lib/client";
import Header from './components/Header';

// const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
// const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export const revalidate = 60; // Revalidate this page every 60 seconds

export default async function Home() {

console.log("-------------------------------------------------------------------------------------------------------")
const allData = await fetchAllData();
console.log("----------------------------")
console.log(allData)
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin sm:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
    <Header socials={allData.socials} />
      
        {/* <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-start">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <Footer heroImage={pageInfo.heroImage} />
      </Link> */}
    </main>
  );
}