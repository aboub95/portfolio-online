// components/Slider.js
"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";

const MySlider = () => {
  return (
    <Splide
      options={{
        type: "loop",
        perPage: 3, // Nombre d'images par page par défaut
        perMove: 1,
        pagination: false,
        autoplay: true,
        breakpoints: {
          1200: { perPage: 3 }, // Ordinateurs
          900: { perPage: 3 }, // Tablettes
          600: { perPage: 2 }, // Téléphones
        },
      }}
    >
      {[
        { src: "/html.jpeg", alt: "Image 1" },
        { src: "/Will SCSS Be Replaced by CSS3_.jpeg", alt: "Image 2" },
        { src: "/js3.jpg", alt: "Image 3" },
        { src: "/tail.jpeg", alt: "Image 4" },
        { src: "/next14.png", alt: "Image 5" },
        { src: "/figma.gif", alt: "Image 6" },
        { src: "/react.jpg", alt: "Image 7" },
      ].map((image, index) => (
        <SplideSlide key={index} className="flex justify-center items-center">
          <Image
            src={image.src}
            alt={image.alt}
            width={2000}
            height={2000}
            className="m-4 rounded-3xl object-cover max-sm:h-24 md:h-32 md:w-64 lg:w-80 md:m-72 max-sm:p-2 max-sm:m-80 lg:h-56 "
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default MySlider;
