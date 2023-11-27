"use client";

import CustomButton from "@/components/CustomButton/CustomButton";
import InputElement from "@/components/FormElements.tsx/InputElement";
import { GlobalContext } from "@/context";
import { userLogin } from "@/services/login/userLogin";
import { LoginData } from "@/types/type";
import { loginData } from "@/utils/data";
import { useEffect } from "react";

import Link from "next/link";
import React, { useState, useCallback, useContext } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader/Loader";

const initialData: LoginData = {
  email: "",
  password: "",
};

const Page = () => {
  const [formData, setFormData] = useState(initialData);
  const router = useRouter();

  const {
    isAuthUser,
    setIsAuthUser,
    user,
    setUser,
    componentLevelLoader,
    setComponentLevelLoader,
  } = useContext(GlobalContext);

  const isFormValid = useCallback(() => {
    return (
      formData &&
      formData.email &&
      formData.email.trim() !== "" &&
      formData.password &&
      formData.password.trim() !== ""
    );
  }, [formData]);

  async function handleLogin() {
    setComponentLevelLoader({ loading: true, id: "" });
    const response = await userLogin(formData);

    console.log("Response: " + response);
    if (response.success) {
      setIsAuthUser(true);
      setUser(response?.data?.user);
      setFormData(initialData);
      Cookies.set("token", response?.data?.token);
      localStorage.setItem("user", JSON.stringify(response?.data?.user));
      setComponentLevelLoader({ loading: false, id: "" });
    } else {
      setIsAuthUser(false);
      setComponentLevelLoader({ loading: false, id: "" });
    }
  }

  useEffect(() => {
    if (isAuthUser) {
      router.push("/");
    }
  });

  return (
    <div className="bg-white relative">
      <div className="flex flex-col items-center justify-between py-0 px-10 mt-8 mr-auto  xl:px-5 lg:flex-row">
        <div className="flex flex-col justify-center w-full px-10 lg:flex-row">
          <div className="w-full mx-0 mt-10 mb-0 relative max-w-2xl lg:mt-0 lg:w-5/12">
            <div className="flex flex-col items-center justify-start p-10 bg-white shadow-2xl rounded-xl relative z-10">
              <h2 className="w-full text-3xl font-bold text-center">Login</h2>

              <div className="w-full mt-6 mb-0 mx-0 relative flex flex-col space-y-8">
                {loginData.map((item) => (
                  <InputElement
                    key={item.id}
                    label={item.label}
                    type={item.type}
                    placeholder={item.placeholder}
                    value={formData[item.id]}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [item.id]: e.target.value,
                      });
                    }}
                  />
                ))}
                <div className="w-full flex">
                  {componentLevelLoader && componentLevelLoader.loading ? (
                    <div className="flex justify-center w-full">
                      <Loader
                        size={60}
                        color="#36d7b7"
                        loading={
                          componentLevelLoader && componentLevelLoader.loading
                        }
                      />
                    </div>
                  ) : (
                    <div className="w-full">
                      <CustomButton
                        title="Login"
                        containerStyles="w-full button button-padding disabled"
                        disabled={!isFormValid()}
                        onClick={handleLogin}
                      />
                    </div>
                  )}
                </div>

                <div className="">
                  <p className="font-medium">
                    Don't have an account?{" "}
                    <Link className="underline text-blue-800" href="/sign-up">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
