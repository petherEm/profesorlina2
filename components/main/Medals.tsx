import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Medals = () => {
  return (
    <section className="container max-w-6xl mx-auto mt-28 mb-28">
      <div className="flex flex-col items-center">
        <h1 className="font-sans text-2xl tracking-wide md:text-3xl text-center max-w-3xl mx-auto">
          W dowód uznania za osiągnięcia naukowe, dydaktyczne i organizacyjne
          otrzymałam odznaczenia, nagrody i wyróżnienia, w tym{" "}
          <span className="italic">najcenniejsze:</span>
        </h1>

        {/* MEDALE */}
        <div className="mt-20 flex flex-col md:flex-row justify-between gap-y-6 md:space-x-40">
          {/* item */}
          <div className="flex items-start space-x-6">
            <div>
              <Image
                src="/medals/order-odrodzenia.png"
                alt="order-odrodzenia"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="">
              <h2 className="font-libre text-[14px] font-bold">
                Krzyż Kawalerski <br />
                Orderu Odrodzenia <br />
                Polski
              </h2>
              <p className="text-[10px] font-sans">
                nr legitymacji 391-2020-5, <br />
                dnia 29 września 2020 r.
              </p>
            </div>
          </div>

          {/* item */}
          <div className="flex items-start space-x-6">
            <div>
              <Image
                src="/medals/order-zaslugi.png"
                alt="order-zaslugi"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="">
              <h2 className="font-libre text-[14px] font-bold">
                Złoty Krzyż <br />
                Zasługi
              </h2>
              <p className="text-[10px] font-sans">
                nr legitymacji 180-201-34, <br />
                dnia 18 września 2001 r.
              </p>
            </div>
          </div>
          {/* item */}
          <div className="flex items-start space-x-6">
            <div>
              <Image
                src="/medals/order-ken.png"
                alt="order-ken"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <div className="">
              <h2 className="font-libre text-[14px] font-bold">
                Medal Komisji <br />
                Edukacji Narodowej
              </h2>
              <p className="text-[10px] font-sans">2008 r.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6">
          <Button className="font-sans mt-8 rounded-none uppercase text-[9px] bg-white border-[1.5px] border-black text-black tracking-widest py-6 hover:text-white">
            Zobacz więcej osiągnięć naukowych{" "}
            <MoveRight size={12} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Medals;
