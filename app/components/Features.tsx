import Image from "next/image";
import React from "react";

const featuresData = [
  {
    image: "/feature1.png",
    title: "Designing Dashboards",
    year: "2020",
    category: "Dashboard",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
  },
  {
    image: "/feature2.png",
    title: "Designing Dashboards",
    year: "2020",
    category: "Dashboard",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
  },
  {
    image: "/feature3.png",
    title: "Designing Dashboards",
    year: "2020",
    category: "Dashboard",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
  }
];

const FeatureItem = ({ image, title, year, category, description }: {
  image: string,
  title: string,
  year: string,
  category: string,
  description: string
}) => (
  <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 pb-12 md:pb-16 border-b border-gray-200 last:border-b-0">
    <div className="w-full md:w-auto flex justify-center md:block">
      <Image
        alt={title}
        width={246}
        height={180}
        className="rounded-md w-full max-w-[246px] h-auto object-cover"
        src={image}
      />
    </div>
    <div className="w-full max-w-2xl">
      <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
        {title}
      </h3>
      <div className="flex items-center space-x-4 mb-3">
        <span className="bg-[#f98585] text-white text-sm md:text-lg font-bold px-2 py-1 rounded-2xl">
          {year}
        </span>
        <span className="text-black/60 text-base md:text-xl font-normal">
          {category}
        </span>
      </div>
      <p className="text-black text-base md:text-lg font-light leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const Features = () => {
  return (
    <section className="bg-[#F6F1F1] w-full px-4 md:px-[194px] py-12 md:py-[75px]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-black text-xl md:text-[22px] font-medium font-['Heebo'] mb-8 md:mb-[55px]">
          Featured works
        </h2>
        
        <div className="space-y-8 md:space-y-[114px]">
          {featuresData.map((feature, index) => (
            <FeatureItem 
              key={index}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;