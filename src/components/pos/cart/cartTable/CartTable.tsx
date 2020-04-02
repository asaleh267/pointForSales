import * as React from "react";
import { WithStyles, withStyles } from "@material-ui/core";

import styles from "./styles";
import CartHeader from "./cartHeader";
import CartBody from "./cartBody";
import CartFooter from "./cartFooter";

export interface IProps {}
// Component
export const CartTableComponent: React.FunctionComponent<IProps &
  WithStyles<typeof styles>> = props => {
  const { classes } = props;
  return (
    <>
      <CartHeader></CartHeader>
      <CartBody></CartBody>
      <CartFooter></CartFooter>
    </>
  );
};

const StyledCartTableComponent = withStyles(styles)(CartTableComponent);
export { StyledCartTableComponent as CartTable };
