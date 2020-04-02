import * as React from "react";
import { WithStyles, withStyles } from "@material-ui/core";

import styles from "./styles";
import { Client } from "./client/Client";
import BarcodeScanner from "./barcodeScanner";
import CartTable from "./cartTable";

export interface IProps {
}
// Component
export const CartComponent: React.FunctionComponent<IProps &
  WithStyles<typeof styles>> = props => {
  const { classes } = props;
  return (
      <>
        <Client></Client>
        <BarcodeScanner></BarcodeScanner>
        <CartTable></CartTable>
      </>
  );
};

const StyledCart = withStyles(styles)(CartComponent);
export { StyledCart as Cart };
