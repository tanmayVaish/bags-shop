"use client";

import Image from "next/image";
import DefaultLayout from "./layouts/DefaultLayout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useRef } from "react";

const categories = [
  {
    id: 1,
    name: "Shopping Bag",
    path: "/cotton",
    img: "/bag1.svg",
  },
  {
    id: 2,
    name: "Trend Fashion Bag",
    path: "/cotton",
    img: "/bag2.svg",
  },
  {
    id: 3,
    name: "Office Bag",
    path: "/cotton",
    img: "/bag3.svg",
  },
];

const similar_products = [
  {
    id: 1,
    name: "Trend Fashion Bag",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
    img: "/bag1.svg",
  },
  {
    id: 2,
    name: "Trend Fashion Bag",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
    img: "/bag2.svg",
  },
  {
    id: 3,
    name: "Trend Fashion Bag",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
    img: "/bag3.svg",
  },
  {
    id: 4,
    name: "Trend Fashion Bag",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
    img: "/bag1.svg",
  },
  {
    id: 5,
    name: "Trend Fashion Bag",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
    img: "/bag3.svg",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Trend Fashion Bag",
    place: "Dhaka",
    rating: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
  },
  {
    id: 2,
    name: "Trend Fashion Bag",
    place: "Dhaka",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
  },
  {
    id: 3,
    name: "Trend Fashion Bag",
    place: "Dhaka",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
  },
  {
    id: 4,
    name: "Trend Fashion Bag",
    place: "Dhaka",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
  },
  {
    id: 5,
    name: "Trend Fashion Bag",
    place: "Dhaka",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
  },
  {
    id: 6,
    name: "Trend Fashion Bag",
    place: "Dhaka",
    rating: 2,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
  },
];

const service_data = {
  yoe: 10,
  brand_products: "15K",
  rating: 4.9,
};

const HomePage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    customPaging: (i) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: i === activeSlide ? "#ff0000" : "#FFD9D1",
        }}
      />
    ),
    afterChange: (current) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonialSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [activeSlide, setActiveSlide] = useState(0);
  const slideRef = useRef(null);

  return (
    <DefaultLayout>
      <div style={{ width: "100%", height: "100%" }}>
        <div
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              'linear-gradient(to right, #18A5A8, #06DFE380, #feb47b00), url("/bag_banner.svg")',
            backgroundSize: "cover, cover",
            backgroundPosition: "center, center",
            backgroundRepeat: "no-repeat, no-repeat",
            minHeight: "562px",
            zIndex: 1,
          }}
        >
          <div className="text-white w-2/3 p-20 flex flex-col gap-10 items-start">
            <div className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-8xl">
              New Collection Cotton Bag
            </div>
            <div className="text-sm xs:text-base sm:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tinciduntLorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt
            </div>
            <button className="bg-black text-primary px-10 py-3">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full text-center px-10 py-20">
        <div className="text-5xl xs:text-6xl sm:text-6xl font-semibold">
          Top Categories
        </div>
        <div className="flex flex-wrap justify-center gap-10 p-10">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center gap-4 pb-5"
            >
              <div>
                <Image src={category.img} alt="logo" width={388} height={416} />
              </div>
              <div className="text-sm xs:text-base sm:text-lg">
                {category.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex p-10"
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(to top, #18A5A8, #06DFE380, #feb47b00)",
          backgroundSize: "cover, cover",
          backgroundPosition: "center, center",
          backgroundRepeat: "no-repeat, no-repeat",
          zIndex: 1,
        }}
      >
        <div className="w-full md:w-1/2 hidden xs:flex flex-col lg:flex-row items-center justify-center relative p-8 md:p-12 lg:p-16">
          <Image
            src="/bag4.svg"
            alt="bag4"
            width={493}
            height={599}
            className="w-[250px] h-[300px] sm:w-[350px] sm:h-[450px] md:w-[400px] md:h-[500px] lg:w-[493px] lg:h-[599px]"
            style={{ zIndex: 2 }}
          />
          <div
            className="bg-cream w-[300px] h-[120px] sm:w-[400px] sm:h-[230px] md:w-[450px] md:h-[290px] lg:w-[547px] lg:h-[384px] absolute xs:block top-64 md:top-72 lg:top-80"
            style={{ zIndex: 1 }}
          ></div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-8 lg:gap-10 items-center justify-center">
          <div className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text_quaternary">
            We Create Quality Products for You Our Product Lovers
          </div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat.
          </div>
          <div className="flex gap-5 md:gap-8 lg:gap-10 text-text_quaternary items-center justify-center">
            <div className="flex flex-col p-5 items-center">
              <div className="text-3xl sm:text-4xl md:text-5xl mb-5 font-semibold">
                {service_data.yoe}+
              </div>
              <div className="text-sm xs:text-base">Years of Experience</div>
            </div>

            <div className="h-20 w-[1px] bg-gray" />

            <div className="flex flex-col p-5 items-center">
              <div className="text-3xl sm:text-4xl md:text-5xl mb-5 font-semibold">
                {service_data.brand_products}+
              </div>
              <div className="text-sm xs:text-base">Brand Products</div>
            </div>

            <div className="h-20 w-[1px] bg-gray" />

            <div className="flex flex-col p-5 items-center">
              <div className="text-3xl sm:text-4xl md:text-5xl mb-5 font-semibold">
                {service_data.rating}
              </div>
              <div className="text-sm xs:text-base">Ratings in Clients</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-10 py-20">
        <div className="text-5xl xs:text-6xl sm:text-6xl font-semibold">
          Similar Products
        </div>
        <Slider {...sliderSettings} className="py-10">
          {similar_products.map((product) => (
            <div key={product.id} className="w-[200px] p-5 ">
              <div className="flex flex-col items-center justify-center gap-4 bg-white p-5">
                <Image src={product.img} alt="logo" width={388} height={416} />
                <div className="text-lg xs:text-xl ">{product.name}</div>
                <div className="text-sm">{product.description}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-full px-10 py-20 flex flex-col gap-20">
        <div className="flex justify-between items-center">
          <div className="text-5xl xs:text-6xl sm:text-6xl font-semibold">
            Testimonials
          </div>
          <div className="flex gap-5">
            <div
              onClick={() => {
                slideRef.current.slickPrev();
              }}
              className="bg-white p-1 xs:p-5 rotate-180 cursor-pointer"
            >
              <Image src="/arrow_dark.svg" alt="right" width={20} height={20} />
            </div>
            <div
              onClick={() => {
                slideRef.current.slickNext();
              }}
              className="bg-white p-1 xs:p-5 cursor-pointer"
            >
              <Image src="/arrow_dark.svg" alt="right" width={20} height={20} />
            </div>
          </div>
        </div>
        <Slider ref={slideRef} {...testimonialSliderSettings}>
          {testimonials.map((product) => (
            <div
              key={product.id}
              className="p-5 flex items-center justify-center"
            >
              <div className="flex flex-col gap-1 p-5 bg-secondary w-[388px] justify-center ">
                <div className="text-lg xs:text-xl font-semibold text-text_quaternary">
                  {product.name}
                </div>
                <div className="text-sm text-text_tertiary">
                  {product.place}
                </div>
                <div>
                  {product.rating > 0
                    ? "⭐".repeat(product.rating)
                    : "⭐️⭐️⭐️⭐️⭐️"}
                </div>
                <div className="text-sm text-text_tertiary">
                  {product.description}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
