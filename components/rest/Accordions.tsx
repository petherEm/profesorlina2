import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Accordions = () => {
  return (
    <section className="bg-[#1D2D23]">
      <div className="container font-libre text-left text-2xl text-white leading-relaxed">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="">Publikacje</AccordionTrigger>
            <AccordionContent className="font-sans">
              <p className="mt-8">
                Jest autorką lub współautorką ponad 200 publikacji, w tym: 85
                pozycji stanowią oryginalne prace naukowe opublikowane w
                liczących się czasopismach krajowych i zagranicznych, 4 książki
                autorskie, 13 książek redagowanych, 29 rozdziałów w monografiach
                naukowych, 36 publikacji w recenzowanych materiałach
                konferencyjnych. Uczestniczyła w ponad sześćdziesięciu
                konferencjach międzynarodowych wygłaszając referaty oraz
                prezentując postery. Odbyła staże naukowe w uniwersytetach za
                granicą, m.in. w Michigan State University (USA), Sorbone
                University (Francja), Kazachski Uniwersytet Agrotechniczny w
                Astanie (Kazachstan).
              </p>
              <p className="mt-8">
                Realizowała projekty naukowo-badawcze: 8 finansowanych przez
                Ministerstwo Nauki w tym 1 projekt celowy wdrożony w Kopalni
                Węgla Brunatnego „Konin”, 9 finansowanych przez podmioty
                gospodarcze. Była kierownikiem 12 prac naukowo-badawczych, które
                zastosowano w praktyce oraz 3 wdrożono w przemyśle, w tym 1
                zgłoszenie patentowe. Dotyczyły one głównie rekultywacji i
                zagospodarowania obszarów zdegradowanych, głównie na terenach
                poprzemysłowych i pogórniczych.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Projekty</AccordionTrigger>
            <AccordionContent className="font-sans">
              <div className="mt-8">
                Była kierownikiem i wykonawcą wielu projektów dla Mazowieckiego
                Biura Planowania Regionalnego, w tym:
                <ul className="">
                  <li className="">
                    „opracowanie wstępnej koncepcji inwentaryzacji terenów
                    przeznaczonych do rewitalizacji/rekultywacji na obszarze
                    województwa mazowieckiego oraz opracowanie ankiet
                    przekazanych przez gminy położone na tym obszarze”;
                  </li>
                  <li>
                    „sporządzenie i wstępne opracowanie ankiet dotyczącą
                    krajobrazu pospolitego gmin województwa mazowieckiego”,
                  </li>
                  <li>
                    „możliwości wykorzystania baz danych dotyczących
                    rewitalizacji i krajobrazu pospolitego gmin województwa
                    mazowieckiego w kontekście założeń Europejskiej Konwencji
                    Krajobrazowej (EKK) i Rozporządzenia Rady Ministrów z dnia
                    11 stycznia 2019 r. w sprawie sporządzania audytów
                    krajobrazowych”.
                  </li>
                </ul>
              </div>
              <p className="mt-8">
                Realizowała projekty naukowo-badawcze: 8 finansowanych przez
                Ministerstwo Nauki w tym 1 projekt celowy wdrożony w Kopalni
                Węgla Brunatnego „Konin”, 9 finansowanych przez podmioty
                gospodarcze. Była kierownikiem 12 prac naukowo-badawczych, które
                zastosowano w praktyce oraz 3 wdrożono w przemyśle, w tym 1
                zgłoszenie patentowe. Dotyczyły one głównie rekultywacji i
                zagospodarowania obszarów zdegradowanych, głównie na terenach
                poprzemysłowych i pogórniczych.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="">
              Funkcje na Wydziale GiK
            </AccordionTrigger>
            <AccordionContent>Do dodania</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Funkcje w Uczelni</AccordionTrigger>
            <AccordionContent>Do dodania</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Funkcje poza Uczelnią</AccordionTrigger>
            <AccordionContent>Do dodania</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Accordions;
