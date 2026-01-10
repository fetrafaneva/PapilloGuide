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
  const images = [
    { src: img1, name: "Papillon Monarque" },
    { src: img2, name: "Papillon Morphos Bleu" },
    { src: img3, name: "Papillon Citron" },
    { src: img4, name: "Papillon Paon-du-jour" },
    { src: img5, name: "Papillon Vulcain" },
    { src: img6, name: "Papillon Flambé" },
    { src: img7, name: "Papillon Belle-Dame" },
    { src: img8, name: "Papillon Azuré" },
    { src: img9, name: "Papillon Sylvain" },
    { src: img10, name: "Papillon Tircis" },
  ];

  const [activeImage, setActiveImage] = useState(images[0]);
  const [stopScroll, setStopScroll] = useState(false);

  return (
    <section
      id="galerie"
      className="flex flex-col sm:flex-row gap-10 items-start sm:py-16 py-6"
    >
      {/* Grande image */}
      <div className="flex flex-col items-center w-full sm:w-[700px]">
        <div className="w-full relative">
          <img
            src={activeImage.src}
            alt={activeImage.name}
            className="w-full h-[550px] object-cover rounded-xl border border-white/10 transition-all duration-300"
          />

          {/* Nom du papillon */}
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg">
            <p className="text-white text-lg font-semibold">
              {activeImage.name}
            </p>
          </div>
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
                  src={img.src}
                  alt={img.name}
                  onMouseEnter={() => setActiveImage(img)}
                  className={`flex-shrink-0 cursor-pointer h-24 w-24 object-cover rounded-lg border transition
                  ${
                    activeImage.src === img.src
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
          Apprenez à reconnaître <br className="sm:block hidden" /> les
          papillons autour de vous.
        </h2>
        <p className="text-dimWhite max-w-[470px] mt-5">
          Découvrez la beauté des papillons locaux et apprenez à identifier les
          différentes espèces dans leur habitat naturel. Observez leurs
          couleurs, motifs et comportements pour approfondir votre connaissance
          de ces insectes fascinants.
        </p>
      </div>

      {/* Styles marquee */}
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
