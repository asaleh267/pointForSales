import React from 'react';
import { Product } from '../product/Product';

export default function ProductList() {  
  return (
    <div>
        <Product productName='aseel' backgroundColor='red'></Product>
        <Product productName='aseel' backgroundImage='https://bit.ly/2xEN3WK'></Product>
    </div>
  );
}