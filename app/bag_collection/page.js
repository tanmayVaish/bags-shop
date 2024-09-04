"use client";

import DefaultLayout from "../layouts/DefaultLayout";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./bag_collection.css";
import { useRouter } from "next/navigation";

const collection = {
  name: "Bag Collection",
  products: [
    {
      id: 1,
      sku: "bag-1234",
      name: "Trend Fashion Bag",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
      img: "/bag.svg",
    },
    {
      id: 2,
      sku: "bag-5678",
      name: "Trend Fashion Bag",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
      img: "/bag.svg",
    },
    {
      id: 3,
      sku: "bag-9012",
      name: "Trend Fashion Bag",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
      img: "/bag.svg",
    },
    {
      id: 4,
      sku: "bag-3456",
      name: "Trend Fashion Bag",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
      img: "/bag.svg",
    },
    {
      id: 5,
      sku: "bag-7890",
      name: "Trend Fashion Bag",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
      img: "/bag.svg",
    },
    {
      id: 6,
      sku: "bag-2345",
      name: "Trend Fashion Bag",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
      img: "/bag.svg",
    },
    {
      id: 7,
      sku: "bag-6789",
      name: "Trend Fashion Bag",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
      img: "/bag.svg",
    },
    {
      id: 8,
      sku: "bag-0123",
      name: "Trend Fashion Bag",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
      img: "/bag.svg",
    },
    {
      id: 9,
      sku: "bag-4567",
      name: "Trend Fashion Bag",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
      img: "/bag.svg",
    },
    {
      id: 10,
      sku: "bag-8901",
      name: "Trend Fashion Bag",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
      img: "/bag.svg",
    },
    {
      id: 11,
      sku: "bag-2340",
      name: "Trend Fashion Bag",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
      img: "/bag.svg",
    },
    {
      id: 12,
      sku: "bag-6780",
      name: "Trend Fashion Bag",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
      img: "/bag.svg",
    },
  ],
};

export default function BagCollection() {
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
      <div className="w-full bg-bg_gray">
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
        <div className="w-full px-5 sm:px-10 lg:px-20 py-10">
          <div>
            <div className="text-4xl lg:text-5xl font-bold text-black">
              {collection.name}
            </div>
            <div className="text-text_secondary text-sm">
              Showing more than 100+ unisex product
            </div>
          </div>

          <div className="flex flex-wrap gap-10 pt-10 w-full items-center justify-center">
            {collection.products.map((product) => (
              <div
                onClick={() => router.push(`/details`)}
                key={product.id}
                className="flex flex-col  gap-4 pb-5 cursor-pointer"
              >
                <div className="transition-shadow duration-300 hover:shadow-[5px_5px_2px_0px_rgba(83,196,199)] drop-shadow-md">
                  <Image
                    src={product.img}
                    alt="logo"
                    width={388}
                    height={416}
                  />
                </div>

                <div className="text-sm xs:text-base sm:text-lg text-text_secondary">
                  {product.sku}
                </div>
                <div className="text-sm xs:text-base sm:text-lg text-black">
                  {product.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
