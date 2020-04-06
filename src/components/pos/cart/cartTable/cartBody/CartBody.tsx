import * as React from "react";
import { WithStyles, withStyles } from "@material-ui/core";
import styles from "./styles";
import CartBodyNoItems from "./CartBodyNoItems";

export interface IProps {
  cartArray: any
}
// Component
export const CartBody: React.FunctionComponent<IProps &
  WithStyles<typeof styles>> = props => {
  const { classes, cartArray } = props;

  if (cartArray.length === 0) {
    return <CartBodyNoItems/>
  }
  return <h1>Aseel</h1>
};

const StyledCartBody = withStyles(styles)(CartBody);
export { StyledCartBody };
