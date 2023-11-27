"use client";

import CustomButton from "@/components/CustomButton/CustomButton";
import InputElement from "@/components/FormElements.tsx/InputElement";
import Loader from "@/components/Loader/Loader";
import Notify from "@/components/Notification/Notify";
import { GlobalContext } from "@/context";
import { signUpNewUser } from "@/services/sign-up/userRegistration";
import { SignUpData } from "@/types/type";
import { inputData } from "@/utils/data";
import Link from "next/link";
import React, { useState, useContext } from "react";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const initialFormState: SignUpData = {
  name: "",
  email: "",
  password: "",
};

const Page = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isRegistered, setIsRegistered] = useState(false);
  const { componentLevelLoader, setComponentLevelLoader } =
    useContext(GlobalContext);
  const router = useRouter();

  const isFormValid = useCallback(() => {
    return (
      formData &&
      formData.name &&
      formData.name.trim() !== "" &&
      formData.email &&
      formData.email.trim() !== "" &&
      formData.password &&
      formData.password.trim() !== ""
    );
  }, [formData]);

  async function handleRegisterOnSubmit() {
    setComponentLevelLoader({ loading: true, id: "" });
    const data = await signUpNewUser(formData);

    if (data.success) {
      toast.success(data.message, {
        position: toast.POSITION.TOP_RIGHT,
      })
      setIsRegistered(true);
      setComponentLevelLoader({ loading: false, id: "" });
      setFormData(initialFormState);
    } else {
      toast.error(data.message, {
        position: toast.POSITION.TOP_RIGHT,
      })
      setComponentLevelLoader({ loading: false, id: "" });
      setFormData(initialFormState);
    }
  }

  return (
    <div className="bg-white relative">
      <div className="flex flex-col items-center justify-between py-0 px-10 mt-8 mr-auto  xl:px-5 lg:flex-row">
        <div className="flex flex-col justify-center w-full px-10 lg:flex-row">
          <div className="w-full mx-0 mt-10 mb-0 relative max-w-2xl lg:mt-0 lg:w-5/12">
            <div className="flex w-full flex-col items-center justify-start p-10 bg-white shadow-2xl rounded-xl relative z-10">
              <h2 className="w-full text-3xl pb-2 font-bold text-center">
                {isRegistered
                  ? "Registration Successful!"
                  : "Sign Up for an account"}
              </h2>
              {isRegistered ? (
                <CustomButton
                  title="Login"
                  containerStyles="w-full button button-padding"
                  onClick={() => router.push("/login")}
                />
              ) : (
                <div className="w-full mt-6 mb-0 mx-0 relative flex flex-col space-y-8">
                  {inputData.map((item) => (
                    <InputElement
                      key={item.id}
                      label={item.label}
                      type={item.type}
                      placeholder={item.placeholder}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          [item.id]: e.target.value,
                        });
                      }}
                      value={formData[item.id]}
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
                          title="Sign Up"
                          containerStyles="w-full button button-padding disabled"
                          disabled={!isFormValid()}
                          onClick={handleRegisterOnSubmit}
                        />
                      </div>
                    )}
                  </div>

                  <div className="">
                    <p className="font-medium">
                      Already have an account?{" "}
                      <Link className="underline text-blue-800" href="/login">
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Notify />
    </div>
  );
};

export default Page;
