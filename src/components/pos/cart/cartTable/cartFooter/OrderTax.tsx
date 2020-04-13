import React from "react";
import { TableRow, TableCell, WithStyles, withStyles } from "@material-ui/core";
import styles from "./styles";

export interface IProps {
  tax: number,
  output: number
}
const OrderTax: React.FunctionComponent<IProps & WithStyles<typeof styles>> = ({
    classes,
    tax, 
    output
}) => {
  return (
    <TableRow>
      <TableCell
        className={classes.tableCell}
        style={{ backgroundColor: "#f5f5f5" }}
      >
        Order Tax
      </TableCell>
      <TableCell className={classes.tableCell} align="left">
        {tax}
      </TableCell>
      <TableCell className={classes.tableCell} align="right">
        {output}
      </TableCell>
    </TableRow>
  );
};
const StyledOrderTax = withStyles(styles)(OrderTax);
export default StyledOrderTax ;