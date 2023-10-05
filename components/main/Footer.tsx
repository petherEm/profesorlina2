import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-20 bg-[#A7A39E] text-white">
      <div className="font-sans container flex flex-col py-20 max-w-6xl mx-auto">
        <Image
          src="/WhiteLogo.png"
          alt="Alina Maciejewska"
          width={120}
          height={120}
        />

        <div className="mt-10 flex justify-around items-start">
          <div>
            <h1 className="hidden md:inline-block text-2xl md:text-4xl md:w-2/3 leading-relaxed tracking-wider">
              Ekspert ochrony <br />i kształtowania
              <span className="italic"> środowiska</span>
            </h1>
          </div>

          <div className="flex justify-between items-start space-x-4 md:space-x-44">
            <div className="">
              <ul className="uppercase flex flex-col gap-4 text-[15px] font-sans tracking-wide">
                <li>
                  <Link href="/#specjalizacje">Specjalizacje naukowe</Link>
                </li>
                <li>
                  <Link href="/projekty">Projekty badawcze</Link>
                </li>
                <li>
                  <Link href="/wdrozenia">Wdrozenia</Link>
                </li>
                <li>
                  <Link href="/o-mnie">O mnie</Link>
                </li>
                <li>
                  <Link href="/#kontakt">Kontakt</Link>
                </li>
              </ul>
            </div>

            <div className="flex-1 flex flex-col gap-y-4">
              <div className="text-[15px]">
                <h2 className="font-bold">Prof. dr hab. Alina Maciejewska</h2>
                <h2 className="font-sans text-[11px]">Plac Politechniki 1</h2>
                <h2 className="font-sans text-[11px]">
                  00-000 Warszawa, Polska
                </h2>
              </div>
              <div className="text-[14px]">
                <h2 className="font-bold">Adres e-mail</h2>
                <h2 className="font-sans text-[11px]">
                  alina.maciejewska@pw.edu.pl
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-2 border-white w-full" />
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 font-sans">
        <div>
          <p className="text-[12px] text-center">
            © Prof. dr hab. Alina Maciejewska, 2023
          </p>
        </div>
        <div>
          <Link href="/">
            <p className="text-[12px] text-center">Polityka prywatności</p>
          </Link>
        </div>
        <div>
          <p className="text-[12px] text-center">
            Realizacja{" "}
            <Link
              href="https://www.vabank.dev"
              target="_blank"
              className="font-bold text-white"
            >
              vabank.dev
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
