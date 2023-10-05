import React from "react";
import CTAsection from "@/components/main/CTAsection";
import HeroImplement from "@/components/rest/HeroImplement";
import Research from "@/components/rest/Research";
import Contact from "@/components/main/Contact";
import Implementations from "@/components/rest/Implementations";

const ImplementPage = () => {
  return (
    <main className="">
      <HeroImplement />
      {/* <Research /> */}

      <Implementations />
      <CTAsection />
      <Contact />
    </main>
  );
};

export default ImplementPage;
