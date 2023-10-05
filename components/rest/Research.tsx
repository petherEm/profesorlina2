import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const minNauki = [
  {
    id: 1,
    type: "Projekt Badawczy",
    description:
      "Uruchomienie produkcji kompletnych nawozów organiczno-mineralnych wytworzonych z węgla brunatnego",
    details:
      "W tym kierowanie pracami badawczo-rozwojowymi p.t. Badanie zmian właściwości i żyzności gleb oraz ilości i jakości plonów pod wpływem nawożenia kompletnymi nawozami organiczno-mineralnymi wytworzonymi z węgla brunatnego.",
    zleceniodawca: "KBN",
    projektCelowy: "55654 93C/1673",
    umowa: "1052/C. S3-5/94",
    okresRealizacji: "1994 - 1997",
  },
  {
    id: 2,
    type: "Projekt Badawczy",
    description:
      "Wpływ autostrad na rozłóg gruntów oraz kierunki użytkowania gruntów przyległych",
    details: "",
    zleceniodawca: "",
    projektCelowy: "",
    umowa: "",
    okresRealizacji: "1994 - 1997",
  },
  {
    id: 3,
    type: "Projekt Badawczy",
    description:
      "Analiza wpływu węgla brunatnego na zmniejszenie akumulacji metali ciężkich w roślinach uprawianych na glebach zanieczyszczonych",
    details: "",
    zleceniodawca: "",
    projektCelowy: "",
    umowa: "",
    okresRealizacji: "1998 - 2000",
  },
  {
    id: 4,
    type: "Projekt Badawczy",
    description:
      "Wpływ nawozu z węgla brunatnego na dostępność cynku, ołowiu i kadmu w roślinach oraz na zawartość i właściwości substancji organicznej w glebie.",
    details: "",
    zleceniodawca: "",
    projektCelowy: "",
    umowa: "PB 0345/P06/99/17",
    okresRealizacji: "1999 - 2002",
  },
  {
    id: 5,
    type: "Projekt Badawczy",
    description:
      "Wykorzystanie węgla brunatnego do ograniczenia fitotoksyczności gleb zanieczyszczonych metalami ciężkimi.",
    details: "",
    zleceniodawca: "",
    projektCelowy: "",
    umowa: "11251/T09/2003/24",
    okresRealizacji: "2003 - 2004",
  },
  {
    id: 6,
    type: "Projekt Badawczy",
    description:
      "Wpływ różnych źródeł materii organicznej na właściwości próchnicy.",
    details: "",
    zleceniodawca: "",
    projektCelowy: "",
    umowa: "0786/P06/2003/24",
    okresRealizacji: "2003 - 2006",
  },
  {
    id: 7,
    type: "Projekt Badawczy",
    description:
      "Zastosowanie węgla brunatnego do poprawy właściwości fizykochemicznych i biologicznych gleb skażonych chemicznie.",
    details: "",
    zleceniodawca: "",
    projektCelowy: "",
    umowa: "1189/T09/2003/25",
    okresRealizacji: "2003 - 2006",
  },
  {
    id: 8,
    type: "Projekt Badawczy",
    description:
      "Wielopierścieniowe węglowodory aromatyczne i związki fenolowe jako produkty transformacji substancji humusowych powstałych z węgla brunatnego użyźniającego glebę.",
    details: "",
    zleceniodawca: "",
    projektCelowy: "",
    umowa: "1800/B/H03/2007/33",
    okresRealizacji: "2007 - 2010",
  },
];

