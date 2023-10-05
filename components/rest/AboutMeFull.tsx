import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const AboutMeFull = () => {
  return (
    <section className="container max-w-6xl mx-auto md:mt-28 mb-28">
      <div className="flex flex-col gap-y-6 md:flex-row justify-around">
        {/* LEFT */}
        <div className="flex-[50%] flex flex-col">
          <Image
            src="/About-Duda.png"
            alt="Alina Maciejewska"
            width={350}
            height={350}
            className="object-contain"
          />
          <Image
            src="/About-Dziekan.png"
            alt="Alina Maciejewska"
            width={300}
            height={300}
            className="object-contain translate-x-10 md:translate-x-20 -translate-y-10"
          />
        </div>

        {/* RIGHT */}
        <div className="flex-[50%]">
          <div>
            <Image
              src="/amlogo-lg.png"
              alt="logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="mt-6">
            <p className="font-sans text-[15px]">
              Tytuł profesora w dziedzinie nauk rolniczych w zakresie ochrony i
              kształtowania środowiska uzyskała w 2000 roku a w 2016 roku, na
              podstawie przedłożonego dorobku, decyzją Centralnej Komisji ds.
              Stopni i Tytułów, uzyskała również uprawnienia profesorskie do
              nadawania stopni naukowych i tytułów w dziedzinie nauk
              inżynieryjno – technicznych [Decyzja nr BCK-Org.-275/2016].
            </p>
            <br />
            <p className="font-sans text-[15px]">
              Zatrudniona w Politechnice Warszawskiej na stanowisku profesora.
              Jest ekspertem w zakresie odtwarzania materii organicznej w
              gruntach bez glebowych, w glebach zdegradowanych chemicznie,
              poprzemysłowych i powojskowych a także specjalistą w zakresie
              technologii wytwarzania i zastosowania produktów ograniczano
              mineralnych opartych na węglu brunatnym przeznaczonych do
              biologicznej rekultywacji terenów przekształconych
              antropologicznie.
            </p>
            <p className="mt-6 font-sans text-[14px]">
              Profesor Alina Maciejewska jest absolwentką Uniwersytetu
              Warszawskiego Wydziału Chemii. W roku 1985 uzyskała stopień
              naukowy Doktora w zakresie gleboznawstwa a w 1994 roku stopień
              doktora habilitowanego w dziedzinie nauk rolniczych w zakresie
              ochrony i kształtowania środowiska.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeFull;
