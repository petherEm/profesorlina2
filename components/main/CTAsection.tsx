import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const CTAsection = () => {
  return (
    <section className="font-sans bg-[#1D2D23]">
      <div className="max-w-6xl mx-auto flex flex-col p-10 items-center">
        <h1 className="text-4xl text-center  text-white leading-relaxed">
          Realizuję <span className="">projekty badawcze </span>zlecone przez
          Ministerstwo Nauki, podmioty gospodarcze oraz jednostki samorządowe
        </h1>
        <div className="mt-8 flex items-center space-x-6 font-sans">
          <Link href="/#kontakt">
            <Button className="rounded-none uppercase text-[10px] bg-white border-[1.5px] border-[#1D2D23] text-black tracking-widest py-6 hover:text-white hover:bg-[#1D2D23] hover:border-white">
              Nawiąż Współpracę
              <MoveRight size={12} className="ml-2" />
            </Button>
          </Link>

          <Link href="/projekty">
            <Button className="rounded-none uppercase text-[10px] bg-[#1D2D23] hover:bg-transparent border-[1.5px] border-white hover:text-black tracking-widest py-6 hover:bg-white">
              Więcej projektów
              <MoveRight size={12} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTAsection;
