import * as React from "react";
import { WithStyles, withStyles, Grid, Divider } from "@material-ui/core";
import { ProductType } from "../../../../../types/Product";
import styles from "./styles";
import { Product } from "../product/Product";

export interface IProps {
  list: any;
  selectedProduct?: (product: ProductType) => void;
}
// Component
export const ProductList: React.FunctionComponent<
  IProps & WithStyles<typeof styles>
> = (props) => {
  const { classes, list } = props;
  return (
    <Grid container>
      {list.map((element: ProductType, index: number) => (
        element.instock > 0 &&  
          <Grid key={index} item xs={2} className={classes.productContainer}>
          <Product {...props} product={element}></Product>
        </Grid>

      ))}
    </Grid>
  );
};

export default withStyles(styles)(ProductList);
