"use client";

import Image from "next/image";
import DefaultLayout from "./layouts/DefaultLayout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
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
      <div className="banner">
        <img src="/bag.png" alt="Banner Image" />
        <div className="banner-text flex flex-col gap-5">
          <div>
            <div>New Collection</div>
            <div>Cotton Bag</div>
          </div>
          <p className="banner_description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tinciduntLorem ipsum dolor sit amet,
            consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt
          </p>
          {/* <button className="bg-black text-primary px-10 py-3 text-base md:text-lg lg:text-xl md:px-8 lg:px-12 md:py-4 lg:py-5">
            Shop Now
          </button> */}
          <button
            className="banner_btn"
            onClick={() => router.push("/products")}
          >
            <div>Shop Now</div>
            <img src="/right.svg" width={20} height={14} alt="Arrow" />
          </button>
        </div>
      </div>

      {/* <div style={{ width: "100%", height: "100%" }} className="bg-bg_gray">
        <div
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: 'url("/bag_banner_new.svg")',
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
      </div> */}
      <div className="w-full text-center px-10 py-20 bg-bg_gray">
        <div className="text-3xl xs:text-5xl sm:text-6xl font-semibold text-black">
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
              <div className="text-sm xs:text-base sm:text-lg text-black">
                {category.name}
              </div>
              <div className="text-xs sm:text-sm text-text_secondary underline cursor-pointer">
                See More...
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex p-10 flex-col sm:flex-row"
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
        <div className="w-full md:w-1/2 flex flex-col lg:flex-row items-center justify-center relative p-8 md:p-12 lg:p-16">
          <Image
            src="/bag4.svg"
            alt="bag4"
            width={493}
            height={599}
            className="w-[250px] h-[300px] sm:w-[350px] sm:h-[450px] md:w-[400px] md:h-[500px] lg:w-[493px] lg:h-[599px]"
            style={{ zIndex: 2 }}
          />
          <div
            className="hidden sm:block bg-cream w-[300px] h-[120px] sm:w-[400px] sm:h-[230px] md:w-[450px] md:h-[290px] lg:w-[547px] lg:h-[384px] absolute top-64 md:top-72 lg:top-80"
            style={{ zIndex: 1 }}
          ></div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-8 lg:gap-10 items-center justify-center">
          <div className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text_quaternary">
            We Create Quality Products for You Our Product Lovers
          </div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl text-black">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat.
          </div>
          <div className="flex gap-5 md:gap-8 lg:gap-10 text-text_quaternary items-center justify-center">
            <div className="flex flex-col p-0 sm:p-5 items-center">
              <div className="text-2xl sm:text-4xl md:text-5xl mb-5 font-semibold">
                {service_data.yoe}+
              </div>
              <div className="text-sm xs:text-base">Years of Experience</div>
            </div>

            <div className="h-20 w-[1px] bg-gray" />

            <div className="flex flex-col p-0 sm:p-5 items-center">
              <div className="text-2xl sm:text-4xl md:text-5xl mb-5 font-semibold">
                {service_data.brand_products}+
              </div>
              <div className="text-sm xs:text-base">Brand Products</div>
            </div>

            <div className="h-20 w-[1px] bg-gray" />

            <div className="flex flex-col p-0 sm:p-5 items-center">
              <div className="text-2xl sm:text-4xl md:text-5xl mb-5 font-semibold">
                {service_data.rating}
              </div>
              <div className="text-sm xs:text-base">Ratings in Clients</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-10 py-20 bg-bg_gray">
        <div className="text-3xl xs:text-5xl sm:text-6xl font-semibold text-black text-center ">
          Why One More?
        </div>
        <div className="w-4/5 mx-auto flex flex-col gap-10 text-center mt-16">
          <div className="text-black text-xs xs:text-lg sm:text-xl">
            Mr. Subramanian, driven by his personal struggle with unemployment,
            embarked on a mission to reduce plastic usage, create employment
            opportunities, and empower women. What began as a small venture
            named Kanimozhi Garments, in honour of his wife, has grown and
            evolved over nearly 8 years. During this time, the company has made
            significant strides in offering sustainable alternatives to plastic,
            while simultaneously uplifting local communities by providing jobs
            and promoting gender equality.
          </div>
          <div className="text-black text-xs xs:text-lg sm:text-xl">
            Recognizing the need for a broader impact, the company rebranded as
            Onemore, symbolizing their commitment to bringing "one more"
            positive change to the world. This new identity marked the beginning
            of their global journey, with the aim to not only reduce plastic
            waste on a larger scale but also to create a ripple effect of
            employment and empowerment across borders.
          </div>
          <div className="text-black text-xs xs:text-lg sm:text-xl">
            As the younger generation, we are deeply inspired by Mr.
            Subramanian’s vision. We are dedicated to taking his mission
            further—introducing innovative solutions that align with global
            sustainability goals, collaborating with international partners, and
            expanding our reach to new markets. By doing so, we strive to
            protect the environment, generate meaningful employment, and empower
            women around the world, ensuring that Onemore becomes a beacon of
            positive change on a global stage.
          </div>
        </div>
        {/* <Slider {...sliderSettings} className="py-10">
          {similar_products.map((product) => (
            <div key={product.id} className="p-5">
              <div className=" flex flex-col gap-4  p-5 ">
                <Image src={product.img} alt="logo" width={388} height={416} />
                <div className="text-lg xs:text-xl text-black ">
                  {product.name}
                </div>
                <div className="text-sm text-black">{product.description}</div>
              </div>
            </div>
          ))}
        </Slider> */}
      </div>
      <div className="w-full px-10 py-20 flex flex-col gap-10 bg-bg_gray">
        <div className="flex justify-between items-center">
          <div className="text-3xl xs:text-5xl sm:text-6xl font-semibold text-black px-5">
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
              <div className="flex flex-col gap-1 p-5 bg-secondary justify-center ">
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
