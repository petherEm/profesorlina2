import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Books = () => {
  return (
    <section className="container max-w-6xl mx-auto mt-28 mb-28">
      <div className="flex flex-col items-center">
        <h1 className="font-sans text-3xl text-center max-w-3xl mx-auto">
          Za swoje dokonania zostałam wpisana do:
        </h1>

        {/* MEDALE */}
        <div className="mt-20 flex flex-col md:flex-row justify-between gap-y-6 md:space-x-40">
          {/* item */}
          <div className="flex items-start space-x-6">
            <div>
              <Image
                src="/Book-2000.png"
                alt="order-odrodzenia"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="">
              <h2 className="font-sans text-[14px] font-semibold">
                Złotej Księgi Nauki <br />
                Polskiej - <br />
                Naukowcy przełomu wieków
              </h2>
              <p className="text-[10px] font-sans">str. 305</p>
            </div>
          </div>

          {/* item */}
          <div className="flex items-start space-x-6">
            <div>
              <Image
                src="/Book-Golden.png"
                alt="order-zaslugi"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="">
              <h2 className="font-sans text-[14px] font-semibold">
                Złotej Księgi Nauki <br />
                Polskiej w 100. <br />
                rocznicę odzyskania <br />
                niepodległości
              </h2>
              <p className="text-[10px] font-sans">tom II, str. 7</p>
            </div>
          </div>
          {/* item */}
          <div className="flex items-start space-x-6">
            <div>
              <Image
                src="/Book-Person.png"
                alt="order-ken"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="">
              <h2 className="font-sans text-[14px] font-semibold">
                Encyklopedia <br />
                Osobistości <br />
                Rzeczypospolitej <br />
                Polskiej
              </h2>
              <p className="text-[10px] font-sans">tom VI, str. 756</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;
