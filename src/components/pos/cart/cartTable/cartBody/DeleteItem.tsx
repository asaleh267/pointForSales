import React from "react";
import { WithStyles, Button, withStyles } from "@material-ui/core";
import styles from "./styles";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
export interface DeleteItemProps {
  itemID: number;
  onDelete?: (productID: number) => void;
}
const DeleteItem: React.FunctionComponent<
DeleteItemProps & WithStyles<typeof styles>
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
      startIcon={<RemoveCircleIcon />}
      onClick={handleOnClick}
    ></Button>
  );
};

const StyledDeleteItem = withStyles(styles)(DeleteItem);
export default StyledDeleteItem;
