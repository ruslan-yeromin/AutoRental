import connectToDB from "@/services/database/database";
import Car from "@/services/models/Car";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getPopularCar(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  await connectToDB();

  try {
    if (req.method === "GET") {
      const popularCars = await Car.find({ popularCar: true });
      res.status(200).json({ success: true, data: popularCars });
    } else {
      res.status(400).json({ success: false, message: "Method not allowed" });
    }
  } catch (error) {
    console.log("Error fetching popular cars: ", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}



