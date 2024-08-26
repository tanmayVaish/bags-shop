"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const navLinks = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About Us",
      path: "/about",
    },
    {
      id: 3,
      name: "Out Products",
      path: "/products",
    },
    {
      id: 4,
      name: "Contact Us",
      path: "/contact",
    },
  ];

  const [active, setActive] = useState(1);

  return (
    <div className="flex bg-primary px-20 py-10 justify-between sticky">
      <div className="">
        <Image
          src="/logo.svg"
          width={315}
          height={71}
          alt="logo"
          className="cursor-pointer"
        />
      </div>
      <div className="items-center gap-4 flex">
        <div className=" gap-10 hidden xs:flex">
          {navLinks.map((link, i) => {
            if (link.id === active) {
              return (
                <div
                  key={i}
                  className="text-black cursor-pointer font-semibold underline underline-offset-4"
                  onClick={() => setActive(link.id)}
                >
                  {link.name}
                </div>
              );
            } else {
              return (
                <div
                  onClick={() => setActive(link.id)}
                  key={i}
                  className="text-text_secondary cursor-pointer"
                >
                  {link.name}
                </div>
              );
            }
          })}
        </div>
        <div className="w-20 mx-10">
          <Image src="/search.svg" width={20} height={20} alt="search" />
        </div>
      </div>
    </div>
  );
}
