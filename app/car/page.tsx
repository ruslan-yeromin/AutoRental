'use client'

import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import ProductCard from '@/components/ProductCard/ProductCard'
import ProductFilters from '@/components/ProductFilters/ProductFilters'
import React from 'react'

const page = () => {
  return (
    <div className='container mx-auto'>
      <Breadcrumbs />
      <div>
        <div>
          <ProductFilters />
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default page