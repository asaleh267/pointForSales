import React from "react";
import { WithStyles, Button, withStyles } from "@material-ui/core";
import styles from "./styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
export interface IProps {}
const Quantity: React.FunctionComponent<IProps & WithStyles<typeof styles>> = (
  props
) => {
  const { classes } = props;
  return (
    <div className={classes.quantityContainer}>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<RemoveIcon />}
      ></Button>
      <input type="text" value={1} className={classes.input} readOnly />
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<AddIcon />}
      ></Button>
    </div>
  );
};

const StyledQuantity = withStyles(styles)(Quantity);
export default StyledQuantity;
