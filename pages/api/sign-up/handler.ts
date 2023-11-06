import connectToDB from "@/services/database/database";
import User from "@/services/models/user";
import Joi from "joi";
import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcryptjs";

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  await connectToDB();

  try {
    const { name, email, password } = req.body;
    const { error } = schema.validate({ name, email, password });

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const isUserAlreadyExist = await User.findOne({ email });

    if (isUserAlreadyExist) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists.",
      });
    }

    const hashPassword = await hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });
    await newUser.save();

    return res.status(201).json({
      success: true,
      message: "Account created successfully.",
    });
  } catch (error) {
    console.error("Error in new user creation: ", error);
    return res.status(500).json({
      success: false,
      message:
        "Something went wrong while user registration. Please try again later.",
    });
  }
}
