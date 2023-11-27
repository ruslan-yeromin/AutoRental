"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Car } from "@/types/type";
import SkeletonCard from "./SkeletonCard";

const PopularCars = () => {
  const [popularCars, setPopularCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPopularCars = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/cars/popularCar");
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setPopularCars(data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching popular cars: ", error);
        setIsLoading(false);
      }
    };
    fetchPopularCars();
  }, []);

  return (
    <div className="container mx-auto px-4 mt-8">
      <h2 className="text-2xl text-lightgray">Popular Cars</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-6 gap-4">
        {isLoading
          ? [...Array(8)].map((_, index) => <SkeletonCard key={index} />)
          : popularCars.map((car) => {
              return <ProductCard key={car.seoUrl} car={car} />;
            })}
      </div>
    </div>
  );
};

export default PopularCars;



