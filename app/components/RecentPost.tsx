import React from "react";

const RecentPost = () => {
    return (
        <section className="w-full py-12 md:py-[75px] bg-[#f4e2e2] px-4 md:px-[194px]">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 px-2 md:px-0">
                {/* Recent Post */}
                <div className="text-black text-lg font-medium font-['Heebo'] mb-4 md:mb-0">
                    Recent Post
                </div>

                {/* View All */}
                <span className="text-[#f88484] hover:underline text-lg font-medium font-['Heebo'] cursor-pointer">
                    View all
                </span>
            </div>

            {/* card element */}
            <div className="grid grid-cols-1 gap-6 md:gap-[29px] md:grid-cols-2 max-w-6xl mx-auto">
                {[1, 2].map((item) => (
                    <div 
                        key={item}
                        className="w-full bg-white shadow-lg p-6 rounded-lg transform transition-transform duration-300 hover:scale-105"
                    >
                        {/* Title */}
                        <h2 className="text-black text-xl font-bold leading-tight mb-4">
                            Making a design system from scratch
                        </h2>

                        {/* Meta Information */}
                        <div className="flex items-center text-gray-500 text-sm font-normal mb-4 space-x-4">
                            <span>12 Feb 2020</span>
                            <span className="h-4 w-px bg-gray-300" /> {/* Divider */}
                            <span>Design, Pattern</span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 text-base font-normal leading-relaxed">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            sint. Velit officia consequat duis enim velit mollit. Exercitation
                            veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RecentPost;