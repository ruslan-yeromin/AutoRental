import { CustomButtonProps } from "@/types/type";
import React from "react";

const CustomButton = ({
  title,
  onClick,
  containerStyles,
  rightIcon,
  textStyles,
  disabled,
  type = "button"
}: CustomButtonProps) => {
  return (
    <button type={type} className={`custom-btn hover:bg-[#3178A8] transition-all bg-primary ${containerStyles}`} disabled={disabled} onClick={onClick}>
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default CustomButton;
