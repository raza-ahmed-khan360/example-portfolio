import Image from "next/image";
import Link from "next/link";
import React from "react";

const socialLinks = [
  { name: "Facebook", icon: "/fb.svg", href: "#" },
  { name: "X", icon: "/x.svg", href: "#" },
  { name: "Instagram", icon: "/insta.svg", href: "#" },
  { name: "LinkedIn", icon: "/Linkedin.svg", href: "#" }
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#faf5f5] px-4 md:px-[194px] py-12 md:py-[75px]">
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Social Icons */}
        <div className="flex items-center justify-center space-x-6 md:space-x-8">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f88484] rounded-full"
              aria-label={`${social.name} Profile`}
            >
              <Image 
                alt={social.name} 
                src={social.icon} 
                height={30} 
                width={30} 
                className="w-6 h-6 md:w-[30px] md:h-[30px]"
              />
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-black text-base md:text-[22px] font-medium font-['Heebo'] text-center">
          Copyright ©{new Date().getFullYear()} All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;