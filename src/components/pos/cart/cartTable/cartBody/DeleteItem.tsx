import React from "react";
import { WithStyles, Button, withStyles } from "@material-ui/core";
import styles from "./styles";
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
export interface IProps {}
const DeleteItem: React.FunctionComponent<IProps & WithStyles<typeof styles>> = (
  props
) => {
    const { classes } = props;
  return (
      <Button
        variant="contained"
        color="secondary"
        size="small"
        className= {classes.deleteButton}
        startIcon={<RemoveCircleIcon className={classes.deleteIcon}/>}
      ></Button>
  );
};

const StyledDeleteItem = withStyles(styles)(DeleteItem);
export default StyledDeleteItem;
