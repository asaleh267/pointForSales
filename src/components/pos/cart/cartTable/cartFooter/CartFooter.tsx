import * as React from "react";
import {
  WithStyles,
  Button,
  withStyles,
  TableRow,
  TableCell,
  TableContainer,
  Table,
  TableBody,
} from "@material-ui/core";
import styles from "./styles";

export interface IProps {
}
// Component
export const CartFooterComponent: React.FunctionComponent<IProps &
  WithStyles<typeof styles>> = props => {
  const { classes } = props;
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className={classes.tableCell} style={{backgroundColor: "#f5f5f5"}}>Subtotal</TableCell>
            <TableCell className={classes.tableCell} align="left">
              100
            </TableCell>
            <TableCell className={classes.tableCell} align="left">
              20
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.tableCell} style={{backgroundColor: "#f5f5f5"}}>Order Tax</TableCell>
            <TableCell className={classes.tableCell} align="left">{`${(
              30 * 100
            ).toFixed(0)} %`}</TableCell>
            <TableCell className={classes.tableCell} align="left">
              20
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.tableCell} style={{backgroundColor: "#f5f5f5"}}>Discount</TableCell>
            <TableCell className={classes.tableCell} align="left">{`${(
              30 * 100
            ).toFixed(0)} %`}</TableCell>
            <TableCell className={classes.tableCell} align="left">
              200
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.tableCell} style={{backgroundColor: "#f5f5f5"}}>Total</TableCell>
            <TableCell colSpan={2} className={classes.tableCell} align="left">
              200
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const StyledCartFooter = withStyles(styles)(CartFooterComponent);
export { StyledCartFooter as CartFooter };
