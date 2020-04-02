import * as React from "react";
import { WithStyles, withStyles } from "@material-ui/core";

import styles from "./styles";

export interface IProps {
}
// Component
export const CartHeaderComponent: React.FunctionComponent<IProps &
  WithStyles<typeof styles>> = props => {
  const { classes } = props;
  return <h1 className={classes.testClass}>Cart Header</h1>;
};

const StyledCartHeader = withStyles(styles)(CartHeaderComponent);
export { StyledCartHeader as CartHeader };
