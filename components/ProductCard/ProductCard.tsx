import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { GiGasPump, GiSteeringWheel, GiCarDoor } from 'react-icons/gi'
import CustomButton from '../CustomButton/CustomButton'
import { Car } from "@/types/type";


const ProductCard: React.FC<{ car: Car }> = ({ car }) => {
  return (
    <article 
        className='flex flex-col justify-between px-[1.5rem] py-[1.5rem] bg-white shadow-lg rounded-lg hover:shadow-2xl hover:cursor-pointer transition-all'
    >
        <div className='flex justify-between items-center'>
            <div className='flex flex-col'>
                <h3 className='text-xl text-dark font-bold'>{car.name}</h3>
                <p className='text-sm text-gray-500 font-bold'>{car.carClass}</p>
            </div>
            <div className='flex flex-col'>
                <AiOutlineHeart className='text-red text-2xl' />
            </div>
        </div>
        <div className='h-[200px]'>
            <Image width={600} height={400} src={car.imgUrl} alt='Image name'/>
        </div>
        <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
                <GiGasPump className='text-primary text-xl' />
                <p className='text-gray-500 text-lg'>{car.fuelType}</p>
            </div>
            <div className='flex gap-2 items-center'>
                <GiSteeringWheel className='text-primary text-xl' />
                <p className='text-gray-500 text-lg'>{car.transmissionType}</p>
            </div>
            <div className='flex gap-2 items-center'>
                <GiCarDoor className='text-primary text-xl' />
                <p className='text-gray-500 text-lg'>{car.numberOfDoors}</p>
            </div>
        </div>
        <div className='flex flex-col mx-auto justify-between items-center mt-6'>
            <div className='flex items-center mb-4'>
                <p className='font-semibold'>from</p>
                <p className='text-2xl px-2 text-dark font-bold'>{`$${car.rentalCost.moreThanTwentySixDays}/`}</p>
                <p className='text-sm text-gray-500 font-bold'>day</p>
            </div>
            <div className='flex flex-col'>
                <CustomButton 
                    title='Rent Now'
                    containerStyles='button button-padding'
                    textStyles=''
                 />
            </div>
        </div>
    </article>
  )
}

export default ProductCard