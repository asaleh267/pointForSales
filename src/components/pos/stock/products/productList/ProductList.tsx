import * as React from "react";
import { WithStyles, withStyles, Grid } from "@material-ui/core";
import { ProductType } from "./../product/Product";
import styles from "./styles";
import { Product } from "../product/Product";

export interface IProps {
  list: any;
}
// Component
export const ProductList: React.FunctionComponent<IProps &
  WithStyles<typeof styles>> = props => {
  const { classes, list } = props;
  return (
    <Grid container xs={12}>
      {list.map((element: ProductType, index:number) => (
        <Grid item xs={2} className={classes.productContainer}>
          <Product key={index} product={element}></Product>
        </Grid>
      ))}
    </Grid>
  );
};

export default withStyles(styles)(ProductList);
