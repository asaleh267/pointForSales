import React from "react";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import style from "./style";
import { colors } from "../../../../../constants/variables"

export interface ProductType {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  image: string;
  bg_color: string;
}
export interface IProps {
  product: ProductType;
}
export const ProductComponent: React.FC<IProps &
  WithStyles<typeof style>> = props => {
  const { classes, product } = props;
  let productStyle, mask;

  const selectProduct = () => {
    alert('Product Selected')
  };


  if (product.image) {
    productStyle = { backgroundImage: `url(${product.image})`, backgroundSize: 'cover' };
    mask = <div className={classes.mask}></div>
  } else {
    productStyle = { backgroundColor: product.bg_color };
  }

  return (
    <div className={classes.productContainer} style={productStyle} onClick={selectProduct}>
      <Typography variant="body2" className={classes.productName}>{product.name}</Typography>
      {mask}
    </div>
  );
};
const StyledProduct = withStyles(style)(ProductComponent);
export { StyledProduct as Product };
