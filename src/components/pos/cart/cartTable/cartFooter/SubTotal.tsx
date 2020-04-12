import React from "react";
import { TableRow, TableCell, WithStyles, withStyles } from "@material-ui/core";
import styles from "./styles";

export interface IProps {}
const SubTotal: React.FunctionComponent<IProps & WithStyles<typeof styles>> = ({
    classes
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
        11
      </TableCell>
      <TableCell className={classes.tableCell} align="right">
        5 items
      </TableCell>
    </TableRow>
  );
};
const StyledSubTotal = withStyles(styles)(SubTotal);
export default StyledSubTotal ;
