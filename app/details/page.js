"use client";

import { useState, useRef, useEffect } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import Image from "next/image";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./details.css";
import ShareIcon from "@mui/icons-material/Share";
import NewSlider from "../products/NewSlider";

const product_detail = {
  id: 1,
  sku: "bag-1234",
  name: "Trend Fashion Bag",
  description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip)",
  model: "W70 x D80 x H85 cm  (or)  Customize your Size ",
  details: [
    "W70 x D80 x H85 cm",
    "Material: 100% Cotton",
    "Wash with like colors",
    "Style: Trend Fashion",
  ],
  washing_instruction: "Wash with like colors",
  material: "Cotton",
  price: 1000,
  imgs: ["/bag1.svg", "/bag2.svg", "/bag3.svg", "/bag1.svg","/bag2.svg"],
  colors: ["#fff", "#C0D1E1", "#517998"],
  similar_products: [
    {
      id: 1,
      sku: "bag-4001",
      name: "Trend Fashion Bag",
      price: 1000,
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
      img: "/bag.svg",
    },
    {
      id: 2,
      sku: "bag-4002",
      name: "Trend Fashion Bag",
      price: 1000,
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
      img: "/bag.svg",
    },
    {
      id: 3,
      sku: "bag-4003",
      price: 1000,
      name: "Trend Fashion Bag",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
      img: "/bag.svg",
    },
  ],
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Details() {
  const images = product_detail.imgs;

  const [productDetail, setProductDetail] = useState(product_detail);
  const [value, setValue] = useState(0);

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [allThumbnailsVisible, setAllThumbnailsVisible] = useState(false);
  const galleryRef = useRef(null);
  const thumbnailWidth = 110;

  useEffect(() => {
    checkAllThumbnailsVisible();
  }, [activeIndex]);

  const checkAllThumbnailsVisible = () => {
    setAllThumbnailsVisible(visibleThumbnails() >= images.length);
  };

  const visibleThumbnails = () => {
    return Math.floor(galleryRef.current.offsetWidth / thumbnailWidth);
  };

  const handleOnSelect = (src, index) => {
    setSelectedImage(src);
    setActiveIndex(index);
    const galleryElement = galleryRef.current;
    const scrollPosition = index * thumbnailWidth;
    galleryElement.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    galleryRef.current.scrollBy({
      left: -thumbnailWidth * 3,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    galleryRef.current.scrollBy({
      left: thumbnailWidth * 3,
      behavior: "smooth",
    });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <DefaultLayout>
      <div className="w-full justify-center flex flex-col items-center bg-white gap-7">
        <div className="max-w-[1400px] flex flex-col sm:flex-row w-full my-20 mx-5">
          <div className="w-full sm:w-1/2 p-5">
            <div className="product-image-container">
              <div className="product-selected-image">
                <Image
                  src={selectedImage}
                  alt="product"
                  width={500} // Adjust size as needed
                  height={500}
                  layout="responsive"
                />
              </div>
              <div className="gallery-container py-2 relative">
                <button
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 z-10"
                  onClick={scrollLeft}
                >
                  &#8249;
                </button>
                <div
                  className="gallery-wrapper overflow-x-auto scrollbar-custom"
                  ref={galleryRef}
                >
                  <div className="gallery flex gap-2">
                    {images.map((src, index) => (
                      <Image
                        key={index}
                        src={src}
                        alt={`Thumbnail ${index + 1}`}
                        width={thumbnailWidth}
                        height={thumbnailWidth}
                        className={`thumbnail ${
                          selectedImage === src ? "selected" : ""
                        } cursor-pointer`}
                        style={
                          selectedImage === src
                            ? { border: "1px solid #000" }
                            : { opacity: 0.7 }
                        }
                        onClick={() => handleOnSelect(src, index)}
                      />
                    ))}
                  </div>
                </div>
                <button
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 z-10"
                  onClick={scrollRight}
                >
                  &#8250;
                </button>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 p-5">
            <div className="flex flex-col gap-5 mb-36 text-black">
              <div className="text-text_secondary">{productDetail.sku}</div>
              <h1 className="text-4xl xs:text-5xl lg:text-6xl font-bold">
                {productDetail.name}
              </h1>
              <p className="text-xs sm:text-lg">{productDetail.description}</p>
            </div>
            <div>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Description" {...a11yProps(0)} />
                  <Tab label="Specifications" {...a11yProps(1)} />
                  <Tab label="Reviews" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <div>
                  <div className="font-bold text-2xl sm:text-3xl text-black">
                    Model
                  </div>
                  <ul className="list-disc  px-7 py-5 text-text_secondary">
                    <li>{productDetail.model}</li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-2xl sm:text-3xl text-black">
                    Details
                  </div>
                  <ul className="list-disc px-7 py-5 text-text_secondary">
                    {productDetail.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-2xl sm:text-3xl text-black">
                    Washing Instructions
                  </div>
                  <div className="px-7 py-5 text-text_secondary">
                    {productDetail.washing_instruction}
                  </div>
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                Specification
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                Reviews
              </CustomTabPanel>
            </div>
            <div className="px-5">
              <div className="font-bold text-2xl sm:text-3xl text-black">
                Colors
              </div>
              <div className=" py-5 text-text_secondary flex gap-2 ">
                {productDetail.colors.map((color, i) => (
                  <div
                    key={i}
                    className={`inline-block rounded-full border border-black w-10 h-10`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5 p-3 sm:p-4 border border-text_secondary rounded-2xl border-opacity-25">
              <button className="w-full bg-black text-white rounded-full p-5 text-xs sm:text-lg">
                Order Now
              </button>
              <button className="w-full border border-black text-black rounded-full p-3 sm:p-4 flex items-center justify-center gap-2 text-xs sm:text-lg">
                <ShareIcon />
                Share
              </button>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="font-bold text-3xl sm:text-4xl text-center text-black">
            Service Quality
          </div>
          <div className="flex gap-10 my-10 w-full items-center justify-around flex-wrap">
            <div className="flex gap-5 items-center justify-center">
              <div className="relative inline-block">
                <Image
                  src="/gradient.svg"
                  alt="gradient"
                  width={72}
                  height={72}
                  className="gradient-image"
                />
                <Image
                  src="/health.svg"
                  alt="health"
                  width={40}
                  height={40}
                  className="health-image absolute top-0 left-0 transform translate-x-[16px] translate-y-[16px]" // Adjust positioning as needed
                />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-black">
                  Best for Health
                </div>
                <div className="text-text_secondary text-xs sm:text-sm">
                  Good for your Health
                </div>
              </div>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <div className="relative inline-block">
                <Image
                  src="/gradient.svg"
                  alt="gradient"
                  width={72}
                  height={72}
                  className="gradient-image"
                />
                <Image
                  src="/quality.svg"
                  alt="quality"
                  width={40}
                  height={40}
                  className="health-image absolute top-0 left-0 transform translate-x-[16px] translate-y-[16px]" // Adjust positioning as needed
                />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-black">
                  Safe and Quality
                </div>
                <div className="text-text_secondary text-xs sm:text-sm">
                  Gauranteed Quality and Safe
                </div>
              </div>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <div className="relative inline-block">
                <Image
                  src="/gradient.svg"
                  alt="gradient"
                  width={72}
                  height={72}
                  className="gradient-image"
                />
                <Image
                  src="/online_support.svg"
                  alt="online_support"
                  width={40}
                  height={40}
                  className="health-image absolute top-0 left-0 transform translate-x-[16px] translate-y-[16px]" // Adjust positioning as needed
                />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-black">
                  Online Support
                </div>
                <div className="text-xs sm:text-lg text-text_secondary">
                  24 hour online service
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1400px] px-5">
          <div className="flex justify-between items-center">
            <div className="text-3xl sm:text-4xl font-bold text-black">
              You might also like
            </div>
            <div
              onClick={() => router.push("/bag_collection")}
              className="text-sm underline cursor-pointer text-black"
            >
              View more
            </div>
          </div>

          <div className="flex flex-wrap gap-10 py-10 items-center justify-center">
            {/* {product_detail.similar_products.map((product, i) => (
              <div key={product.id} className="flex flex-col  gap-4 pb-5">
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
            ))} */}
            <NewSlider products={product_detail.similar_products}/>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
