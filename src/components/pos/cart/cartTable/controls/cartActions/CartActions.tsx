import * as React from "react";
import { WithStyles, withStyles, Button } from "@material-ui/core";

import styles from "./styles";

export interface IProps {}
// CartActions
export const CartActionsComponent: React.FunctionComponent<
  IProps & WithStyles<typeof styles>
> = (props) => {
  const { classes } = props;
  return (
    <div className={classes.actions}>
      <Button variant="contained" className={classes.cancelButton} size="small">
        Cancel
      </Button>
      <Button variant="contained" className={classes.paymentButton} size="small">
        Payment
      </Button>
    </div>
  );
};

const StyledCartActions = withStyles(styles)(CartActionsComponent);
export { StyledCartActions as CartActions };
