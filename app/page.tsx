import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Achievements from "@/components/sections/Achievements";
import CareerGoal from "@/components/sections/CareerGoal";
import Languages from "@/components/sections/Languages";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Services />
      <Projects />
      <Certifications />
      <Achievements />
      <Languages />
      <CareerGoal />
      <Contact />
    </>
  );
}
