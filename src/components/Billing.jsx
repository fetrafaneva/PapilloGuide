import React from "react";
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

  return (
    <section id="product" className="flex flex-col sm:flex-row gap-6">
      {/* Zone TV */}
      <div className=" sm:h-[600px] sm:w-[1000px] mt-7 relative">
        <div className="tv-frame relative sm:h-[600px] sm:w-[1000px] rounded-xl border-4 border-black bg-black">
          <div className="tv-scroll flex flex-col">
            {[...images, ...images].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={"papillon-" + i}
                className="tv-image mb-4 rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Texte */}
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
