import React from "react";
import { makeStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import { colors } from "../../../utils/Variables";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import styles from "./styles";

export interface IProps {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
}
export const POSDialogComponent: React.FunctionComponent<
  IProps & WithStyles<typeof styles>
> = (props) => {
  const {
    classes,
    open,
    title,
    children,
    onConfirm = () => {},
    onCancel = () => {},
  } = props;
  const domRef = React.createRef();

  return (
    <Dialog
      open={open}
      maxWidth="md"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      ref={domRef}
    >
      <DialogTitle id="dialog-title" className={classes.dialogTitle}>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>

      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onConfirm}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

const StyledPOSDialog = withStyles(styles)(POSDialogComponent);
export { StyledPOSDialog as POSDialog };
