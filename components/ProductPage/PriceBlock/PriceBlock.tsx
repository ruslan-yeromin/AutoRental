import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Убедитесь, что этот пакет установлен
import CustomButton from "@/components/CustomButton/CustomButton";
import { PriceBlockProps } from "@/types/type";
import { includedServices } from "@/utils/data";

const PriceBlock: React.FC<PriceBlockProps> = ({ rentalCost, deposit }) => {
  const renderIncludedServices = () => {
    return includedServices.map((service) => (
      <div key={service} className="flex items-center gap-2 text-darkgray">
        <FaCheckCircle className="text-green-500" />
        <span className="hover:font-semibold transition-all">{service}</span>
      </div>
    ));
  };

  const renderRentalCost = () => {
    return (
      <div>
        <h3 className="text-[1.5rem] text-darkgray font-semibold mb-2">
          Rental Pricing
        </h3>
        <div className="grid grid-cols-2 gap-2 text-darkgray">
          <p className="flex flex-col items-center bg-primary/10 border border-primary/40 rounded-lg">
            <span className="text-primary text-[1.75rem] font-bold">
              ${rentalCost.oneToThreeDays}
            </span>
            <span className="font-bold">for 1-3 Days</span>
          </p>
          <p className="flex flex-col items-center bg-primary/10 border border-primary/40 rounded-lg">
            <span className="text-primary text-[1.75rem] font-bold">
              ${rentalCost.fourToNineDays}
            </span>
            <span className="font-bold">for 4-9 Days</span>
          </p>
          <p className="flex flex-col items-center bg-primary/10 border border-primary/40 rounded-lg">
            <span className="text-primary text-[1.75rem] font-bold">
              ${rentalCost.tenToTwentyFiveDays}
            </span>
            <span className="font-bold">for 10-25 Days</span>
          </p>
          <p className="flex flex-col items-center bg-primary/10 border border-primary/40 rounded-lg">
            <span className="text-primary text-[1.75rem] font-bold">
              ${rentalCost.moreThanTwentySixDays}
            </span>
            <span className="font-bold">for 26+ Days</span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full mt-4 bg-lightgray rounded-lg shadow-lg p-6 flex flex-col gap-4">
      <h2 className="pb-4 text-[1.5rem] text-darkgray">Included Services</h2>
      <div className="flex flex-col gap-2 mb-4">{renderIncludedServices()}</div>
      {renderRentalCost()}
      <div className=" text-[2rem] flex justify-between text-darkgray font-semibold">
        Deposit: <span className="text-red">${deposit}</span>
      </div>
      <CustomButton
        title="Book Now"
        onClick={() => {}}
        containerStyles="mt-4 bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark"
      />
    </div>
  );
};

export default PriceBlock;
