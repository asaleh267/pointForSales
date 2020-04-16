import React, { useState, useEffect } from "react";
import { WithStyles, Button, withStyles, Grid } from "@material-ui/core";
import styles from "./styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
export interface QuantityProps {
  elementID: number;
  value: number;
  inStock: number;
  onChange?: (elementID: number, value: number) => void;
}
const Quantity: React.FunctionComponent<QuantityProps & WithStyles<typeof styles>> = (
  props
) => {
  const { classes, elementID, value, onChange = () => {}, inStock } = props;
  let [quantity, setQuantity] = useState<number>(value);

  const decreaseQuantity = () => {
    if (value > 1) {
      setQuantity(--quantity);
      onChange(elementID, quantity);
    }
  }

  const increaseQuantity = () => {
    setQuantity(++quantity);
    onChange(elementID, quantity);
  }

  useEffect(() => {
    setQuantity(value);
  }, [value]);

  return (
    <Grid container alignItems="stretch" justify="space-between">
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        onClick={decreaseQuantity}
        startIcon={<RemoveIcon />}
        disabled={quantity === 1}
      ></Button>
      <input type="text" value={quantity} className={classes.input} readOnly/>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        onClick={increaseQuantity}
        startIcon={<AddIcon />}
        disabled={quantity === inStock}
      ></Button>
    </Grid>
  );
};

const StyledQuantity = withStyles(styles)(Quantity);
export default StyledQuantity;
