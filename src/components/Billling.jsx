import React from "react";
import { img11, img12, img13, img14, img15, img16, img17 } from "../assets";

const Billling = () => {
  const images = [img11, img12, img13, img14, img15, img16, img17];

  return (
    <section className="flex flex-col sm:flex-row gap-6">
      {/* Texte */}
      <div className="flex-1 mt-7">
        <h2 className="text-white text-[32px] font-bold">
          Apprecier <br className="sm:block hidden" /> la beauté de ces petites
          êtres.
        </h2>
        <p className="text-dimWhite max-w-[470px] mt-5">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
      </div>

      {/* Zone TV */}
      <div className="overflow-hidden sm:h-[600px] sm:w-[1000px] mt-7 relative">
        <div className="tv-frame relative sm:h-[600px] sm:w-[1000px] overflow-hidden rounded-xl border-4 border-black bg-black">
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
    </section>
  );
};

export default Billling;
