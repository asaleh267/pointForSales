import React, { useState } from "react";
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

export interface IProps {}
// Component
export const CartTableComponent: React.FunctionComponent<
  IProps & WithStyles<typeof styles>
> = (props) => {
  const { classes } = props;
  const [cartArray, setCartArray] = useState([
    {
      id: 1,
      name: "Computer",
      category: "Computers",
      price: 100,
      quantity: 40,
      image:
        "http://www.dar-elweb.com/demos/zarpos/files/products/08153b71766514c0d83ea3ea97de00f2_thumb.jpg",
      bg_color: "",
    },
    {
      id: 2,
      name: "Mouse",
      category: "Computers",
      price: 70,
      quantity: 40,
      image:
        "http://www.dar-elweb.com/demos/zarpos/files/products/4e5ce62c5d4e91cfa7efd093e3638c0d_thumb.jpg",
      bg_color: "",
    },
    {
      id: 1,
      name: "Computer",
      category: "Computers",
      price: 100,
      quantity: 40,
      image:
        "http://www.dar-elweb.com/demos/zarpos/files/products/08153b71766514c0d83ea3ea97de00f2_thumb.jpg",
      bg_color: "",
    },
    {
      id: 2,
      name: "Mouse",
      category: "Computers",
      price: 70,
      quantity: 40,
      image:
        "http://www.dar-elweb.com/demos/zarpos/files/products/4e5ce62c5d4e91cfa7efd093e3638c0d_thumb.jpg",
      bg_color: "",
    },
    {
      id: 3,
      name: "Computer",
      category: "Computers",
      price: 100,
      quantity: 40,
      image:
        "http://www.dar-elweb.com/demos/zarpos/files/products/08153b71766514c0d83ea3ea97de00f2_thumb.jpg",
      bg_color: "",
    },
    {
      id: 4,
      name: "Mouse",
      category: "Computers",
      price: 70,
      quantity: 40,
      image:
        "http://www.dar-elweb.com/demos/zarpos/files/products/4e5ce62c5d4e91cfa7efd093e3638c0d_thumb.jpg",
      bg_color: "",
    },
  ]);
  return (
    <>
    <TableContainer className={classes.tableContainer}>
      <Table className={classes.table} stickyHeader>
        <CartHeader></CartHeader>
        <CartBody cartArray={cartArray}></CartBody>
      </Table>
    </TableContainer>
    <CartFooter></CartFooter>
    <CartActions></CartActions>
    </>
  );
};

const StyledCartTableComponent = withStyles(styles)(CartTableComponent);
export { StyledCartTableComponent as CartTable };
