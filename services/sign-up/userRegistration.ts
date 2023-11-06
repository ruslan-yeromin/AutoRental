import { SignUpData } from "@/types/type";

export const signUpNewUser = async (formData: SignUpData) => {
  try {
    const response = await fetch("/api/sign-up/handler", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const finalData = await response.json();
    return finalData;
  } catch (error) {
    console.log(error);
  }
};
