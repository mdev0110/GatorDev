// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:m-16 relative">
      {/* <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          {
            personalData.description.map(item => (
              <div class="mt-5" key={item.id}>
                <p className="font-medium mb-2 text-[#98dfeb] text-2xl uppercase">
                  {item.title}
                </p>
                <p className="text-gray-200 text-lg lg:text-lg">
                  {item.description}
                </p>
              </div>
            ))
          }
        </div>
        {/* <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="GatorDevs Agency"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div> */}
      </div>
    </div>
  );
};

export default AboutSection;