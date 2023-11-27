import connectToDB from "@/services/database/database";
import Car from "@/services/models/Car";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getCarById(
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<void> {
    await connectToDB();

    try {
      if (req.method === "GET") {
        const car = await Car.findById(req.query.id);
        res.status(200).json({ success: true, data: car });
      } else {
        res.status(400).json({ success: false, message: "Method not allowed" });
      }
    } catch (error) {
      console.log("Error fetching car by id: ", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  }
