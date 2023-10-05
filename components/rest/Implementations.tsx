import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const wdrozenia = [
  {
    id: 1,
    author: "Maciejewska A.",
    years: "1992-1993",
    title:
      "Uruchomienie produkcji, dopuszczenie do obrotu i stosowania w rolnictwie preparatu organiczno-mineralnego Humidol",
    preDetails: "Instrukcja Zakładowa",
    preDetails2: "Opracowanie Zespołowe",
    engagement:
      "Współpraca w zakresie merytorycznym, koordynacja prac związanych z uruchomieniem produkcji, opracowanie instrukcji wdrożeniowej do produkcji i stosowania preparatu. Lata 1992-1993.",
    place:
      "Kopalnia Węgla Brunatnego Sieniawa i Proekologiczne Przetwórstwo Węgla Brunatnego Sieniawa Lubuska.",
    benefits:
      "Prace związane z uruchomieniem produkcji, opracowanie normy zakładowej oraz systematycznej kontroli jakości produkowanego wyrobu Preparat wyprodukowany z naturalnych komponentów: węgla brunatnego, mączki dolomitowej i mączki wapiennej W glebie pełni rolę naturalnego biostymulatora, przeznaczony jest dla gleb mało aktywnych biologicznie, zdegradowanych oraz gruntów bezglebowych.",
  },
  {
    id: 2,
    author: "Maciejewska A.",
    years: "1995-1998",
    title:
      "Uruchomienie produkcji preparatów organiczno - mineralnych z węgla brunatnego Plonofoski J, Plonofoski W i Rekultera oraz wdrożenie tej produkcji na skalę przemysłową",
    preDetails:
      "Maszynopis 19 stron + zał. (normy, świadectwa ochronne, certyfikaty itp.)",
    preDetails2: "Opracowanie Zespołowe, współautor Brzeg K.",
    engagement:
      "Współpraca w zakresie merytorycznym, koordynacja prac związanych z procesem uruchomienia produkcji, opracowanie instrukcji wdrożenia do produkcji i stosowania preparatów organiczno -mineralnych z węgla brunatnego. Lata 1995 – 1998.",
    place:
      "Kopalnia Węgla Brunatnego Sieniawa i Proekologiczne Przetwórstwo Węgla Brunatnego Sieniawa Lubuska.",
    benefits:
      "Opracowano normy zakładowe związane z uruchomieniem produkcji preparatów. Wykonano prace dotyczące procedury uzyskania certyfikatów: Certyfikat nr 6286/95 - Plonofoska J, Certyfikat nr 6287/95 - Plonofoska W, Certyfikat 6023/96 - Rekulter. Wykonano linię technologiczną. Uruchomiono tę linię na skalę przemysłową o możliwościach produkcji docelowo 500 tys. t rocznie. Opracowano instrukcję dotyczącą wdrożenia do produkcji i stosowania preparatów organiczno - mineralnych z węgla brunatnego. Produkowane preparaty cechują się łatwością produkcji i zastosowania oraz dużą trwałością i efektywnością działania. Mają znaczenie praktyczne z punktu widzenia żyzności gleb słabych, rekultywacji gleb zdegradowanych i gruntów bezglebowych. Możliwe jest również zaopatrzenie większości szkółek leśnych.",
  },
];

const patenty = [
  {
    id: 1,
    author: "Maciejewska A., Nowsielski O., Ganecki ZB.",
    years: "1993",
    title: "Ekologiczny nawóz organiczno-mineralny",
    preDetails: "Instrukcja Zakładowa",
    preDetails2: "Opracowanie Zespołowe",
    engagement:
      "Zgłoszenie patentowe złożone w dniu 5.10.1993 r. pod nr P 300582, równy udział.",
  },
];

const Implementations = () => {
  return (
    <section className="p-4 md:p-0 container max-w-6xl mx-auto md:mt-28 md:mb-28">
      <div className="">
        <Card className="bg-transparent border-0">
          <CardHeader>
            <CardTitle className="font-libre text-2xl md:text-4xl md:w-2/3 tracking-wider">
              Wdrożenia
            </CardTitle>
          </CardHeader>
          <CardContent className="container flex flex-col md:mt-10 space-y-32">
            {wdrozenia.map((item) => (
              <div
                key={item.id}
                className="mt-4 md:mt-10 flex flex-col md:flex-row md:space-x-16"
              >
                {/* Left */}
                <div className="md:w-[40%]">
                  <h1 className="font-sans uppercase text-[12px] tracking-wider">
                    {item.author}, {item.years}
                  </h1>
                  <p className="font-libre mt-4 text-[16px]">{item.title}</p>
                  <p className="font-sans mt-4 text-[12px] uppercase">
                    {item.preDetails}
                  </p>
                  <p className="font-sans text-[12px] uppercase">
                    {item.preDetails2}
                  </p>
                </div>
                {/* Right */}
                <div className="md:w-[60%]">
                  <h1 className="font-sans uppercase text-[12px] tracking-wider">
                    UDZIAŁ PROF. DR HAB. ALINY MACIEJEWSKIEJ
                  </h1>
                  <p className="font-sans mt-2 text-[15px] md:w-2/3">
                    {item.engagement}
                  </p>
                  <h1 className="mt-4 font-sans uppercase text-[12px] tracking-wider">
                    MIEJSCE WDROZENIA
                  </h1>
                  <p className="mt-2 font-sans text-[15px] md:w-2/3">
                    {item.place}
                  </p>
                  <h1 className="mt-4 font-sans uppercase text-[12px] tracking-wider">
                    KORZYŚCI
                  </h1>
                  <p className="mt-2 font-sans text-[15px] md:w-2/3">
                    {item.benefits}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-transparent border-0">
          <CardHeader>
            <CardTitle className="font-libre text-2xl md:text-4xl md:w-2/3 tracking-wider">
              Zgłoszenia patentowe
            </CardTitle>
          </CardHeader>
          <CardContent className="container flex flex-col mt-10 md:space-y-32">
            {patenty.map((item) => (
              <div
                key={item.id}
                className="md:mt-10 flex flex-col md:flex-row md:space-x-16"
              >
                {/* Left */}
                <div className="md:w-[40%]">
                  <h1 className="font-sans uppercase text-[12px] tracking-wider">
                    {item.author}, {item.years}
                  </h1>
                  <p className="font-libre mt-4 text-[16px]">{item.title}</p>
                </div>
                {/* Right */}
                <div className="md:w-[60%]">
                  <p className="mt-8 font-sans text-[15px] md:w-2/3">
                    {item.engagement}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Implementations;
