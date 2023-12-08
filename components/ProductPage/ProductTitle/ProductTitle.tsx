import { ProductTitleProps } from '@/types/type'
import React from 'react'

const ProductTitle: React.FC<ProductTitleProps> = ({ carTitle }) => {
  return <h1 className="text-[2rem]">Rent {carTitle} right now.</h1>
}

export default ProductTitle