import { CustomButtonProps } from "@/types/type";
import React from "react";

const CustomButton = ({
  title,
  onClick,
  containerStyles,
  rightIcon,
  textStyles,
  disabled,
}: CustomButtonProps) => {
  return (
    <button className={`custom-btn ${containerStyles}`} disabled={disabled} onClick={onClick}>
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default CustomButton;
