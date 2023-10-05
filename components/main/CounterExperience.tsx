"use client";

import CountUp from "react-countup";

const CounterExperience = () => {
  return (
    <section className="mt-20 mb-20 container grid grid-cols-2 md:grid-cols-4 p-0 md:px-10 max-w-6xl mx-auto font-sans">
      <div className="font-libre flex items-center -space-x-3">
        <div className="bg-black h-[1.5px] w-[60px] rotate-90" />
        <div className="flex flex-col text-3xl md:text-4xl -space-y-2">
          <CountUp start={0} end={40} duration={8} suffix="" />
          <span className="font-sans text-[12px]">lat w nauce</span>
        </div>
      </div>
      <div className="flex items-center -space-x-3">
        <div className="bg-black h-[1.5px] w-[60px] rotate-90" />
        <div className="flex flex-col text-3xl md:text-4xl -space-y-2">
          <CountUp start={0} end={5} duration={5} suffix="" />
          <span className="font-sans text-[12px]">wypromowanych doktorów</span>
        </div>
      </div>
      <div className="flex items-center -space-x-3">
        <div className="bg-black h-[1.5px] w-[60px] rotate-90" />
        <div className="flex flex-col text-3xl md:text-4xl -space-y-2">
          <CountUp start={0} end={200} duration={8} suffix="" />
          <span className="font-sans text-[12px]">publikacji naukowych</span>
        </div>
      </div>
      <div className="flex items-center -space-x-3">
        <div className="bg-black h-[1.5px] w-[60px] rotate-90" />
        <div className="flex flex-col text-3xl md:text-4xl -space-y-2">
          <CountUp start={0} end={22} duration={8} suffix="" />
          <span className="font-sans text-[12px]">nagród i wyróżnień</span>
        </div>
      </div>
    </section>
  );
};

export default CounterExperience;
