import * as React from "react";
import {
  WithStyles,
  withStyles,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import styles from "./styles";
import CartBodyNoItems from "./CartBodyNoItems";
import { ProductType } from "../../../stock/products/product/Product";
import Quantity from "./Quantity";

import DeleteButton from "../controls/deleteButton";
import StyledDeleteItem from "./DeleteItem";
export interface IProps {
  cartArray: any;
}
// Component
export const CartBodyComponent: React.FunctionComponent<
  IProps & WithStyles<typeof styles>
> = (props) => {
  const { classes, cartArray } = props;

  if (cartArray.length === 0) {
    return <CartBodyNoItems />;
  }
  return (
    <TableBody>
      {cartArray.map((element: ProductType) => (
        <TableRow className={classes.row} key={element.id}>
          <TableCell>
            <StyledDeleteItem></StyledDeleteItem>
          </TableCell>
          <TableCell>{element.name}</TableCell>
          <TableCell>{element.price}</TableCell>
          <TableCell>
            <Quantity></Quantity>
          </TableCell>
          <TableCell>{element.price * element.quantity}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

const StyledCartBody = withStyles(styles)(CartBodyComponent);
export { StyledCartBody as CartBody };
