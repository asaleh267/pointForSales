import * as React from "react";
import { WithStyles, withStyles } from "@material-ui/core";

import styles from "./styles";

export interface IProps {
}
// Component
export const ClientComponent: React.FunctionComponent<IProps &
  WithStyles<typeof styles>> = props => {
  const { classes } = props;
  return <h1 className={classes.testClass}>Select Client</h1>;
};

const StyledClientComponent = withStyles(styles)(ClientComponent);
export { StyledClientComponent as Client };
