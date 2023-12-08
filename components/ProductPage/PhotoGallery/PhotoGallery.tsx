"use client";

import { Car } from "@/types/type";
import Image from "next/image";
import React, { useState } from "react";

interface PhotoGalleryProps {
  images: string[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="rounded-xl overflow-hidden w-full shadow-2xl">
          <Image
            alt="Active image"
            src={activeImage}
            width={1280}
            height={960}
          />
        </div>
        <div className="flex lg:flex-col gap-2 justify-between">
          {images.map((image, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-xl">
              <Image
                key={index}
                src={image}
                alt={`Image ${index}`}
                width={300}
                height={200}
                onClick={() => setActiveImage(image)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
