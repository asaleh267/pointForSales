import React, {useState, useEffect} from "react";
import { makeStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import { FilterByTabs } from "./filter/filterByTabs/FilterByTabs";
import { Search } from './filter/filterBySearch/Search';
import { Divider } from "@material-ui/core";
import ProductList from "./products/productList/ProductList";
import style from "./style";
import { getProducts } from "../../../api/server";

export const StockComponent: React.FunctionComponent<
  WithStyles<typeof style>> = props => {
  const { classes } = props;
  const [filteredData, setFilteredData] = useState([]);

  React.useEffect(() => {
    getProducts().then((res: { data: any }) => {
      let products = res.data;
      setFilteredData(Object.values(products));
    });
  }, []);

  return (
    <>
      <FilterByTabs ></FilterByTabs>
      <Divider className={classes.divider}></Divider>
      <Search></Search>
      <Divider className={classes.divider}></Divider>
      <ProductList list={filteredData}></ProductList>
    </>
  );
}
const StyledStock = withStyles(style)(StockComponent);
export { StyledStock as Stock };
