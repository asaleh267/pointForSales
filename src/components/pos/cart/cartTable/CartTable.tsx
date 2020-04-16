import React, { useState, useEffect } from "react";
import {
  WithStyles,
  withStyles,
  Table,
  TableContainer,
} from "@material-ui/core";

import styles from "./styles";
import CartHeader from "./cartHeader";
import CartBody from "./cartBody";
import CartFooter from "./cartFooter";
import CartActions from "./controls/cartActions";
import { Product } from "../../../../types/Product";

export interface IProps {
  data: Product[];
  deleteItem: (productID: number) => void;
  changeQuantity: (productID: number, quantity: number) => void;
  client: string;
}

// Component
export const CartTableComponent: React.FunctionComponent<
  IProps & WithStyles<typeof styles>
> = (props) => {
  const { classes, data, client } = props;
  const [discount, setDiscount] = useState(0);

  const handleOnDiscountValue = (value: number) => {
    setDiscount(value);
  }
  
  return (
    <>
      <TableContainer className={classes.tableContainer}>
        <Table className={classes.table} stickyHeader>
          <CartHeader></CartHeader>
          <CartBody {...props}></CartBody>
        </Table>
      </TableContainer>
      <CartFooter onChangeDiscountValue={handleOnDiscountValue} data={data}></CartFooter>
      <CartActions discount={discount} client={client} data={data}></CartActions>
    </>
  );
};

const StyledCartTableComponent = withStyles(styles)(CartTableComponent);
export { StyledCartTableComponent as CartTable };
