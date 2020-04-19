import React from "react";
import { TableRow, TableBody } from "@material-ui/core";
import CustomTableCell from "../controls/CustomTableCell";

const CartBodyNoItems = () => (
  <TableBody>
    <TableRow>
      <NoItemsTableCell />
    </TableRow>
  </TableBody>
);

export default CartBodyNoItems;


const NoItemsTableCell = () => (
  <CustomTableCell colSpan={6}>
    <strong>No items in the cart</strong>
  </CustomTableCell>
);
