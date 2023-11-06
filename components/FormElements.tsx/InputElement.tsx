import { InputElementProps } from "@/types/type";
import React from "react";

const InputElement = ({
  label,
  placeholder,
  type,
  value,
  onChange,
}: InputElementProps) => {
  return (
    <div className="relative">
      <p className="absolute pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 ml-2 font-medium bg-white text-gray-600">
        {label}
      </p>
      <input
        placeholder={placeholder}
        type={type || "text"}
        value={value}
        onChange={onChange}
        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full p-4 m-0 text-base block bg-white border-gray-300 rounded-md"
      />
    </div>
  );
};

export default InputElement;
