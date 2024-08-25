import Image from "next/image";

export default function Header() {
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Out Products",
      path: "/products",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
  ];

  return (
    <div className="flex bg-primary px-20 py-10 justify-between sticky">
      <div className="">
        <Image src="/logo.svg" width={315} height={71} alt="logo" />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex gap-10">
          {navLinks.map((link, i) => (
            <div key={i} className="text-text_secondary cursor-pointer">
              {link.name}
            </div>
          ))}
        </div>
        <div className="w-80">
          <Image src="/search.svg" width={20} height={20} alt="search" />
        </div>
      </div>
    </div>
  );
}
