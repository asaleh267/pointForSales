import React from "react";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import style from "./style";
import { ProductType } from "../../../../../types/Product";

export interface IProps {
  product: ProductType;
  selectedProduct?: (product: ProductType) => void;
}
export const ProductComponent: React.FC<IProps & WithStyles<typeof style>> = ({
  classes,
  product,
  selectedProduct = () => {},
}) => {
  let productStyle, mask;

  const handleOnClick = () => {
    selectedProduct(product);
  };
  if (product.image) {
    productStyle = {
      backgroundImage: `url(${product.image})`,
      backgroundSize: "cover",
    };
    mask = <div className={classes.mask}></div>;
  } else {
    productStyle = { backgroundColor: product.bg_color };
  }

  return (
    <div
      className={classes.productContainer}
      style={productStyle}
      onClick={handleOnClick}
    >
      <Typography variant="body2" className={classes.productName}>
        {product.name}
      </Typography>
      {mask}
    </div>
  );
};
const StyledProduct = withStyles(style)(ProductComponent);
export { StyledProduct as Product };
