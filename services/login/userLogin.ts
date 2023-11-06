import { LoginData } from "@/types/type";

export const userLogin = async (formData: LoginData) => {
  try {
    const response = await fetch("/api/login/handler", {
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
