import React from 'react'
import  ProductView from '../components/product-details/product-view'
import Footer from '../components/footer/footer'
import Related_Products from '../components/product-details/relaed_products'

export default function ProductDetails() {
  return (
    <div>
     < ProductView/>
    <Related_Products/>
      <Footer/>
    </div>
  )
}
