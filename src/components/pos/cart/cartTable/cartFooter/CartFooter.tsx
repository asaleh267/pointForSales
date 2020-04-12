import React, { useState, useEffect } from "react";
import {
  WithStyles,
  Button,
  withStyles,
  TableRow,
  TableCell,
  TableContainer,
  Table,
  TableBody,
} from "@material-ui/core";
import styles from "./styles";
import { ProductType } from "../../../../../types/Product";
import SubTotal from "./SubTotal";
import OrderTax from "./OrderTax";
import Discount from "./Discount";
import Total from "./Total";

export interface IProps {
  data: ProductType[];
}

export interface CalculationsProperties {
  tax: number;
  subTotal: number;
  numberOfItems: number;
  discount: number;
  totalAfterTax: number;
  finalTotal: number;
}
// Component
export const CartFooterComponent: React.FunctionComponent<
  IProps & WithStyles<typeof styles>
> = (props) => {
  const { classes, data } = props;
  const [calculations, setCalculations] = useState<CalculationsProperties>({
    tax: 0,
    subTotal: 0,
    numberOfItems: 0,
    discount: 0,
    totalAfterTax: 0,
    finalTotal: 0,
  });
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    let cartCalculation = calculations;
    cartCalculation.numberOfItems = data.length;
    cartCalculation.subTotal = calculateSubTotal();
    cartCalculation.tax = 17 / 100;
    cartCalculation.discount = discount / 100;
    cartCalculation.totalAfterTax = calculateTotalAfterTax(
      cartCalculation.subTotal,
      cartCalculation.tax
    );
    cartCalculation.finalTotal = calculateFinalTotal(
      cartCalculation.totalAfterTax,
      cartCalculation.discount
    );
    setCalculations(cartCalculation);
  }, []);

  useEffect(() => {
    let cartCalculation = calculations;
    cartCalculation.numberOfItems = data.length;
    cartCalculation.subTotal = calculateSubTotal();
    cartCalculation.tax = 17 / 100;
    cartCalculation.discount = discount / 100;
    cartCalculation.totalAfterTax = calculateTotalAfterTax(
      cartCalculation.subTotal,
      cartCalculation.tax
    );
    cartCalculation.finalTotal = calculateFinalTotal(
      cartCalculation.totalAfterTax,
      cartCalculation.discount
    );
    setCalculations(cartCalculation);
  }, [data]);

  const calculateTotalAfterTax = (subTotal: number, tax: number) => {
    return subTotal + (1 + tax) * subTotal;
  };

  const calculateFinalTotal = (
    totalAfterTax: number,
    discountPercentage: number
  ) => {
    return totalAfterTax - discountPercentage * totalAfterTax;
  };

  const calculateSubTotal = () => {
    let sum = 0;
    for (let index = 0; index < data.length; index++) {
      sum += data[index]["price"] * data[index]["quantity"];
    }
    return sum;
  };

  return (
    <TableContainer>
      <Table>
        <TableBody>
          <SubTotal></SubTotal>
          <OrderTax></OrderTax>
          <Discount></Discount>
          <Total></Total>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const StyledCartFooter = withStyles(styles)(CartFooterComponent);
export { StyledCartFooter as CartFooter };
