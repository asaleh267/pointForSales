import * as React from "react";
import { WithStyles, withStyles } from "@material-ui/core";

import styles from "./styles";

export interface IProps {
}
// CartActions
export const CartActions: React.FunctionComponent<IProps &
  WithStyles<typeof styles>> = props => {
  const { classes } = props;
  return <h1 className={classes.testClass}>Test</h1>;
};

const StyledLogin = withStyles(styles)(CartActions);
export { StyledLogin };
