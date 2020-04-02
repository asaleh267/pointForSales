import React from "react";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import style from "./style";

export interface IProps {
  backgroundImage?: string;
  backgroundColor?: string;
  productName: string;
}
export const ProductComponent: React.FC<IProps & WithStyles<typeof style>> = props => {
  const { classes, backgroundColor, backgroundImage, productName } = props;

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
const StyledProduct = withStyles(style)(ProductComponent);
export { StyledProduct as Product };
