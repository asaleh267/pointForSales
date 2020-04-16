import * as React from "react";
import { WithStyles, withStyles } from "@material-ui/core";

import styles from "./styles";

export interface ComponentProps {
}
// Component
export const Component: React.FunctionComponent<ComponentProps &
  WithStyles<typeof styles>> = props => {
  const { classes } = props;
  return <h1 className={classes.testClass}>Test</h1>;
};

const StyledLogin = withStyles(styles)(Component);
export { StyledLogin as ComponentName };
