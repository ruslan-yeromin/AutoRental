import connectToDB from "@/services/database/database";
import Car from "@/services/models/Car";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getCarBySeoUrl(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  await connectToDB();

  try {
    if (req.method !== "GET") {
      res.status(405).json({ success: false, message: "Method not allowed" });
      return;
    }

    const { seoUrl } = req.query;
    const car = await Car.findOne({ seoUrl: seoUrl });

    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }
    res.status(200).json({ success: true, data: car });
  } catch (error) {
    console.error("Error fetching car by seoUrl: ", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}
