"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <div className="sticky-component bottom-0 flex flex-col w-full justify-center">
      <div
        className="flex flex-col xs:flex-row px-20 py-10 gap-10"
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "linear-gradient(to top, #13B7BA, #d6f0f2)",
          backgroundSize: "cover, cover",
          backgroundPosition: "center, center",
          backgroundRepeat: "no-repeat, no-repeat",
          zIndex: 1,
        }}
      >
        <div className="w-full xs:w-1/3 flex flex-col gap-10">
          <Image src="/logo.svg" width={315} height={71} alt="logo" />
          <div className="text-black">
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc, litot Europa
            usa li sam vocabular. Li lingues differe solmen in li.
          </div>
          <div className="flex gap-5">
            <Image src="/facebook.svg" width={40} height={40} alt="facebook" />
            <Image src="/insta.svg" width={40} height={40} alt="insta" />
            <Image src="/twitter.svg" width={40} height={40} alt="twitter" />
            <Image src="/youtube.svg" width={40} height={40} alt="youtube" />
          </div>
        </div>
        <div className="w-2/3 flex justify-start flex-col xs:flex-row gap-10">
          <div className="w-full xs:w-1/2 flex justify-start flex-col gap-5 ">
            <div className="text-text_tertiary text-xl font-semibold">
              Quick Links
            </div>
            <div className="flex flex-col gap-3 items-start">
              <div
                onClick={() => router.push("/contact")}
                className="text-black cursor-pointer"
              >
                Contact Us
              </div>

              <div
                onClick={() => router.push("/about")}
                className="text-black cursor-pointer"
              >
                About Us
              </div>

              <div
                onClick={() => router.push("/products")}
                className="text-black cursor-pointer"
              >
                Our Products
              </div>

              <div
                onClick={() => router.push("/")}
                className="text-black cursor-pointer"
              >
                Testimonials
              </div>
            </div>
          </div>
          <div className="w-full xs:w-1/2 flex justify-start flex-col gap-5 ">
            <div className="text-text_tertiary text-xl font-semibold">
              Contact Us
            </div>
            <div className="flex flex-col gap-3 items-start">
              <div className="flex gap-3 items-center justify-center">
                <Image
                  src="/message.svg"
                  width={20}
                  height={20}
                  alt="message"
                />
                <div className="text-black">XXXXXXX@website.com</div>
              </div>

              <div className="flex gap-3 items-center justify-center">
                <Image
                  src="/location.svg"
                  width={20}
                  height={20}
                  alt="location"
                />
                <div className="text-black">
                  Lorem ipsum dolor sit amet, consectetuer, Chennai 620011
                </div>
              </div>

              <div className="flex gap-3 items-center justify-center">
                <Image src="/phone.svg" width={20} height={20} alt="phone" />
                <div className="text-black">+91 00000 00000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark_bottom text-white text-center p-5">
        Ⓒ 2024 All rights reserved. This is Your Company
      </div>
    </div>
  );
}
