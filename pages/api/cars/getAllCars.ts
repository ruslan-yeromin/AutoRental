import connectToDB from "@/services/database/database";
import Car from "@/services/models/Car";
import { QueryConditions } from "@/types/type";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getAllCars(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    await connectToDB();

    if (req.method !== "GET") {
      return res.status(405).json({ success: false, message: "Method not allowed" });
    }

    // Обработка и фильтрация входных параметров
    const validParams = ['bodyType', 'transmissionType', 'fuelType', 'carClass'];
    const queryConditions = validParams.reduce((acc: QueryConditions, param) => {
        const value = req.query[param];
        if (typeof value === 'string') {
          acc[param as keyof QueryConditions] = value;
        }
        return acc;
      }, {} as QueryConditions);

      if (typeof req.query.bodyType === 'string') {
        queryConditions.bodyType = { $in: req.query.bodyType.split(',') };
      }

    const allCars = await Car.find(queryConditions);

    // Возвращаем пустой массив, если автомобили не найдены
    if (allCars.length === 0) {
      return res.status(200).json({ success: true, data: [] });
    }
    
    res.status(200).json({ success: true, data: allCars });
  } catch (error) {
    console.error("Error fetching cars: ", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}
