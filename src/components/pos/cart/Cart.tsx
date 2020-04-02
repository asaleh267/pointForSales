import * as React from "react";
import { WithStyles, withStyles, Grid } from "@material-ui/core";
import styles from "./styles";
import { Client } from "./client/Client";
import BarcodeScanner from "./barcodeScanner";
import CartTable from "./cartTable";
import { spacing } from '@material-ui/system';

export interface IProps {
}
// Component
export const CartComponent: React.FunctionComponent<IProps &
  WithStyles<typeof styles>> = props => {
  const { classes } = props;
  return (
      <Grid className={classes.cartContainer}>
        <Client></Client>
        <BarcodeScanner></BarcodeScanner>
        <CartTable></CartTable>
      </Grid>
  );
};

const StyledCart = withStyles(styles)(CartComponent);
export { StyledCart as Cart };
