import connectToDB from "@/services/database/database";
import Car from "@/services/models/Car";
import { NextApiRequest, NextApiResponse } from "next";

export default async function addReview(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  await connectToDB();

  if (req.method !== "POST") {
    res.status(405).json({ success: false, message: "Method not allowed" });
    return;
  }

  const { seoUrl, authorName, review, date } = req.body;

  try {
    const updatedCar = await Car.findOneAndUpdate(
      { seoUrl },
      { $push: { reviews: { authorName, review, date } } },
      { new: true }
    );

    if (!updatedCar) {
      res.status(404).json({ success: false, message: "Car not found" });
      return;
    }

    res
      .status(200)
      .json({ success: true, message: "Review added", updatedCar });
  } catch (error) {
    console.error("Error adding review: ", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}
