import * as React from "react";
import { WithStyles, withStyles, TextField } from "@material-ui/core";
import styles from "./styles";

export interface IProps {
}
// Component
export const BarcodeScannerComponent: React.FunctionComponent<IProps &
  WithStyles<typeof styles>> = props => {
  const { classes } = props;
  return (
    <TextField fullWidth={true} className={classes.input} id="outlined-basic" label="Barcode Scanner" variant="outlined" />
  );
};

const StyledBarcodeScanner = withStyles(styles)(BarcodeScannerComponent);
export { StyledBarcodeScanner as BarcodeScanner };
