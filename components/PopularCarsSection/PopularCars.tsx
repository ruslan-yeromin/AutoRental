"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Car } from "@/types/type";
import SkeletonCard from "./SkeletonCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

const PopularCars = () => {
  const [popularCars, setPopularCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

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
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-primary">Popular Cars</h2>
        <Link
          href="/"
          className="text-xl flex items-center gap-4 text-primary font-bold"
        >
          View All
          <FaArrowRight />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-6 gap-4">
        {isLoading
          ? [...Array(8)].map((_, index) => <SkeletonCard key={index} />)
          : popularCars.map((car) => {
              return (
                <Link key={car.seoUrl} href={`/car/${car.seoUrl}`} passHref>
                  <ProductCard car={car} />
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default PopularCars;
