import Image from "next/image";
import React from "react";
import Header from "./Header";

const Hero = () => {
  return (
    <section className="bg-[#F6F1F1] px-4 py-12 md:px-12 lg:px-[194px] lg:py-[75px]">
      <Header/>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between md:gap-12 lg:gap-[211px] max-w-6xl mx-auto">
        {/* right section (moved up for mobile-first approach) */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <Image
            alt="Profile"
            src={"/image.png"}
            height={500}
            width={500}
            className="shadow-lg rounded-full mt-6 w-64 h-64 md:w-80 md:h-80 lg:w-[320px] lg:h-[320px] object-cover"
          />
        </div>

        {/* left section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-[#21243d] text-3xl md:text-4xl lg:text-5xl font-black font-['Heebo'] 
            leading-tight lg:leading-[61px] tracking-wider lg:tracking-widest mb-4">
            Hi, I am John,
            <br />
            Creative Technologist
          </h1>
          
          <p className="text-[#21243d] text-base font-normal font-['Heebo'] 
            mb-6 px-4 md:px-0 max-w-md mx-auto md:mx-0">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          
          <div className="flex justify-center md:justify-start">
            <button className="w-full max-w-[205px] h-[50px] bg-[#f88484] 
              rounded-sm shadow text-white text-lg font-medium font-['Heebo']
              hover:bg-[#f86c6c] transition-colors duration-300">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;