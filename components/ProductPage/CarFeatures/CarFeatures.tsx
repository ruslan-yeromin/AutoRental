import { CarFeaturesProps } from "@/types/type";
import React from "react";
import {
  FaGasPump,
  FaCar,
  FaCogs,
  FaSuitcase,
  FaSnowflake,
  FaTachometerAlt,
} from "react-icons/fa";
import { GiCarDoor } from "react-icons/gi";
import { PiEngineFill } from "react-icons/pi";

const CarFeatures: React.FC<CarFeaturesProps> = ({
  fuelType,
  bodyType,
  engineVolume,
  transmissionType,
  trunkVolume,
  numberOfDoors,
  airConditioner,
  fuelConsumption,
}) => {
  return (
    <div className="mt-10">
      <h2 className="pb-8 text-[1.5rem] text-primary">Vehicle Features</h2>
      <div>
        <ul className="grid gap-4 grid-cols-2 xl:grid-cols-4">
          <li className="flex gap-4 items-center px-4 py-2 border border-primary/30 rounded-xl hover:border-primary hover:scale-110 transition-all hover:text-primary hover:shadow-lg cursor-pointer">
            <FaGasPump className='text-[1.75rem] text-primary' />
            <span>
              <p className="text-darkgray">Fuel Type</p>      
              <p className="font-semibold capitalize">{fuelType}</p>
            </span>
          </li>
          <li className="flex gap-4 items-center px-4 py-2 border border-primary/30 rounded-xl hover:border-primary hover:scale-110 transition-all hover:text-primary hover:shadow-lg cursor-pointer">
            <FaCar className='text-[1.75rem] text-primary' />
            <span>
              <p className="text-darkgray">Body Type</p>
              <p className="font-semibold capitalize">{bodyType}</p>
            </span>
          </li>
          <li className="flex gap-4 items-center px-4 py-2 border border-primary/30 rounded-xl hover:border-primary hover:scale-110 transition-all hover:text-primary hover:shadow-lg cursor-pointer">            
            <PiEngineFill className='text-[1.75rem] text-primary' />
            <span>
              <p className="text-darkgray">Engine Volume</p>
              <p className="font-semibold">{engineVolume}</p>
            </span>
          </li>
          <li className="flex gap-4 items-center px-4 py-2 border border-primary/30 rounded-xl hover:border-primary hover:scale-110 transition-all hover:text-primary hover:shadow-lg cursor-pointer">
            <FaCogs className='text-[1.75rem] text-primary' />
            <span>
              <p className="text-darkgray">Transmission Type</p>
              <p className="font-semibold capitalize">{transmissionType}</p>
            </span>            
          </li>
          <li className="flex gap-4 items-center px-4 py-2 border border-primary/30 rounded-xl hover:border-primary hover:scale-110 transition-all hover:text-primary cursor-pointer hover:shadow-lg">
            <FaSuitcase className='text-[1.75rem] text-primary' />
            <span>
              <p className="text-darkgray">Trunk Volume</p>
              <p className="font-semibold capitalize">{trunkVolume}</p>
            </span>
            
          </li>
          <li className="flex gap-4 items-center px-4 py-2 border border-primary/30 rounded-xl hover:border-primary hover:scale-110 transition-all hover:text-primary cursor-pointer hover:shadow-lg">
            <GiCarDoor className='text-[1.75rem] text-primary' />
            <span>
              <p className="text-darkgray">Number of Doors</p>
              <p className="font-semibold capitalize">{numberOfDoors}</p>
            </span>
          </li>
          <li className="flex gap-4 items-center px-4 py-2 border border-primary/30 rounded-xl hover:border-primary hover:scale-110 transition-all hover:text-primary hover:shadow-lg cursor-pointer">
            <FaSnowflake className='text-[1.75rem] text-primary' />
            <span>
              <p className="text-darkgray">Air Conditioner</p>
              <p className="font-semibold capitalize">{airConditioner ? "Yes" : "No"}</p>
            </span>
          </li>
          <li className="flex gap-4 items-center px-4 py-2 border border-primary/30 rounded-xl hover:border-primary hover:scale-110 transition-all hover:text-primary hover:shadow-lg cursor-pointer">
            <FaTachometerAlt className='text-[1.75rem] text-primary' />
            <span>
              <p className="text-darkgray">Fuel Consumption</p>
              <p className="font-semibold capitalize">{fuelConsumption}</p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CarFeatures;