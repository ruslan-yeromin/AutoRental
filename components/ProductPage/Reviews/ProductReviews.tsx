import React, { useState } from 'react';
import { ReviewProps } from "@/types/type";
import Image from "next/image";
import { FaRegCalendarCheck } from "react-icons/fa";

function formatDate(isoString: Date) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const date = new Date(isoString);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${months[monthIndex]}, ${year}`;
}

const ProductReviews: React.FC<ReviewProps> = ({ reviews }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

  const handleShowAllClick = () => {
    setShowAll(true);
  };

  return (
    <div className="mt-10">
      <div className='flex items-center gap-2'>
        <h3 className="text-[1.5rem] text-primary">Client Testimonials</h3>
        <span className='text-[1.5rem] text-primary'>({reviews.length})</span>
      </div>
      
      {displayedReviews.map((review, index) => (
        <div key={index} className="shadow-xl p-8 rounded-xl mb-4">
          <div className="flex justify-between items-center border-b p-4">
            <div className="flex gap-4 items-center">
              <Image
                className="rounded-full"
                src="/user-avatar.webp"
                width={50}
                height={50}
                alt="User Avatar"
              />
              <span className="text-xl text-darkgray font-bold">{review.authorName}</span>
            </div>
            <div className="flex items-center gap-2 text-primary text-xl">
              <FaRegCalendarCheck />
              <span>{formatDate(review.date)}</span>
            </div>
          </div>
          <div className="pt-8">
            <p>{review.review}</p>
          </div>
        </div>
      ))}
      {!showAll && reviews.length > 3 && (
        <div className='w-full flex justify-center'>
          <button
          onClick={handleShowAllClick}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark mt-4"
        >
          Show all
        </button>
        </div>
        
      )}
    </div>
  );
};

export default ProductReviews;
