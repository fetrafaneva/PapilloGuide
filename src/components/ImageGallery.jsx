import React from "react";

const images = [
  {
    src: "/images/papillon1.jpg",
    alt: "Papillon 1",
  },
  {
    src: "/images/papillon2.jpg",
    alt: "Papillon 2",
  },
  {
    src: "/images/papillon3.jpg",
    alt: "Papillon 3",
  },
];

export default function ImageGallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((img, i) => (
        <div
          key={i}
          className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-52 object-cover"
          />
        </div>
      ))}
    </div>
  );
}
