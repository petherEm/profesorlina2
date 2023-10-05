import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";

const Projects = () => {
  return (
    <section className="p-4 md:p-0 container max-w-6xl mx-auto md:mt-28 md:mb-28">
      <div className="flex flex-col md:flex-row gap-y-10 justify-between md:space-x-10">
        {/* LEFT */}
        <div className="flex-1 flex flex-col gap-3">
          <h1 className="font-sans text-left tracking-wide text-4xl font-semibold">
            Realizowane projekty <br /> badawcze
          </h1>
          <p className="font-sans text-xl">
            Wpływ czynników <span className="italic">antropogenicznych</span> na
            zmiany w ekosystemach.
          </p>
          <Link
            href="/"
            className="font-sans uppercase text-[8px] md:text-[10px]"
          >
            <div className="flex items-center space-x-2">
              Więcej informacji <MoveRight size={12} className="ml-2" />
            </div>
          </Link>

          <Image
            src="/projects/PR-1.png"
            alt="project-1"
            width={400}
            height={300}
            className="object-contain mt-4"
          />
        </div>

        {/* RIGHT */}
        <div className="flex-1 font-sans">
          <div className="flex flex-col gap-y-4">
            <div>
              <div className="flex justify-between items-center space-x-4">
                <Image
                  src="/projects/PR-2.png"
                  alt="project-2"
                  width={100}
                  height={100}
                  className="object-contain"
                />
                <div>
                  <p className="text-md md:text-lg">
                    Znaczenie aspektów ekologicznych i krajobrazowych istotnych
                    w opracowaniach{" "}
                    <span className="italic">planistycznych</span>
                  </p>
                  <Link
                    href="/"
                    className="font-sans uppercase text-[8px] md:text-[10px]"
                  >
                    <div className="mt-4 flex tracking-widest items-center space-x-2">
                      Więcej informacji <MoveRight size={12} className="ml-2" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center space-x-4">
                <Image
                  src="/projects/PR-3.png"
                  alt="project-2"
                  width={100}
                  height={100}
                  className="object-contain"
                />
                <div>
                  <p className="text-md md:text-lg">
                    Rewitalizacja obszarów zdegradowanych jako wazny element
                    zwiększania przestrzeni publicznej oraz minimalizacja
                    skutków antropopresji
                  </p>
                  <Link
                    href="/"
                    className="font-sans uppercase text-[8px] md:text-[10px]"
                  >
                    <div className="mt-4 flex tracking-widest items-center space-x-2">
                      Więcej informacji <MoveRight size={12} className="ml-2" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center space-x-4">
                <Image
                  src="/projects/PR-4.png"
                  alt="project-2"
                  width={100}
                  height={100}
                  className="object-contain"
                />
                <div>
                  <p className="text-md md:text-lg">
                    Przydatność materii organicznej z węgla brunatnego i torfu
                    do zwiększania aktywności biologicznej ekosystemów na
                    obszarach zdegradowanych chemicznie
                    <span className="italic">planistycznych</span>
                  </p>
                  <Link
                    href="/"
                    className="font-sans uppercase text-[8px] md:text-[10px]"
                  >
                    <div className="mt-4 flex tracking-widest items-center space-x-2">
                      Więcej informacji <MoveRight size={12} className="ml-2" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
