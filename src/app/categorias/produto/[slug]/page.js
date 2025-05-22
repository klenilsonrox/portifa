import React from 'react'
import { baseUrl } from '../../../../../baseUrl';
import ProductCategoryCard from '@/app/components/produtos/product-category-card';

const page =async ({params}) => {
const {slug}= await params
    const response = await fetch(`${baseUrl}/products/slug/${slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const produto = await response.json();
 


  return (
    <div>
        <ProductCategoryCard product={produto.data} />
    </div>
  )
}

export default page