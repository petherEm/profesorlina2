import React from "react";
import Image from "next/image";

const UniBanner = () => {
  return (
    <section className="container max-w-6xl mx-auto h-32 mt-20 md:mb-20">
      <div className="flex justify-between items-center space-x-6 md:space-x-2">
        <div>
          <Image
            src="/unilogos/pw.png"
            alt="Politechnika Warszawska"
            width={150}
            height={66}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/unilogos/ms.png"
            alt="Politechnika Warszawska"
            width={150}
            height={66}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/unilogos/su.png"
            alt="Politechnika Warszawska"
            width={150}
            height={66}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src="/unilogos/astana.png"
            alt="Politechnika Warszawska"
            width={150}
            height={66}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default UniBanner;
