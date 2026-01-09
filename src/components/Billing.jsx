import React, { useState } from "react";
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
  const [activeImage, setActiveImage] = useState(images[0]);
  const [stopScroll, setStopScroll] = useState(false);

  return (
    <section className="flex flex-col sm:flex-row gap-10 items-start">
      {/* Grande image */}
      <div className="flex flex-col items-center w-full sm:w-[600px]">
        <div className="w-full">
          <img
            src={activeImage}
            alt="Papillon sélectionné"
            className="w-full h-[350px] object-cover rounded-xl border border-white/10 transition-all duration-300"
          />
        </div>

        {/* Miniatures en marquee */}
        <div
          className="overflow-hidden w-full relative mt-4"
          onMouseEnter={() => setStopScroll(true)}
          onMouseLeave={() => setStopScroll(false)}
        >
          <div
            className="marquee-inner flex w-fit"
            style={{
              animation: `marqueeScroll ${
                images.length * 2.5
              }s linear infinite`,
              animationPlayState: stopScroll ? "paused" : "running",
            }}
          >
            <div className="flex gap-4">
              {[...images, ...images].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Papillon ${index}`}
                  onMouseEnter={() => setActiveImage(img)} // affiche l'image sur le grand cadre
                  className={`flex-shrink-0 cursor-pointer h-24 w-24 object-cover rounded-lg border transition
                  ${
                    activeImage === img
                      ? "border-blue-500 opacity-100"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Texte */}
      <div className="flex-1 mt-4">
        <h2 className="text-white text-[32px] font-bold">
          Apprenez à reconnaître les papillons autour de vous.
        </h2>
        <p className="text-dimWhite max-w-[470px] mt-5">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices amet odio
          aenean neque. Fusce ipsum orci rhoncus aliquet porttitor integer
          platea placerat.
        </p>
      </div>

      {/* Styles pour marquee */}
      <style>{`
        .marquee-inner {
          display: flex;
          width: fit-content;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Billing;
