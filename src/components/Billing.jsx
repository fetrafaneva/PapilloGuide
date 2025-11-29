import React, { useEffect, useState } from "react";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
} from "../assets";

const Billing = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 5) % images.length);
    }, 3000); // toutes les 3 secondes (réglable)

    return () => clearInterval(interval);
  }, []);

  const visibleImages = images
    .slice(startIndex, startIndex + 3)
    .concat(images.slice(0, Math.max(0, startIndex + 3 - images.length)));

  return (
    <section id="product" className="flex flex-col sm:flex-row gap-6">
      {/* Grille animée */}
      <div className="overflow-hidden h-[600px] w-[1000px] transition-all duration-1000 ease-in-out mt-7">
        <div className="grid-layout animate-slide">
          {visibleImages.map((img, i) => (
            <div
              key={i}
              className={`item item-${
                i + 1
              } flex items-center justify-center bg-black rounded-xl overflow-hidden`}
            >
              <img
                src={img}
                alt={`papillon-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Texte gardé intact */}
      <div className="flex-1 mt-7">
        <h2 className="text-white text-[32px] font-bold">
          Apprenez à reconnaître les papillons autour de vous.
        </h2>
        <p className="text-dimWhite max-w-[470px] mt-5">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
      </div>
    </section>
  );
};

export default Billing;
