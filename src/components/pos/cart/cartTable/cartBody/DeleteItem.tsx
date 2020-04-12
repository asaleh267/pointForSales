import React from "react";
import { WithStyles, Button, withStyles } from "@material-ui/core";
import styles from "./styles";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
export interface IProps {
  itemID: number;
  onDelete?: (productID: number) => void;
}
const DeleteItem: React.FunctionComponent<
  IProps & WithStyles<typeof styles>
> = ({ onDelete = () => {}, classes, itemID }) => {

  const handleOnClick = () => {
    onDelete(itemID);
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      size="small"
      className={classes.deleteButton}
      startIcon={<RemoveCircleIcon className={classes.deleteIcon} />}
      onClick={handleOnClick}
    ></Button>
  );
};

const StyledDeleteItem = withStyles(styles)(DeleteItem);
export default StyledDeleteItem;
