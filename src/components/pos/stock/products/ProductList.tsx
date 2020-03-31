import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Product } from './Product';


const useStyles = makeStyles((theme) => ({
 
}));

export default function ProductList() {
  const classes = useStyles();
  
  return (
    <div>
        <Product productName='aseel' backgroundColor='red'></Product>
        <Product productName='aseel' backgroundImage='https://bit.ly/2xEN3WK'></Product>
    </div>
  );
}