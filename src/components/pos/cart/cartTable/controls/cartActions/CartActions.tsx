import * as React from "react";
import { WithStyles, withStyles, Button } from "@material-ui/core";

import styles from "./styles";
import ConfirmDialog from "../../../../../shared/confirmDialog/ConfirmDialog";
import Payment from "../../../payment";
import { Product } from "../../../../../../types/Product";

export interface CartActionsProps {
  data: Product[];
  client: string;
  discount: number;
}
// CartActions
export const CartActionsComponent: React.FunctionComponent<
CartActionsProps & WithStyles<typeof styles>
> = (props) => {
  const { classes, data, client, discount  } = props;
  const [showConfirmDeleteDialog, setShowConfirmDeleteDialog] = React.useState(
    false
  );
  const [showPaymentDialog, setShowPaymentDialog] = React.useState(false);

  console.log(discount);
  const onConfirmDeleteClick = () => {
    setShowConfirmDeleteDialog(false);
  };

  const onCancelConfirmDeleteClick = () => {
    setShowConfirmDeleteDialog(false);
  };

  const openConfirmDialog = () => {
    setShowConfirmDeleteDialog(true);
  };

  const openPaymentDialog = () => {
    setShowPaymentDialog(true);
  };

  const onConfirmPayment = () => {
    setShowPaymentDialog(false);
  };

  const onCancelPayment = () => {
    setShowPaymentDialog(false);
  };
  return (
    <>
      <ConfirmDialog
        open={showConfirmDeleteDialog}
        message="You will not be able to recover this Data later! Are you sure ?"
        onConfirm={onConfirmDeleteClick}
        onCancel={onCancelConfirmDeleteClick}
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
          onClick={openPaymentDialog}
        >
          Payment
        </Button>
        <Payment
          open={showPaymentDialog}
          onConfirm={onConfirmPayment}
          onCancel={onCancelPayment}
          data={data}
          client={client}
          discount={discount}
        ></Payment>
      </div>
    </>
  );
};

const StyledCartActions = withStyles(styles)(CartActionsComponent);
export { StyledCartActions as CartActions };
