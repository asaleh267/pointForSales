import React from "react";
import { TableRow, TableCell, WithStyles, withStyles } from "@material-ui/core";
import styles from "./styles";

export interface IProps {
  output: number;
  noOfItems: number;
}
const SubTotal: React.FunctionComponent<IProps & WithStyles<typeof styles>> = ({
    classes,
    output,
    noOfItems
}) => {
  return (
    <TableRow>
      <TableCell
        className={classes.tableCell}
        style={{ backgroundColor: "#f5f5f5" }}
      >
        Subtotal
      </TableCell>
      <TableCell className={classes.tableCell} align="left">
        {output}
      </TableCell>
      <TableCell className={classes.tableCell} align="right">
        {noOfItems} { noOfItems > 1 ? 'items': 'item'}
      </TableCell>
    </TableRow>
  );
};
const StyledSubTotal = withStyles(styles)(SubTotal);
export default StyledSubTotal ;
