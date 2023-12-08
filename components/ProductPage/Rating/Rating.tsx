import { StarRatingProps } from '@/types/type';
import React from 'react'
import { FaStar } from 'react-icons/fa';

const Rating: React.FC<StarRatingProps> = ({ totalReviews }) => {



  return (
    <div className='flex items-center gap-4'>
        <div className='flex gap-1 text-lg text-red'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
        </div>
        <div className='flex text-lg text-darkgray hover:text-black hover:font-semibold hover:cursor-pointer transition-all'>reviews ({totalReviews})</div>
    </div>
  )
}

export default Rating