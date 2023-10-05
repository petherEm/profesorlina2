import React from "react";
import CTAsection from "@/components/main/CTAsection";
import Contact from "@/components/main/Contact";
import HeroAbout from "@/components/rest/HeroAbout";
import UniBanner from "@/components/main/UniBanner";
import AboutMeFull from "@/components/rest/AboutMeFull";
import SpecScience from "@/components/rest/SpecScience";
import Accordions from "@/components/rest/Accordions";
import Lectures from "@/components/rest/Lectures";
import Books from "@/components/main/Books";
import MedalsFull from "@/components/main/MedalsFull";

const AboutMePage = () => {
  return (
    <main className="">
      <HeroAbout />
      <UniBanner />
      <AboutMeFull />
      <SpecScience />
      <Accordions />
      <Lectures />

      <MedalsFull />
      <Books />

      <Contact />
    </main>
  );
};

export default AboutMePage;
