import React, { useState, useEffect } from "react";
import {
  WithStyles,
  withStyles,
  TableContainer,
  Table,
  TableBody,
} from "@material-ui/core";
import styles from "./styles";
import { Product } from "../../../../../types/Product";
import SubTotal from "./SubTotal";
import OrderTax from "./OrderTax";
import Discount from "./Discount";
import Total from "./Total";

export interface IProps {
  data: Product[];
}
// Component
export const CartFooterComponent: React.FunctionComponent<
  IProps & WithStyles<typeof styles>
> = (props) => {
  const { classes, data } = props;
  const [discount, setDiscount] = useState(0);



  const calculateSubTotal = () => {
    let sum = 0;
    for (let index = 0; index < data.length; index++) {
      sum += data[index]["price"] * data[index]["quantity"];
    }
    return sum;
  };

  const calculateTotalAfterTax = () => {
    const subTotal = calculateSubTotal();
    const tax = 17/100;
    return subTotal + (1 + tax) * subTotal;
  };

  const calculateNumberOfItems = () => {
    let sum = 0;
    for (let index = 0; index < data.length; index++) {
      sum += data[index]["quantity"];
    }
    return sum;
  };

  const calculateFinalTotal = () => {
    const totalAfterTax = calculateTotalAfterTax();
    const discountPercentage = discount/100;
    return totalAfterTax - discountPercentage * totalAfterTax;
  };

  const handleDiscountChange = (value: number) => {
    if ( value > 0 && value < 100) {
      setDiscount(value);
    } else {
      setDiscount(0);
    }
  };

  return (
    <TableContainer>
      <Table>
        <TableBody>
          <SubTotal
            output={calculateSubTotal()}
            noOfItems={calculateNumberOfItems()}
          ></SubTotal>
          <OrderTax
            tax={0.17}
            output={calculateTotalAfterTax()}
          ></OrderTax>
          <Discount
            value={discount}
            output={0}
            onChange={handleDiscountChange}
          ></Discount>
          <Total output={calculateFinalTotal()}></Total>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const StyledCartFooter = withStyles(styles)(CartFooterComponent);
export { StyledCartFooter as CartFooter };
