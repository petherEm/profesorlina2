import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const HeroProjects = () => {
  return (
    <section className="relative h-[60vh]">
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/projects/PR-video.mov"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:transform-none md:left-10 xl:left-40 text-[#F9F6EB] px-4 sm:px-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-libre">
          Projekty badawcze
        </h1>
        <div className="mt-8 flex items-center space-x-4 sm:space-x-6 font-sans">
          <Button className="text-sm md:text-base rounded-none uppercase bg-[#F9F6EB] border-[1.5px] border-[#444036] text-black tracking-wide py-2 sm:py-4 md:py-6 hover:text-[#F9F6EB]">
            Obszary badań <MoveRight size={12} className="ml-2" />
          </Button>

          <Button className="text-sm md:text-base rounded-none uppercase bg-transparent border-[1.5px] border-[#F9F6EB] text-[#F9F6EB] tracking-wide py-2 sm:py-4 md:py-6 hover:text-[#F9F6EB]">
            Zrealizowane projekty <MoveRight size={12} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroProjects;
