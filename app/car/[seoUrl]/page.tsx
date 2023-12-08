"use client";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import AddNewReview from "@/components/ProductPage/AddReview/AddNewReview";
import CarFeatures from "@/components/ProductPage/CarFeatures/CarFeatures";
import PhotoGallerySkeleton from "@/components/ProductPage/PhotoGallery/GallerySkeleton";
import PhotoGallery from "@/components/ProductPage/PhotoGallery/PhotoGallery";
import PriceBlock from "@/components/ProductPage/PriceBlock/PriceBlock";
import ProductDesc from "@/components/ProductPage/ProductDesc/ProductDesc";
import ProductTitle from "@/components/ProductPage/ProductTitle/ProductTitle";
import Rating from "@/components/ProductPage/Rating/Rating";
import ProductReviews from "@/components/ProductPage/Reviews/ProductReviews";
import { Car } from "@/types/type";
import { useEffect, useState } from "react";

const CarPage = () => {
  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    const path = window.location.pathname;
    const pathSegments = path.split("/");
    const seoUrl = pathSegments[2];
    if (!seoUrl) return;

    const fetchCarData = async () => {
      try {
        const response = await fetch(`/api/cars/${seoUrl}`);
        if (!response.ok) {
          console.error(
            "Ошибка загрузки данных об автомобиле:",
            response.statusText
          );
          return;
        }
        const data = await response.json();
        setCar(data.data);
      } catch (err) {
        console.error("Ошибка запроса:", err);
      }
    };
    fetchCarData();
  }, []);

  return (
    <div className="container mx-auto">
      <Breadcrumbs />
      <ProductTitle carTitle={car?.name || ""} />
      <Rating totalReviews={car?.reviews.length || 0} />
      {!car ? <PhotoGallerySkeleton /> : <PhotoGallery images={car.images} />}
      <div className="flex flex-col-reverse lg:flex-row gap-10 w-full">
        <div className="max-w-[60%]">
          <CarFeatures
            bodyType={car?.bodyType || ""}
            engineVolume={car?.engineVolume || 0}
            transmissionType={car?.transmissionType || ""}
            fuelType={car?.fuelType || ""}
            trunkVolume={car?.trunkVolume || 0}
            numberOfDoors={car?.numberOfDoors || 0}
            airConditioner={car?.airConditioner || false}
            fuelConsumption={car?.fuelConsumption || 0}
          />
          <ProductDesc carDesc={car?.description || ""} />
          <ProductReviews
            reviews={
              car?.reviews || [
                {
                  _id: "",
                  authorName: "",
                  review: "",
                  date: new Date(),
                },
              ]
            }
          />
          <AddNewReview carLink={car?.seoUrl || ''} />
        </div>
        <div className="max-w-[40%] flex-1">
          <PriceBlock
            rentalCost={
              car?.rentalCost || {
                oneToThreeDays: 0,
                fourToNineDays: 0,
                tenToTwentyFiveDays: 0,
                moreThanTwentySixDays: 0,
              }
            }
            deposit={car?.deposit || 0}
          />
        </div>
      </div>
    </div>
  );
};

export default CarPage;
