import * as React from "react";
import { WithStyles, withStyles, Button } from "@material-ui/core";

import styles from "./styles";
import ConfirmDialog from "../../../../../shared/confirmDialog/ConfirmDialog";

export interface IProps {}
// CartActions
export const CartActionsComponent: React.FunctionComponent<
  IProps & WithStyles<typeof styles>
> = (props) => {
  const { classes } = props;
  const [showConfirmDeleteDialog, setShowConfirmDeleteDialog] = React.useState(false);

  const onConfirmDeleteClick = () => {
    setShowConfirmDeleteDialog(false);
  }

  const onCancelConfirmDeleteClick = () => {
    setShowConfirmDeleteDialog(false);
  }

  const openConfirmDialog = () => {
    setShowConfirmDeleteDialog(true);
  }
  return (
    <>
      <ConfirmDialog
        open={showConfirmDeleteDialog}
        message="You will not be able to recover this Data later! Are you sure ?"
        confirm={onConfirmDeleteClick}
        cancel={onCancelConfirmDeleteClick}
      ></ConfirmDialog>
      <div className={classes.actions}>
        <Button
          variant="contained"
          className={classes.cancelButton}
          size="small"
          onClick={openConfirmDialog}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          className={classes.paymentButton}
          size="small"
        >
          Payment
        </Button>
      </div>
    </>
  );
};

const StyledCartActions = withStyles(styles)(CartActionsComponent);
export { StyledCartActions as CartActions };
