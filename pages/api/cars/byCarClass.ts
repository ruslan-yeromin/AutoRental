import connectToDB from "@/services/database/database";
import Car from "@/services/models/Car";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getCarsByClass(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  await connectToDB();

  

  try {
    if (req.method === "GET") {
      const carClass = req.query.carClass;

      if (!carClass) {
        return res
          .status(400)
          .json({ success: false, error: "Missing car class on request body" });
      }

      const cars = await Car.find({ carClass: carClass });
      return res.status(200).json({ success: true, data: cars });
    } else {
      res.status(405).json({ success: false, error: "Method not allowed" });
    }
  } catch (error) {
    console.error("Error on get cars by class", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
}
