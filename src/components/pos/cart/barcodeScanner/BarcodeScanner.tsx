import * as React from "react";
import { WithStyles, withStyles } from "@material-ui/core";
import styles from "./styles";

export interface IProps {
}
// Component
export const BarcodeScannerComponent: React.FunctionComponent<IProps &
  WithStyles<typeof styles>> = props => {
  const { classes } = props;
  return <h1 className={classes.testClass}>Barcode Scanner</h1>;
};

const StyledBarcodeScanner = withStyles(styles)(BarcodeScannerComponent);
export { StyledBarcodeScanner as BarcodeScanner };
