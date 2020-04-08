import React, { useState, useEffect } from "react";
import { makeStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import { Tabs } from "./tabs/Tabs";
import { Search } from "./search/Search";
import { Divider } from "@material-ui/core";
import ProductList from "./products/productList/ProductList";
import style from "./style";
import {
  getProducts,
  getProductsFilteredByCategory,
} from "../../../api/server";
import { ProductType } from "./products/product/Product";

export const StockComponent: React.FunctionComponent<WithStyles<
  typeof style
>> = (props) => {
  const { classes } = props;
  const [filteredData, setFilteredData] = useState<ProductType[]>([]);
  const [activeTab, setActiveTab] = useState(false);
  const [activeCategory, setCategory] = useState("");

  const [searchBy, setSearchBy] = useState("");

  React.useEffect(() => {
    getProductsList();
  }, []);

  const handleTabChangeEvent = (category: string, value: any) => {
    setActiveTab(value);
    setCategory(category);
    setSearchBy("");
    getFilteredProductList(category);
  };

  const handleSearchChangeEvent = (value: any) => {
    setSearchBy(value);
    if (value) {
      setFilteredData(filterItems(filteredData, value));
    } else {
      getFilteredProductList(activeCategory);
    }
  };

  const filterItems = (arr: ProductType[], query: any) => {
    return arr.filter(
      (el) => el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  };

  const getProductsList = () => {
    getProducts().then((res: { data: any }) => {
      const products = res.data;
      setFilteredData(Object.values(products));
    });
  };

  const getFilteredProductList = (category: string) => {
    getProductsFilteredByCategory(category).then((res: { data: any }) => {
      const products = res.data;
      setFilteredData(Object.values(products));
    });
  };
  return (
    <>
      <Tabs value={activeTab} onChange={handleTabChangeEvent}></Tabs>
      <Divider className={classes.divider}></Divider>
      <Search value={searchBy} onChange={handleSearchChangeEvent}></Search>
      <Divider></Divider>
      <ProductList list={filteredData}></ProductList>
    </>
  );
};
const StyledStock = withStyles(style)(StockComponent);
export { StyledStock as Stock };
