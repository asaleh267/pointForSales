import React from "react";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import style from "./style";
import { Product } from "../../../../../types/Product";

export interface ProductItemProps {
  product: Product;
  selectProduct?: (product: Product) => void;
}
export const ProductItemComponent: React.FC<ProductItemProps & WithStyles<typeof style>> = ({
  classes,
  product,
  selectProduct = () => {},
}) => {
  let productStyle, mask;

  const handleOnClick = () => {
    selectProduct({...product});
  };
  if (product.imageUrl) {
    productStyle = {
      backgroundImage: `url(${product.imageUrl})`,
      backgroundSize: "cover",
    };
    mask = <div className={classes.mask}></div>;
  } else {
    productStyle = { backgroundColor: product.bgColor };
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
const StyledProduct = withStyles(style)(ProductItemComponent);
export { StyledProduct as ProductItem };
