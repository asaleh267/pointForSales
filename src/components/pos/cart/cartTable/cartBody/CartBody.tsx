import * as React from "react";
import { WithStyles, withStyles } from "@material-ui/core";
import styles from "./styles";

export interface IProps {
}
// Component
export const CartBodyComponent: React.FunctionComponent<IProps &
  WithStyles<typeof styles>> = props => {
  const { classes } = props;
  return <h1 className={classes.testClass}>Cart Body</h1>;
};

const StyledCartBody = withStyles(styles)(CartBodyComponent);
export { StyledCartBody as CartBody };
