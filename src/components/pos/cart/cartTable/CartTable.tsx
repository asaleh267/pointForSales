import  React, { useState } from "react";
import { WithStyles, withStyles, Table } from "@material-ui/core";

import styles from "./styles";
import CartHeader from "./cartHeader";
import CartBody from "./cartBody";
import CartFooter from "./cartFooter";

export interface IProps {}
// Component
export const CartTableComponent: React.FunctionComponent<IProps &
  WithStyles<typeof styles>> = props => {
  const { classes } = props;
  const [cartArray, setCartArray] = useState([]);
  return (
    <Table stickyHeader>
      <CartHeader></CartHeader>
      <CartBody classes={classes} cartArray={cartArray}></CartBody>
      <CartFooter></CartFooter>
    </Table>
  );
};

const StyledCartTableComponent = withStyles(styles)(CartTableComponent);
export { StyledCartTableComponent as CartTable };
