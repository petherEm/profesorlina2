import Image from "next/image";
import Hero from "@/components/main/Hero";
import CounterExperience from "@/components/main/CounterExperience";
import Specializations from "@/components/main/Specializations";
import UniBanner from "@/components/main/UniBanner";
import Projects from "@/components/main/Projects";
import CTAsection from "@/components/main/CTAsection";
import About from "@/components/main/About";
import Medals from "@/components/main/Medals";
import Contact from "@/components/main/Contact";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <CounterExperience />
      <Specializations />
      <UniBanner />
      <Projects />
      <CTAsection />
      <About />
      <Medals />
      <Contact />
    </main>
  );
}
