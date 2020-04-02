import * as React from "react";
import { WithStyles, withStyles } from "@material-ui/core";

import styles from "./styles";

export interface IProps {
}
// Component
export const CartFooterComponent: React.FunctionComponent<IProps &
  WithStyles<typeof styles>> = props => {
  const { classes } = props;
  return <h1 className={classes.testClass}>Cart footer</h1>;
};

const StyledCartFooter = withStyles(styles)(CartFooterComponent);
export { StyledCartFooter as CartFooter };
