'use client'

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const BookingForm = () => {
  const router = useRouter();

  const [pickupLocation, setPickupLocation] = useState("");
  const [returnLocation, setReturnLocation] = useState("");
  const [pickupDateTime, setPickupDateTime] = useState("");
  const [returnDateTime, setReturnDateTime] = useState("");

  const handleSearch = () => {
    const queryParams = new URLSearchParams({
      pickupLocation,
      returnLocation,
      pickupDateTime,
      returnDateTime,
    }).toString();

    router.push(`/search?${queryParams}`);
  };

  return (
    <div className="container mx-auto">
        <div className="p-4 bg-white shadow-md rounded-lg">
        <div className="grid gap-4 sm:grid-cols-2">
            <input
            type="text"
            placeholder="Pick up location"
            className="border border-lightgray rounded p-2"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            />
            <input
            type="text"
            placeholder="Return location"
            className="border border-lightgray rounded p-2"
            value={returnLocation}
            onChange={(e) => setReturnLocation(e.target.value)}
            />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 my-4">
            <input
            type="datetime-local"
            className="border border-lightgray rounded p-2"
            value={pickupDateTime}
            onChange={(e) => setPickupDateTime(e.target.value)}
            />
            <input
            type="datetime-local"
            className="border border-lightgray rounded p-2"
            value={returnDateTime}
            onChange={(e) => setReturnDateTime(e.target.value)}
            />
        </div>
        <button
            onClick={handleSearch}
            className="w-full bg-primary text-white p-3 rounded hover:bg-dark transition-colors duration-300"
        >
            Search
        </button>
        </div>
    </div>
  );
};

export default BookingForm;
