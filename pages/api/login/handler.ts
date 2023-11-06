import connectToDB from "@/services/database/database";
import User from "@/services/models/user";
import Joi from "joi";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  await connectToDB();

  try {
    const { email, password } = req.body;
    const { error } = schema.validate({ email, password });

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const isUserValid = await User.findOne({ email });
    if (!isUserValid) {
      return res.status(400).json({
        success: false,
        message: "User with this email does not exist.",
      });
    }

    const isPasswordValid = await compare(password, isUserValid.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Password is incorrect.",
      });
    }

    const token = jwt.sign(
      {
        id: isUserValid._id,
        email: isUserValid?.email,
      },
      "default_secret_key",
      { expiresIn: "1d" }
    );

    const loginData = {
      token,
      user: {
        email: isUserValid.email,
        name: isUserValid.name,
        _id: isUserValid._id,
      },
    };

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      data: loginData,
    });
  } catch (error) {
    console.error("Error while login. Please try again" + error);
    return res.status(500).json({
      success: false,
      message:
        "Something went wrong while user registration. Please try again later.",
    });
  }
}
