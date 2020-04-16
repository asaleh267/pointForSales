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
import { Product } from "../../../../../types/Product";
import Quantity from "./Quantity";
import StyledDeleteItem from "./DeleteItem";
export interface IProps {
  data: Product[];
  deleteItem: (productID: number) => void;
  changeQuantity: (productID: number, quantity: number) => void;
}
// Component
export const CartBodyComponent: React.FunctionComponent<
  IProps & WithStyles<typeof styles>
> = (props) => {
  const { classes, data, deleteItem, changeQuantity } = props;

  if (data.length === 0) {
    return <CartBodyNoItems />;
  }

  return (
    <TableBody>
      {data.map((product: Product) => (
        <TableRow className={classes.row} key={product.id}>
          <TableCell>
            <StyledDeleteItem
              itemID={product.id}
              onDelete={deleteItem}
            ></StyledDeleteItem>
          </TableCell>
          <TableCell>{product.name}</TableCell>
          <TableCell>{product.price}</TableCell>
          <TableCell>
            <Quantity onChange={changeQuantity} elementID={product.id} value={product.quantity} inStock={product.instock}></Quantity>
          </TableCell>
          <TableCell>{product.price * product.quantity}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

const StyledCartBody = withStyles(styles)(CartBodyComponent);
export { StyledCartBody as CartBody };
