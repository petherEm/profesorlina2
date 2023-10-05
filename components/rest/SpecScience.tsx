import React from "react";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const SpecScience = () => {
  return (
    <section className="bg-[#1D2D23]">
      <div className="container flex flex-col md:flex-row justify-around p-4 md:p-20">
        <div className="md:w-1/3">
          <h1 className="font-sans text-left text-2xl md:text-4xl text-white leading-relaxed w-1/3">
            Specjalność naukowa
          </h1>
        </div>
        <div className="mt-20 md:w-2/3">
          <p className="font-sans text-[15px] text-white">
            Inżynieria środowiska glebowego, gleboznawstwo, rekultywacja i
            zagospodarowanie obszarów zdegradowanych, rewitalizacja terenów
            zurbanizowanych, poprzemysłowych i powojskowych.
          </p>
          <p className="font-sans text-[15px] mt-10 text-white">
            Od roku 1985 prowadzi badania nad wykorzystaniem materii organicznej
            z węgla brunatnego, torfu, kompostów, osadów ściekowych, odpadów
            poprodukcyjnych do agromelioracji gleb piaszczystych oraz do
            rekultywacji gleb zdegradowanych i zanieczyszczonych chemicznie
            głównie metalami ciężkimi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecScience;
