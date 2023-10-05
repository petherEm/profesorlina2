import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GraduationCap, MoveRight } from "lucide-react";

const Lectures = () => {
  return (
    <section className="container max-w-6xl mx-auto mt-10 md:mt-28 mb-28">
      <div className="flex flex-col gap-x-4 gap-y-8 md:flex-row justify-around">
        {/* LEFT */}
        <div className="flex-[50%]">
          <div className="mt-6 ">
            <h1 className="font-sans text-left text-2xl md:text-4xl font-semibold">
              Prowadzone <br className="" />
              wykłady
            </h1>
            <p className="mt-8 font-sans text-[15px]">Przedmioty:</p>
            <ul className="mt-6 font-sans text-[15px] flex flex-col gap-2">
              <li className="flex gap-4 items-center">
                <GraduationCap size={18} /> Zagospodarowanie i metody
                rekultywacji terenów zdegradowanych,
              </li>
              <li className="flex gap-4 items-center">
                <GraduationCap size={18} /> Klasyfikacja terenów zdegradowanych
                i metody rekultywacji,
              </li>
              <li className="flex gap-4 items-center">
                <GraduationCap size={18} /> Ochrona środowiska przyrodniczego,
              </li>
              <li className="flex gap-4 items-center">
                <GraduationCap size={18} /> Zagadnienia prawne w ochronie
                środowiska,
              </li>
              <li className="flex gap-4 items-center">
                <GraduationCap size={18} /> Rewitalizacja terenów
                poprzemysłowych,
              </li>
              <li className="flex gap-4 items-center">
                <GraduationCap size={18} /> Rekultywacja obszarów
                zdegradowanych,
              </li>
              <li className="flex gap-4 items-center">
                <GraduationCap size={18} /> Ekologia w gospodarowaniu
                przestrzenią,
              </li>
              <li className="flex gap-4 items-center">
                <GraduationCap size={18} /> Systemy zarządzania środowiskiem w
                gminie,
              </li>
              <li className="flex gap-4 items-center">
                <GraduationCap size={18} /> Zagrożenia i ochrona gleb,
              </li>
            </ul>
            <p className="mt-8 font-sans text-[15px]">
              Wdrożyła nowy kierunek studiów I i II stopnia Gospodarka
              Przestrzenna i specjalności: Środowiskowe uwarunkowania w
              gospodarowaniu przestrzenią oraz Urbanistyka w planowaniu
              przestrzennym oraz utworzyła studia podyplomowe Gospodarka
              Przestrzenna w Praktyce.
            </p>
          </div>
        </div>
        {/* RIGHT */}
        <div className="flex-[50%]">
          <Image
            src="/Lectures-1.png"
            alt="Alina Maciejewska"
            width={400}
            height={350}
            className="object-contain z-50"
          />
        </div>
      </div>
    </section>
  );
};

export default Lectures;
