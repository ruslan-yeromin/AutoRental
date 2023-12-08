import { ProductDescProps } from "@/types/type";
import React from "react";

const ProductDesc: React.FC<ProductDescProps> = ({ carDesc }) => {
  return (
    <div className="mt-10">
      <h3 className="text-[1.5rem] text-primary">Car Description</h3>
      <p className="mt-6">{carDesc}</p>
    </div>
    
  )
};

export default ProductDesc;
