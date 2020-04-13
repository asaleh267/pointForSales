import React, { useState } from "react";
import {
  TableRow,
  TableCell,
  WithStyles,
  withStyles,
  FormControl,
  OutlinedInput,
} from "@material-ui/core";
import styles from "./styles";

export interface IProps {
  output: number;
  value: number;
  onChange: (value: number) => void;
}
const Discount: React.FunctionComponent<IProps & WithStyles<typeof styles>> = ({
  classes,
  output,
  value,
  onChange = (value: number) => {},
}) => {
  const [discountValue, setDiscountValue] = useState<any>(value);
  const [error, setError] = useState(false);

  const handleOnpress = (event: any) => {
    const inputValue = event.target.value;
    const discount = parseInt(inputValue);
    if (discount === NaN || inputValue === '') {
      setDiscountValue(0);
    }
    else if (discount < 0 || discount > 100) {
      setDiscountValue(discount);
      setError(true);
    } else {
      setDiscountValue(discount);
      setError(false);
    }
    onChange(discountValue);
  };

  return (
    <TableRow>
      <TableCell
        className={classes.tableCell}
        style={{ backgroundColor: "#f5f5f5" }}
      >
        Discount
      </TableCell>
      <TableCell className={classes.tableCell} align="left">
        <FormControl>
          <OutlinedInput
            id="outlined-adornment-amount"
            onChange={handleOnpress}
            value={discountValue}
            error={error}
          />
        </FormControl>{" "}
      </TableCell>
      <TableCell className={classes.tableCell} align="right">
        {output}
      </TableCell>
    </TableRow>
  );
};
const StyledDiscount = withStyles(styles)(Discount);
export default StyledDiscount;
