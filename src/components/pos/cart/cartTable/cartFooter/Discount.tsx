import React, { useState } from "react";
import {
  TableRow,
  TableCell,
  WithStyles,
  withStyles,
  FormControl,
  OutlinedInput,
  TextField,
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
  const [error, setError] = useState(false);

  const handleOnpress = (event: any) => {
    const inputValue = event.target.value;
    let discount = parseInt(inputValue);
    if (discount === NaN || inputValue === "") {
      discount = 0;
      setError(true);
    } else if (discount < 0 || discount > 100) {
      setError(true);
    } else {
      setError(false);
    }
    onChange(discount);
  };

  return (
    <TableRow>
      <TableCell className={classes.title}>Discount</TableCell>
      <TableCell className={classes.tableCell} align="left">
        <TextField
          label="Discount"
          type="number"
          onKeyUp={handleOnpress}
          onChange={handleOnpress}
          InputProps={{ inputProps: { min: 0, max: 100 } }}
        />
      </TableCell>
      <TableCell className={classes.tableCell} align="right">
        {output}
      </TableCell>
    </TableRow>
  );
};
const StyledDiscount = withStyles(styles)(Discount);
export default StyledDiscount;
