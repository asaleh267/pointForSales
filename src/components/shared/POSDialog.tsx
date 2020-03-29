import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../utils/Variables";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";


const useStyles = makeStyles({
  dialogTitle: {
    backgroundColor: colors.navy,
    padding: '16px',
    textAlign: 'left',
    color: '#ffffff'
  },
  modalContent: {
    backgroundColor: '#ffffff'   
  }
});

export const POSDialog = (props: {open: boolean; title: string; children: React.ReactNode; }) => {
  const classes = useStyles();
  const domRef = React.createRef();

  return (
    <Dialog
    open={props.open}
    aria-labelledby="dialog-title"
    aria-describedby="dialog-description"
    ref={domRef}
    >
    <DialogTitle id="dialog-title" className={classes.dialogTitle}>
    {props.title}
    </DialogTitle>
    <DialogContent>
        {props.children}
    </DialogContent>
  </Dialog>
  );
};


