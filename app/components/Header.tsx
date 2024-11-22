"use client"
import Link from "next/link";
import React, { useState } from "react";

const navItems = [
    { label: "Works", href: "#works" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" }
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="w-full flex lg:justify-end px-4 md:px-[69px] py-4 mb-12 md:py-0">
            <div className="max-w-6xl mx-auto flex justify-end items-center">
                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 relative"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <div className="space-y-1.5">
                        <span className={`block w-6 h-0.5 bg-black transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-black transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-black transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </div>
                </button>

                {/* Navigation */}
                <nav
                    className={`
            fixed inset-0 bg-[#F6F1F1] z-40 flex flex-col justify-center items-center
            md:static md:bg-transparent md:flex-row md:justify-end md:items-center
            transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            md:translate-x-0
          `}
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="
                text-black text-2xl md:text-lg font-medium font-['Inter'] 
                hover:text-[#f88484] 
                py-4 md:py-0 md:px-4 
                transition duration-300 
                hover:underline 
                cursor-pointer
              "
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;