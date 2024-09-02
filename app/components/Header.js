"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const navLinks = {
    "/": {
      id: 1,
      name: "Home",
      path: "/",
    },
    "/about": {
      id: 2,
      name: "About Us",
      path: "/about",
    },
    "/products": {
      id: 3,
      name: "Our Products",
      path: "/products",
    },
    "/contact": {
      id: 4,
      name: "Contact Us",
      path: "/contact",
    },
  };

  const handleLinkClick = (path) => {
    router.push(path);
  };

  const [active, setActive] = useState(null);

  useEffect(() => {
    setActive(window.location.pathname);
  }, []);

  return (
    // <div className="flex bg-primary px-20 py-10 justify-between sticky">
    <div
      className="flex bg-primary px-20 py-5 justify-between sticky"
      style={{ height: "80px" }}
    >
      <div>
        <Image
          src="/logo.svg"
          // width={315}
          // height={71}
          width={175}
          height={50}
          alt="logo"
          className="cursor-pointer"
        />
      </div>
      <div className="items-center gap-4 flex">
        <div className="gap-10 hidden xs:flex">
          {Object.entries(navLinks).map((link, i) => {
            if (link[0] === active) {
              return (
                <div
                  key={i}
                  className="text-black cursor-pointer font-semibold underline underline-offset-4"
                  onClick={() => handleLinkClick(link[0])}
                >
                  {link[1].name}
                </div>
              );
            } else {
              return (
                <div
                  onClick={() => handleLinkClick(link[0])}
                  key={i}
                  className="text-text_secondary cursor-pointer"
                >
                  {link[1].name}
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
