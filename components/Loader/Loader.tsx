'use client'

import { LoaderProps } from '@/types/type'
import React from 'react'
import { BarLoader  } from 'react-spinners'



const Loader: React.FC<LoaderProps> = ({color, loading,}) => {
  return (
    <div>
        <BarLoader  
            color={color || "#1e1e1e"}
            height={5}
            loading={loading}
        />
    </div>
  )
}

export default Loader