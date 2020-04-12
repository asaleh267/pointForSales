import React from "react";
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Dialog,
  Button,
} from "@material-ui/core";

export interface IProps {
  open: boolean;
  message: string;
  cancel?: () => void;
  confirm?: () => void;
}
const ConfirmDialog: React.FunctionComponent<IProps> = (props) => {
  const { open, message, cancel, confirm } = props;
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
        <Button onClick={cancel} color="primary" autoFocus>
          Cancel
        </Button>
        <Button onClick={confirm} color="secondary" autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ConfirmDialog;
