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
      {data.map((element: Product) => (
        <TableRow className={classes.row} key={element.id}>
          <TableCell>
            <StyledDeleteItem
              itemID={element.id}
              onDelete={deleteItem}
            ></StyledDeleteItem>
          </TableCell>
          <TableCell>{element.name}</TableCell>
          <TableCell>{element.price}</TableCell>
          <TableCell>
            <Quantity onChange={changeQuantity} elementID={element.id} value={element.quantity} inStock={element.instock}></Quantity>
          </TableCell>
          <TableCell>{element.price * element.quantity}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

const StyledCartBody = withStyles(styles)(CartBodyComponent);
export { StyledCartBody as CartBody };
