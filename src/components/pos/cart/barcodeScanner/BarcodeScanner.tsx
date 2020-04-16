import React, { useState } from "react";
import {
  WithStyles,
  withStyles,
  TextField,
  useScrollTrigger,
} from "@material-ui/core";
import styles from "./styles";
import { getProductByBarcode } from "../../../../api/server";
import { Product } from "../../../../types/Product";

const validbarcode = require("barcode-validator");

export interface BarcodeScannerProps {
  onChangeBarcode?: (product: Product) => void;
}
// Component
export const BarcodeScannerComponent: React.FunctionComponent<
BarcodeScannerProps & WithStyles<typeof styles>
> = ({
  classes,
  onChangeBarcode = () => {},
}) => {
  const [errorMsg, setErrorMsg] = useState("");

  const handleOnpress = (event: any) => {
    const barcodeText = event.target.value;
    if (validateBarcode(barcodeText) && event.key === "Enter") {    
      getProductByBarcode(barcodeText).then((res: { data: any }) => {
        const product = res.data;
        onChangeBarcode(product[0]);
      });
      
    }
  };

  const validateBarcode = (text: string) => {   
    if (text !== "" && !validbarcode(text)) {
      setErrorMsg("Invalid barcode");
      return false;
    } else {
      setErrorMsg("");
      return true;
    }
  };

  return (
    <TextField
      fullWidth
      onKeyUp={handleOnpress}
      className={classes.input}
      id="outlined-basic"
      label="Barcode Scanner"
      variant="outlined"
      helperText={errorMsg}
    />
  );
};

const StyledBarcodeScanner = withStyles(styles)(BarcodeScannerComponent);
export { StyledBarcodeScanner as BarcodeScanner };
