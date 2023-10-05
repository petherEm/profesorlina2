import React from "react";
import Image from "next/image";
import { Dot, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Medals = () => {
  return (
    <section className="container max-w-6xl mx-auto mt-28 mb-28">
      <div className="flex flex-col items-center">
        <h1 className="font-sans text-2xl md:text-4xl text-center max-w-4xl mx-auto">
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

        {/* POZOSTALE NAGRODY */}
        <div className="mt-20 flex flex-col items-center gap-y-6">
          <h1 className="text-xl text-center uppercase font-sans">
            Pozostałe nagrody
          </h1>
          <div className="font-sans text-[13px] flex flex-col gap-y-4 md:w-2/3">
            <p className="">
              - Nagrody JM Rektora Politechniki Warszawskiej naukowe 1985, 1987,
              1993, 1998, 2003, 2005, 2008, 2010, 2012, 2014, 2015, 2016,
            </p>
            <p className="">
              - Nagrody JM Rektora Politechniki Warszawskiej organizacyjne 1996,
              2001, 2018, 2022,
            </p>
            <p className="">
              - Nagroda JM Rektora Politechniki Warszawskiej za całokształt
              dorobku 2021 r.
            </p>
            <p className="">
              - Nagroda naukowa zespołowa JM. Rektora Szkoły Głównej Handlowej
              2014 r.
            </p>
          </div>
          <h1 className="text-xl text-center uppercase font-sans md:w-2/3">
            Medale Okolicznościowe przyznane w dowód uznania za wkład w Rozwój
            Uczelni
          </h1>
          <div className="font-sans text-[13px] flex flex-col gap-y-4 md:w-2/3">
            <p className="">
              - Medal Politechniki Warszawskiej z okazji 100-lecia odnowienia
              tradycji PW 2015 r.
            </p>
            <p className="">
              - Medal Politechniki Warszawskiej z okazji 50-lecia Filii w Płocku
              2017 r.
            </p>
            <p className="">
              - Medal Zasłużony dla Wydziału Inżynierii Lądowej i Geodezji
              Wojskowej Akademii Technicznej w Warszawie 2016 r.
            </p>
            <p className="">
              - Medal Pamiątkowy "Pro Masovia" Marszałka Województwa
              Mazowieckiego 2016 r.
            </p>
            <p className="">
              - Medal Akademii Morskiej w Gdyni z okazji 95-lecia polskiego
              szkolnictwa morskiego 2015 r.
            </p>
            <p className="">
              - Medal Uniwersytetu Warmińsko-Mazurskiego w Olsztynie 2018 r.
            </p>
            <p className="">
              - Medal Uniwersytetu Przyrodniczego we Wrocławiu 2016 r.
            </p>
            <p className="">
              - Medal Uniwersytetu Rolniczego w Krakowie z okazji 60-lecia
              Uniwersytetu 2013 r.
            </p>
            <p className="">
              - Medal Szkoły Akademiczno-Górniczej w Kielcach z okazji 200-lecia
              Szkoły 2016 r.
            </p>
            <p className="">
              - Zasłużona dla Kopalni Węgla Brunatnego Sieniawa, odznaczenie
              przyznane uchwałą Rady Pracowniczej nr 23 za osiągnięcia naukowe –
              1993,
            </p>
            <p className="">
              - Dyplomy uznania Dziekana Wydziału Geodezji i Kartografii
              Politechniki Warszawskiej za prace organizacyjne w roku 2005,
            </p>
            <p className="">
              - Wyróżnienia i dyplomy uznania Dyrektora Instytutu Geodezji
              Gospodarczej Politechniki Warszawskiej za osiągnięcia naukowe i
              prace organizacyjne.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Medals;
