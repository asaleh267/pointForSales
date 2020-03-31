import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    productContainer: {
        width: 45,
        height: 45,
        padding: 8
    }
}));

export interface IProps {
  backgroundImage?: string;
  backgroundColor?: string;
  productName: string;
}
export const ProductItem: React.FC<IProps> = props => {
  const classes = useStyles();
  const { backgroundColor, backgroundImage, productName } = props;

  if (backgroundImage) {
    return (
      <div className={classes.productContainer} style={{ backgroundImage: `url(${backgroundImage})`}}>
        <Typography>{productName}</Typography>
      </div>
    );
  } else {
    return (
        <div className={classes.productContainer} style={{ backgroundColor: backgroundColor}}>
        <Typography>{productName}</Typography>
      </div>
    );
  }
};
