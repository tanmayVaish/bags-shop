"use client";


import React, { useRef, useEffect, useState } from 'react';
import './Slider.css';

const NewSlider = ({ products, router }) => {
    console.log(router)
    const sliderRef = useRef(null);
    const [scrolling, setScrolling] = useState(true);

    const handleScroll = (direction) => {
        if (sliderRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const duplicateItems = () => {
        if (sliderRef.current) {
            const items = Array.from(sliderRef.current.children);
            items.forEach(item => sliderRef.current.appendChild(item.cloneNode(true)));
        }
    };

    const checkScrollPosition = () => {
        if (sliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
            if (scrollLeft === 0) {
                sliderRef.current.scrollLeft = scrollWidth / 2;
            } else if (scrollLeft + clientWidth >= scrollWidth) {
                sliderRef.current.scrollLeft = scrollWidth / 2;
            }
        }
    };

    useEffect(() => {
        duplicateItems(); // Duplicate items to create an infinite effect
        sliderRef.current.scrollLeft = sliderRef.current.scrollWidth / 2; // Start in the middle

        const interval = setInterval(() => {
            if (scrolling) {
                handleScroll('right');
            }
            checkScrollPosition();
        }, 2000); // Adjust timing for smoothness

        return () => clearInterval(interval);
    }, [scrolling]);

    const handleClick = (id) => {
        console.log(`Navigating to details for item with id ${id}`);
        router.push(`/details`);
    };

    return (
        <div className="slider-container">
            <button className="slider-button slider-button-left" onClick={() => handleScroll('left')}>&lt;</button>
            <button className="slider-button slider-button-right" onClick={() => handleScroll('right')}>&gt;</button>
            <div className="slider" ref={sliderRef}>
                {products.map(item => (
                    <div key={item.id} className="slider-item" onClick={() => handleClick(item.id)}>
                        <img src={item.img} alt={item.name} className="slider-image" />
                        <div className="slider-text">
                            <div className="text-sm xs:text-base sm:text-lg text-text_secondary">
                                {item.sku}
                            </div>
                            <div className="text-sm xs:text-base sm:text-lg text-black" style={{fontWeight:"600"}}>
                                {item.name}
                            </div>
                        </div>
                        {/* <div className="slider-text">
                            <h3>{item.sku}</h3>
                            <p>{item.name}</p>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewSlider;
