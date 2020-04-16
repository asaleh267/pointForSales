import React from "react";
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Dialog,
  Button,
} from "@material-ui/core";

export interface ConfirmDialogProps {
  open: boolean;
  message: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}
const ConfirmDialog: React.FunctionComponent<ConfirmDialogProps> = (props) => {
  const { open, message, onCancel, onConfirm } = props;
  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Message</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary" autoFocus>
          onCancel
        </Button>
        <Button onClick={onConfirm} color="secondary" autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ConfirmDialog;
