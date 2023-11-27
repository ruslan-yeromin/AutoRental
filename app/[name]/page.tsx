'use client'

import React, { useEffect } from "react";
import { useRouter } from "next/router";

const page = () => {
  const router = useRouter();
  const { name } = router.query;

  useEffect(() => {
    const fetchCarById = async () => {
      try {
        const response = await fetch(`/api/cars/${name}`);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
      } catch (error) {
        console.log("Error fetching car by id: ", error);
      }
    };
    fetchCarById();
  }, [router.query]);

  return <div>page</div>;
};

export default page;
