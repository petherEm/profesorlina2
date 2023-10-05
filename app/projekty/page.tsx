import React from "react";
import CTAsection from "@/components/main/CTAsection";
import HeroProjects from "@/components/rest/HeroProjects";
import Research from "@/components/rest/Research";
import Contact from "@/components/main/Contact";

const ProjectPage = () => {
  return (
    <main className="">
      <HeroProjects />
      <Research />
      <CTAsection />
      <Contact />
    </main>
  );
};

export default ProjectPage;
