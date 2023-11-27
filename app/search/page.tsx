"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const searchParams = useSearchParams();

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const pickupLocation = searchParams ? searchParams.get("pickupLocation") : "";
  const returnLocation = searchParams ? searchParams.get("returnLocation") : "";
  const pickupDateTime = searchParams ? searchParams.get("pickupDateTime") : "";
  const returnDateTime = searchParams ? searchParams.get("returnDateTime") : "";

  const formattedPickupDateTime = pickupDateTime ? formatDate(pickupDateTime) : "";
  const formattedReturnDateTime = returnDateTime ? formatDate(returnDateTime) : "";

  const rentalPeriod =
    returnDateTime && pickupDateTime
      ? Math.ceil(
          (new Date(returnDateTime).getTime() -
            new Date(pickupDateTime).getTime()) /
            (1000 * 3600 * 24)
        )
      : 0;

  return (
  <div className="container mx-auto">
    <div>
    <div>
      <p>You have selected the city for the car drop-off: {pickupLocation}</p>
      <p>You have selected the city to return the car: {returnLocation}</p>
      <p>Issue and return date:{formattedPickupDateTime} - {formattedReturnDateTime}</p>
      <p>Total {rentalPeriod} rental days</p>
      {/* Дополнительный контент */}
    </div>
    </div>
  </div>
  )
};

export default page;
