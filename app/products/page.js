"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import DefaultLayout from "../layouts/DefaultLayout";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./product.css";
import NewSlider from "./NewSlider";

const sections = [
  {
    id: 1,
    name: "Standard Tote Bags",
    products: [
      {
        id: 1,
        sku: "bag-1001",
        name: "Trend Fashion Bag",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
        img: "/bag.svg",
      },
      {
        id: 2,
        sku: "bag-1002",
        name: "Trend Fashion Bag",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
        img: "/bag.svg",
      },
      {
        id: 3,
        sku: "bag-1003",
        name: "Trend Fashion Bag",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
        img: "/bag.svg",
      },
      {
        id: 4,
        sku: "bag-1004",
        name: "Trend Fashion Bag",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
        img: "/bag.svg",
      },
      {
        id: 5,
        sku: "bag-1005",
        name: "Trend Fashion Bag",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
        img: "/bag.svg",
      },
      {
        id: 6,
        sku: "bag-1006",
        name: "Trend Fashion Bag",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
        img: "/bag.svg",
      },
    ],
  },
  {
    id: 2,
    name: "Cotton Bags",
    products: [
      {
        id: 1,
        sku: "bag-2001",
        name: "Trend Fashion Bag",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
        img: "/bag.svg",
      },
      {
        id: 2,
        sku: "bag-2002",
        name: "Trend Fashion Bag",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
        img: "/bag.svg",
      },
      {
        id: 3,
        sku: "bag-2003",
        name: "Trend Fashion Bag",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
        img: "/bag.svg",
      },
      {
        id: 4,
        sku: "bag-1004",
        name: "Trend Fashion Bag",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
        img: "/bag.svg",
      },
      {
        id: 5,
        sku: "bag-1005",
        name: "Trend Fashion Bag",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
        img: "/bag.svg",
      },
      {
        id: 6,
        sku: "bag-1006",
        name: "Trend Fashion Bag",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
        img: "/bag.svg",
      },
      {
        id: 7,
        sku: "bag-1004",
        name: "Trend Fashion Bag",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
        img: "/bag.svg",
      },
      {
        id: 8,
        sku: "bag-1005",
        name: "Trend Fashion Bag",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
        img: "/bag.svg",
      },
      {
        id: 9,
        sku: "bag-1006",
        name: "Trend Fashion Bag",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
        img: "/bag.svg",
      },
    ],
  },
  {
    id: 3,
    name: "Natural Cotton Rope Bags",
    products: [
      {
        id: 1,
        sku: "bag-3001",
        name: "Trend Fashion Bag",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
        img: "/bag.svg",
      },
      {
        id: 2,
        sku: "bag-3002",
        name: "Trend Fashion Bag",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
        img: "/bag.svg",
      },
      {
        id: 3,
        sku: "bag-3003",
        name: "Trend Fashion Bag",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
        img: "/bag.svg",
      },
    ],
  },
  {
    id: 4,
    name: "Zipper Pouches",
    products: [
      {
        id: 1,
        sku: "bag-4001",
        name: "Trend Fashion Bag",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
        img: "/bag.svg",
      },
      {
        id: 2,
        sku: "bag-4002",
        name: "Trend Fashion Bag",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
        img: "/bag.svg",
      },
      {
        id: 3,
        sku: "bag-4003",
        name: "Trend Fashion Bag",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
        img: "/bag.svg",
      },
    ],
  },
];

export default function Products() {
  const router = useRouter();

  const settings = {
    infinite: true,
    dots: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <DefaultLayout>
      <div className="bg-bg_gray">
        <div className="w-full">
          <Slider {...settings}>
            <div>
              <Image
                className="w-full"
                src="/carousal1.svg"
                width={1440}
                height={420}
                alt="logo"
              />
            </div>
            <div>
              <Image
                className="w-full"
                src="/carousal2.svg"
                width={1440}
                height={420}
                alt="logo"
              />
            </div>
            <div>
              <Image
                className="w-full"
                src="/carousal3.svg"
                width={1440}
                height={420}
                alt="logo"
              />
            </div>
          </Slider>
        </div>
        <div className="w-full px-5 sm:px-10 lg:px-20 py-10">
          <div>
            <div className="text-4xl lg:text-5xl font-bold text-black">
              One More Bag Collections
            </div>
            <div className="text-text_secondary text-sm">
              Showing more than 100+ unisex product
            </div>
          </div>
          <div>
            {sections.map((section) => (
              <Section key={section.id} {...section} router={router} />
            ))}
          </div>
        </div>
      </div>
      {/* New slider start */}
      {/* <div>
      {sections.map((section) => (
        <Section key={section.id} {...section} router={router} />
      ))}
      </div> */}
      {/* New slider end */}
    </DefaultLayout>
  );
}

function Section({ id, name, products, router }) {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  return (
    <div key={id} className="flex flex-col gap-10 py-10">
      <div className="flex justify-between items-center">
        <div className="text-3xl lg:text-5xl font-bold text-black">{name}</div>
        <div
          onClick={() => router.push("/bag_collection")}
          className="text-sm underline cursor-pointer text-black text-nowrap"
        >
          View more
        </div>
      </div>
      <div className="">
        <NewSlider products={products} router={router} />

        {/* <Slider {...sliderSettings}>
          {products.map((product, i) => (
            <div
              key={product.id}
              className="flex flex-col gap-4 pb-5 cursor-pointer w-[200px]"
              onClick={() => router.push(`/details`)}
            >
              <div className="transition-shadow duration-300 hover:shadow-[5px_5px_2px_0px_rgba(83,196,199)] drop-shadow-md">
                <Image src={product.img} alt="logo" width={388} height={416} />
              </div>

              <div className="text-sm xs:text-base sm:text-lg text-text_secondary">
                {product.sku}
              </div>
              <div className="text-sm xs:text-base sm:text-lg text-black">
                {product.name}
              </div>
            </div>
          ))}
        </Slider> */}
      </div>
    </div>
  );
}
