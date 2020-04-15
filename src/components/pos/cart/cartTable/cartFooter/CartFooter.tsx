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
import {
  calculateSubTotal,
  calculateNumberOfItems,
  calculateTotalAfterTax,
  calculateFinalTotal,
} from "../../utils/utils";

export interface IProps {
  data: Product[];
}
// Component
export const CartFooterComponent: React.FunctionComponent<
  IProps & WithStyles<typeof styles>
> = (props) => {
  const { classes, data } = props;
  const [discount, setDiscount] = useState(0);

  const handleDiscountChange = (value: number) => {
    if (value > 0 && value < 100) {
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
            output={calculateSubTotal(data)}
            noOfItems={calculateNumberOfItems(data)}
          ></SubTotal>
          <OrderTax tax={0.17} output={calculateTotalAfterTax(data)}></OrderTax>
          <Discount
            value={discount}
            output={0}
            onChange={handleDiscountChange}
          ></Discount>
          <Total output={calculateFinalTotal(data, discount)}></Total>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const StyledCartFooter = withStyles(styles)(CartFooterComponent);
export { StyledCartFooter as CartFooter };