const Research = () => {
  return (
    <section className="p-4 md:p-0 container max-w-6xl mx-auto md:mt-28 md:mb-28">
      <div>
        <Tabs defaultValue="men" className="w-full">
          <TabsList className="grid p-2 w-full bg-transparent grid-cols-1 md:grid-cols-4">
            <TabsTrigger
              value="obszary"
              className="uppercase text-[11px] md:text-[15px] font-sans tracking-widest"
            >
              Obszary realizowanych <br />
              badań
            </TabsTrigger>
            <TabsTrigger
              value="men"
              className="uppercase text-[11px] md:text-[15px] font-sans tracking-widest"
            >
              Projekty finansowane przez <br />
              Ministerstwo nauki
            </TabsTrigger>
            <TabsTrigger
              value="podmioty"
              className="uppercase text-[11px] md:text-[15px] font-sans tracking-widest"
            >
              Projekty finansowane przez <br />
              Podmioty Gospodarcze
            </TabsTrigger>
            <TabsTrigger
              value="samorzady"
              className="uppercase text-[11px] md:text-[15px] font-sans tracking-widest"
            >
              Projekty finansowane przez <br />
              Jednostki Samorządowe
            </TabsTrigger>
          </TabsList>
          {/* OBSZARY BADAN */}
          <TabsContent value="obszary" className="mt-20">
            <Card className="bg-transparent border-0">
              <CardHeader>
                <CardTitle className="font-libre text-4xl tracking-wider">
                  Obszary <br />
                  realizowanych badań
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-center items-center mt-10 space-y-2">
                <div className="flex justify-around space-x-4">
                  {/* Left */}
                  <div>
                    <Image
                      src="/projects/PR-B.png"
                      width={200}
                      height={200}
                      alt="PR-A"
                      className="object-contain"
                    />
                  </div>
                  {/* Right */}
                  <div>
                    <p className="text-2xl w-2/3">
                      Wpływ czynników antropogenicznych na zmiany w ekosystemach
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          {/* MINISTERSTWO NAUKI */}
          <TabsContent value="men" className="mt-20">
            <Card className="bg-transparent border-0">
              <CardHeader>
                <CardTitle className="font-libre text-2xl md:text-4xl md:w-2/3 tracking-wider">
                  Projekty finansowane przez Ministerstwo Nauki
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col mt-10 space-y-2">
                {minNauki.map((item) => (
                  <div
                    key={item.id}
                    className="mt-6 md:mt-10 flex flex-col md:flex-row md:space-x-16"
                  >
                    {/* Left */}
                    <div className="md:w-[40%]">
                      <h1 className="font-sans uppercase text-lg">
                        {item.type}
                      </h1>
                      <p className="font-libre mt-4 text-[16px]">
                        {item.description}
                      </p>
                    </div>
                    {/* Right */}
                    <div className="md:w-[60%]">
                      <p className="font-sans mt-10 text-[15px] md:w-2/3">
                        {item.details}
                      </p>

                      <ul className="font-sans mt-2 text-[13px] md:w-2/3 uppercase mb-10">
                        <li>Zleceniodawca: {item.zleceniodawca}</li>
                        <li>Projekt celowy: {item.projektCelowy}</li>
                        <li>UMOWA: {item.umowa}</li>
                        <li>Okres realizacji: {item.okresRealizacji}</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          {/* PODMIOTY GOSPODARCZE */}
          <TabsContent value="podmioty" className="mt-20">
            <Card className="bg-transparent border-0">
              <CardHeader>
                <CardTitle className="font-libre text-4xl tracking-wider">
                  Projekty finansowane przez
                  <br />
                  Podmioty Gospodarcze
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col mt-10 space-y-2">
                {minNauki.map((item) => (
                  <div key={item.id} className="mt-10 flex space-x-16">
                    {/* Left */}
                    <div className="w-[40%]">
                      <h1 className="font-sans uppercase text-lg">
                        {item.type}
                      </h1>
                      <p className="font-libre mt-4 text-[16px]">
                        {item.description}
                      </p>
                    </div>
                    {/* Right */}
                    <div className="w-[60%]">
                      <p className="font-sans mt-10 text-[15px] w-2/3">
                        {item.details}
                      </p>

                      <ul className="font-sans mt-2 text-[13px] w-2/3 uppercase">
                        <li>Zleceniodawca: {item.zleceniodawca}</li>
                        <li>Projekt celowy: {item.projektCelowy}</li>
                        <li>UMOWA: {item.umowa}</li>
                        <li>Okres realizacji: {item.okresRealizacji}</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          {/* SAMORZADY */}
          <TabsContent value="samorzady" className="mt-20">
            <Card className="bg-transparent border-0">
              <CardHeader>
                <CardTitle className="font-libre text-4xl tracking-wider">
                  Projekty finansowane przez
                  <br />
                  Jednostki Samorządowe
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col mt-10 space-y-2">
                {minNauki.map((item) => (
                  <div key={item.id} className="mt-10 flex space-x-16">
                    {/* Left */}
                    <div className="w-[40%]">
                      <h1 className="font-sans uppercase text-lg">
                        {item.type}
                      </h1>
                      <p className="font-libre mt-4 text-[16px]">
                        {item.description}
                      </p>
                    </div>
                    {/* Right */}
                    <div className="w-[60%]">
                      <p className="font-sans mt-10 text-[15px] w-2/3">
                        {item.details}
                      </p>

                      <ul className="font-sans mt-2 text-[13px] w-2/3 uppercase">
                        <li>Zleceniodawca: {item.zleceniodawca}</li>
                        <li>Projekt celowy: {item.projektCelowy}</li>
                        <li>UMOWA: {item.umowa}</li>
                        <li>Okres realizacji: {item.okresRealizacji}</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Research;
