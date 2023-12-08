import React from 'react';

const PhotoGallerySkeleton = () => {
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="rounded-xl overflow-hidden w-full shadow-2xl skeleton bg-gray-300" style={{ maxWidth: '1260px', height: '945px' }}>
          {/* Большой скелетон для основного изображения */}
        </div>
        <div className="flex lg:flex-col gap-2 justify-between">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-xl skeleton bg-gray-300" style={{ width: '245px', height: '185px' }}>
              {/* Маленькие скелетоны для миниатюр */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallerySkeleton;
