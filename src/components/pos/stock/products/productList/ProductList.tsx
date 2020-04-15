import * as React from "react";
import { WithStyles, withStyles, Grid, Divider } from "@material-ui/core";
import { Product } from "../../../../../types/Product";
import styles from "./styles";
import { ProductItem } from "../productItem/ProductItem";

export interface IProps {
  list: any;
  selectedProduct?: (product: Product) => void;
}
// Component
export const ProductList: React.FunctionComponent<
  IProps & WithStyles<typeof styles>
> = (props) => {
  const { classes, list } = props;
  return (
    <Grid container>
      {list.map((element: Product, index: number) => (
        element.instock > 0 &&  
          <Grid key={index} item xs={2} className={classes.productContainer}>
          <ProductItem {...props} product={element}></ProductItem>
        </Grid>

      ))}
    </Grid>
  );
};

export default withStyles(styles)(ProductList);
