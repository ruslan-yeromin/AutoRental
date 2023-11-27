import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { GiGasPump, GiSteeringWheel, GiCarDoor } from 'react-icons/gi'
import CustomButton from '../CustomButton/CustomButton'
import { Car } from "@/types/type";


const ProductCard = ({car}: {car: Car}) => {
  return (
    <article className='flex flex-col justify-between px-[1.5rem] py-[1.5rem] bg-white shadow-lg rounded-lg hover:shadow-2xl hover:cursor-pointer transition-all'>
        <div className='flex justify-between items-center'>
            <div className='flex flex-col'>
                <h3 className='text-xl text-dark font-bold'>{car.name}</h3>
                <p className='text-sm text-lightgray font-bold'>{car.carClass}</p>
            </div>
            <div className='flex flex-col'>
                <AiOutlineHeart className='text-2xl' />
            </div>
        </div>
        <div>
            <Image width={600} height={400} src={car.imgUrl} alt='Image name'/>
        </div>
        <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
                <GiGasPump className='text-lightgray text-xl' />
                <p className='text-lightgray text-lg'>{car.fuelType}</p>
            </div>
            <div className='flex gap-2 items-center'>
                <GiSteeringWheel className='text-lightgray text-xl' />
                <p className='text-lightgray text-lg'>{car.transmissionType}</p>
            </div>
            <div className='flex gap-2 items-center'>
                <GiCarDoor className='text-lightgray text-xl' />
                <p className='text-lightgray text-lg'>{car.numberOfDoors}</p>
            </div>
        </div>
        <div className='flex justify-between items-center mt-6'>
            <div className='flex items-center gap-2'>
                <p className='font-semibold'>from</p>
                <p className='text-2xl text-dark font-bold'>{`$${car.rentalCost.moreThanTwentySixDays}/`}</p>
                <p className='text-sm text-lightgray font-bold'> day</p>
            </div>
            <div className='flex flex-col'>
                <CustomButton 
                    title='Rent Now'
                    containerStyles='button button-padding'
                 />
            </div>
        </div>
    </article>
  )
}

export default ProductCard