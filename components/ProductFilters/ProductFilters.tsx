"use client";

import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";

const ProductFilters = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="max-w-[15rem]">
      <CustomButton
        title="Filters"
        onClick={toggleFilters}
        containerStyles="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark"
      />
      {showFilters && (
        <div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <span className="pt-6 font-semibold text-xl text-primary">
                Select Car Class:
              </span>
              <label className="flex items-center gap-2 text-xl">
                <input type="checkbox" name="Sedan" value="economy" />
                <p>Econom</p>
              </label>
              <label className="flex items-center gap-2 text-xl">
                <input type="checkbox" name="Sedan" value="mid-size" />
                <p>Mid-size</p>
              </label>
              <label className="flex items-center gap-2 text-xl">
                <input type="checkbox" name="Sedan" value="premium" />
                <p>Premium</p>
              </label>
              <label className="flex items-center gap-2 text-xl">
                <input type="checkbox" name="Sedan" value="off-road" />
                <p>Off Road</p>
              </label>
              <div></div>
            </div>
            <div className="flex flex-col">
              <span className="pt-6 font-semibold text-xl text-primary">
                Select Body Type:
              </span>
              <label className="flex items-center gap-2 text-xl">
                <input type="checkbox" name="Sedan" value="sedan" />
                <p>Sedan</p>
              </label>
              <label className="flex items-center gap-2 text-xl">
                <input type="checkbox" name="Sedan" value="hatchback" />
                <p>Hatchback</p>
              </label>
              <label className="flex items-center gap-2 text-xl">
                <input type="checkbox" name="Sedan" value="SUV" />
                <p>SUV</p>
              </label>
            </div>
            <div className="flex flex-col">
              <span className="pt-6 font-semibold text-xl text-primary">
                Select Fuel Type:
              </span>
              <label className="flex items-center gap-2 text-xl">
                <input type="checkbox" name="Sedan" value="gasoline" />
                <p>Petrol</p>
              </label>
              <label className="flex items-center gap-2 text-xl">
                <input type="checkbox" name="Sedan" value="diesel" />
                <p>Diesel</p>
              </label>
              <label className="flex items-center gap-2 text-xl">
                <input type="checkbox" name="Sedan" value="electric" />
                <p>Electric</p>
              </label>
            </div>
            <div className="flex flex-col">
              <span className="pt-6 font-semibold text-xl text-primary">
                Select Transmission:
              </span>
              <label className="flex items-center gap-2 text-xl">
                <input type="checkbox" name="Sedan" value="manual" />
                <p>Manual</p>
              </label>
              <label className="flex items-center gap-2 text-xl">
                <input type="checkbox" name="Sedan" value="automatic" />
                <p>Automatic</p>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFilters;
