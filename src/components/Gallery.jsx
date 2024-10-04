// src/components/Gallery.jsx
import React from "react";

const images = [
  {
    src: `${process.env.PUBLIC_URL}/images/Graduationnight.jpg`,
    alt: "IBA JU Graduation Night",
  },
  { src: "https://via.placeholder.com/300", alt: "Image 2" },
  { src: "https://via.placeholder.com/300", alt: "Image 3" },
  { src: "https://via.placeholder.com/300", alt: "Image 4" },
  { src: "https://via.placeholder.com/300", alt: "Image 5" },
  { src: "https://via.placeholder.com/300", alt: "Image 6" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
