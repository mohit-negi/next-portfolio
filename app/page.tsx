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
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Link from 'next/link';
import Layout from './components/Layout';
import { Experience, PageInfo, Project, Skill, Social } from '@/utils/types';

// const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
// const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
export const revalidate = 60; // Revalidate this page every 60 seconds

interface HomeProps {
  pageInfo: PageInfo;
  projects: Project[];
  skills: Skill[];
  experiences: Experience[];
  socials: Social[];
}

export default async function Home() {
  const allData: HomeProps = await fetchAllData();

  return (
    <Layout socials={allData.socials} heroImage={allData.pageInfo.heroImage}>
      <main className="grid gap-20 overflow-hidden">
        <section id="hero">
          <Hero pageInfo={allData.pageInfo} />
        </section>
        <section id="about">
          <About pageInfo={allData.pageInfo} />
        </section>
        <section id="experience">
          <WorkExperience experiences={allData.experiences} />
        </section>
        <section id="skills">
          <Skills skills={allData.skills} />
        </section>
        <section id="projects">
          <Projects projects={allData.projects} />
        </section>
        <section id="contact">
          <ContactMe />
        </section>
      </main>
    </Layout>
  );
}