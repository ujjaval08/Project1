import React from 'react';
import Product from './Product'

export default function ProducyList(props) {
  return (
    props.productList.map((product)=>{
        return <Product product={product} k/>
    })
    
  )
}
