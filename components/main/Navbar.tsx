"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  // Function to determine text color
  const determineNavbar = (pathname: string) => {
    if (pathname.includes("/specjalizacje"))
      return "sticky top-0 w-full z-50 font-sans text-black";
    if (pathname.includes("/projekty"))
      return "absolute top-0 w-full z-50 font-sans text-white hover:border-white";
    if (pathname.includes("/wdrozenia"))
      return "absolute top-0 w-full z-50 font-sans text-white hover:border-white";
    return "sticky bg-white top-0 w-full z-50 font-sans text-black";
  };

  const textColor = determineNavbar(pathname);

  return (
    <nav className={textColor}>
      <div className="container max-w-6xl mx-auto flex items-center justify-between h-20 p-4">
        <div>
          <Link href="/">
            {pathname.includes("/specjalizacje") ||
            pathname.includes("/projekty") ||
            pathname.includes("/wdrozenia") ? (
              <Image src="/WhiteLogo.png" width={100} height={100} alt="logo" />
            ) : (
              <Image src="/amlogo.png" width={100} height={100} alt="logo" />
            )}
          </Link>

          {/* <div className="flex flex-col">
          <h1 className="text-[10px]">Prof. dr hab.</h1>
          <h1 className="text-xl font-semibold">Alina</h1>
          <h1 className="indent-4 text-xl font-semibold">Maciejewska</h1>
        </div> */}
        </div>
        <div>
          <ul className="hidden md:flex space-x-4 items-center uppercase tracking-wider text-[16px] font-light">
            <li>
              <Link
                href="/#specjalizacje"
                className={`${
                  pathname.includes("/specjalizacje")
                    ? "border-b-2 border-black"
                    : ""
                } hover:border-b-2`}
              >
                specjalizacje naukowe
              </Link>
            </li>
            <li>
              <Link
                href="/projekty"
                className={`${
                  pathname.includes("/projekty")
                    ? "border-b-2 border-white"
                    : ""
                } hover:border-b-2`}
              >
                projekty badawcze
              </Link>
            </li>
            <li>
              <Link
                href="/wdrozenia"
                className={`${
                  pathname.includes("/wdrozenia")
                    ? "border-b-2 border-white"
                    : ""
                } hover:border-b-2`}
              >
                wdrożenia
              </Link>
            </li>
            <li>
              <Link
                href="/o-mnie"
                className={`${
                  pathname.includes("/o-mnie") ? "border-b-2 border-black" : ""
                } hover:border-b-2`}
              >
                o mnie
              </Link>
            </li>
            <li>
              <Link
                href="/#kontakt"
                className={`${
                  pathname.includes("/kontakt") ? "border-b-2 border-black" : ""
                } hover:border-b-2`}
              >
                kontakt
              </Link>
            </li>
          </ul>
          <div>
            <Sheet>
              <SheetTrigger className="md:hidden">
                <Menu size={30} />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <Image
                      src="/amlogo.png"
                      width={100}
                      height={100}
                      alt="logo"
                    />
                  </SheetTitle>
                </SheetHeader>

                <div className="">
                  <ul className="mt-10 flex flex-col font-sans gap-y-6 uppercase text-[14px] font-light">
                    <li>
                      <Link
                        href="/specjalizacje"
                        className="hover:border-b-2 border-black"
                      >
                        specjalizacje naukowe
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/projekty"
                        className="hover:border-b-2 border-black"
                      >
                        projekty badawcze
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/wdrozenia"
                        className="hover:border-b-2 border-black"
                      >
                        wdrożenia
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/o-mnie"
                        className="hover:border-b-2 border-black"
                      >
                        o mnie
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="hover:border-b-2 border-black">
                        kontakt
                      </Link>
                    </li>
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
