import React from "react";
import { TableRow, TableCell, WithStyles, withStyles } from "@material-ui/core";
import styles from "./styles";

export interface TotalProps {
  output: number;
}
const Total: React.FunctionComponent<TotalProps & WithStyles<typeof styles>> = ({
  classes,
  output,
}) => {
  return (
    <TableRow>
      <TableCell className={classes.title}>Total</TableCell>
      <TableCell className={classes.tableCell} align="left">
        {output}
      </TableCell>
    </TableRow>
  );
};
const StyledTotal = withStyles(styles)(Total);
export default StyledTotal;
