import React from "react";
import Image from "next/image";

const Specializations = () => {
  return (
    <section id="specjalizacje" className="md:container">
      <div>
        <h1 className="font-sans text-center tracking-wide text-4xl font-semibold mb-32">
          Główne specjalizacje naukowe
        </h1>

        <div className="flex justify-between w-[80%] mx-auto">
          {/* LEFT */}
          <div className="font-sans flex flex-col flex-[50%]">
            <div className="w-[90%]">
              <h1 className="text-xl md:text-2xl font-bold mb-6">Inżynieria</h1>
              <p className="text-[16px] font-sans">
                środowiska glebowego, gleboznawstwo, rekultywacja i
                zagospodarowanie obszarów zdegradowanych.
              </p>
            </div>
            <div className="mt-6 w-[90%]">
              <h1 className="text-xl md:text-2xl font-bold mb-6">
                Agromelioracja
              </h1>
              <p className="text-[16px] font-sans">
                gleb piaszczystych i rekultywacja gleb zdegradowanych i
                zanieczyszczonych chemicznie.
              </p>
            </div>
            <div className="mt-6 w-[90%]">
              <h1 className="text-xl md:text-2xl font-bold mb-6">
                Rewitalizacja
              </h1>
              <p className="text-[16px] font-sans">
                terenów zurbanizowanych, poprzemysłowych i powojskowych.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden md:inline-block flex-[50%]">
            <div className="relative">
              <Image
                src="/Spec-1.png"
                alt="Specjalizacje1"
                width={400}
                height={400}
              />
              <Image
                src="/Spec-2.png"
                alt="Specjalizacje1"
                width={400}
                height={400}
                className="object-contain absolute -top-12 right-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specializations;
