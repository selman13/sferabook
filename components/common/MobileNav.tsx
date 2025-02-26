"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const allLinks = [
    { href: "/books", label: "Kitablar" },
    { href: "/basket", label: "Səbət" },
    { href: "/login", label: "Giriş" },
  ];

  return (
    <div>
      <button onClick={toggleMenu}>
        {openMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {openMenu && (
        <div className="absolute  top-14 left-0 w-full bg-red-800 p-5 flex flex-col gap-3 text-white rounded shadow-lg">
          <div className="border-t border-white mb-3"></div>
          {
           allLinks.map((link, index) => (
            <Link key={index} href={link.href} onClick={() => setOpenMenu(false)} className="hover:border-b-2">{link.label}</Link>
           ))
                
                    
                
            
          }
        </div>
      )}
    </div>
  );
};

export default MobileNav;
