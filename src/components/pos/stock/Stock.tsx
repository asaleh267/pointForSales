import React from "react";
import { makeStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import { FilterByTabs } from "./filter/filterByTabs/FilterByTabs";
import { Search } from './filter/filterBySearch/Search';
import { Divider } from "@material-ui/core";
import ProductList from "./products/productList/ProductList";
import style from "./style";

export const StockComponent: React.FunctionComponent<
  WithStyles<typeof style>> = props => {
  const { classes } = props;

  return (
    <>
      <FilterByTabs></FilterByTabs>
      <Divider className={classes.divider}></Divider>
      <Search></Search>
      <Divider className={classes.divider}></Divider>
      <ProductList></ProductList>
    </>
  );
}
const StyledStock = withStyles(style)(StockComponent);
export { StyledStock as Stock };
