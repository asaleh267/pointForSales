import React from "react";
import { TableRow, TableCell, WithStyles, withStyles } from "@material-ui/core";
import styles from "./styles";

export interface SubtotalProps {
  output: number;
  noOfItems: number;
}
const SubTotal: React.FunctionComponent<SubtotalProps & WithStyles<typeof styles>> = ({
  classes,
  output,
  noOfItems,
}) => {
  return (
    <TableRow>
      <TableCell className={classes.title}>Subtotal</TableCell>
      <TableCell className={classes.tableCell} align="left">
        {output}
      </TableCell>
      <TableCell className={classes.tableCell} align="right">
        {noOfItems} {noOfItems > 1 ? "items" : "item"}
      </TableCell>
    </TableRow>
  );
};
const StyledSubTotal = withStyles(styles)(SubTotal);
export default StyledSubTotal;
