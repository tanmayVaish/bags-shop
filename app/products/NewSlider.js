"use client";

import React, { useRef, useState, useEffect } from "react";
import "./Slider.css";

const NewSlider = ({ products, router }) => {
  const sliderRef = useRef(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const checkButtonsState = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setIsLeftDisabled(scrollLeft === 0);
      setIsRightDisabled(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  useEffect(() => {
    checkButtonsState();
    sliderRef.current.addEventListener("scroll", checkButtonsState);

    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener("scroll", checkButtonsState);
      }
    };
  }, []);

  const handleClick = (id) => {
    console.log(`Navigating to details for item with id ${id}`);
    router.push(`/details/${id}`);
  };

  return (
    <div className="slider-container">
      <button
        className="slider-button slider-button-left"
        onClick={() => handleScroll("left")}
        style={isLeftDisabled ? { display: "none" } : {}}
      >
        &lt;
      </button>
      <button
        className="slider-button slider-button-right"
        onClick={() => handleScroll("right")}
        style={isRightDisabled ? { display: "none" } : {}}
      >
        &gt;
      </button>
      <div className="slider" ref={sliderRef}>
        {products.map((item) => (
          <div
            key={item.id}
            className="slider-item cursor-pointer"
            onClick={() => {
              handleClick(item.sku);
            }}
          >
            <img src={item.img} alt={item.name} className="slider-image" />
            <div className="slider-text">
              <div className="text-sm xs:text-base sm:text-lg text-text_secondary">
                {item.sku}
              </div>
              <div
                className="text-sm xs:text-base sm:text-lg text-black"
                style={{ fontWeight: "600" }}
              >
                {item.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewSlider;
