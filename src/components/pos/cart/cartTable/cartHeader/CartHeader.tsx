import * as React from "react";
import {
  WithStyles,
  withStyles,
  TableHead,
  TableRow,
  TableCell
} from "@material-ui/core";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import styles from "./styles";

export interface IProps {}
// Component
export const CartHeaderComponent: React.FunctionComponent<IProps &
  WithStyles<typeof styles>> = props => {
  const { classes } = props;
  return (
    <TableHead className={classes.tableHead}>
      <TableRow>
        <TableCell></TableCell>
        <TableCell>PRODUCT</TableCell>
        <TableCell>PRICE</TableCell>
        <TableCell>QUANTITY</TableCell>
        <TableCell>TOTAL</TableCell>
      </TableRow>
    </TableHead>
  );
};

const StyledCartHeader = withStyles(styles)(CartHeaderComponent);
export { StyledCartHeader as CartHeader };
