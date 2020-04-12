import React, { useState, useEffect } from "react";
import { makeStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import { StockTabs } from "./stockTabs/StockTabs";
import { Search } from "./search/Search";
import { Divider } from "@material-ui/core";
import ProductList from "./products/productList/ProductList";
import style from "./style";
import {
  getProducts,
  getProductsFilteredByCategory,
} from "../../../api/server";
import { ProductType } from "../../../types/Product";
export interface IProps {
  selectedProduct?: (product: ProductType) => void;
}
export const StockComponent: React.FunctionComponent<IProps & WithStyles<
  typeof style
>> = (props) => {
  const { classes, selectedProduct } = props;
  const [filteredData, setFilteredData] = useState<ProductType[]>([]);
  const [activeTab, setActiveTab] = useState<any>(0);
  const [activeCategory, setCategory] = useState("");

  const [searchBy, setSearchBy] = useState("");

  React.useEffect(() => {
    getProductsList();
  }, []);

  const handleTabChangeEvent = (category: string, value: any) => {
    setActiveTab(value);
    setSearchBy("");
    if (value === 0) {
      getProductsList();
    } else {
      setCategory(category);
      getFilteredProductList(category);
    }

  };

  const handleSearchChangeEvent = (value: any) => {
    setSearchBy(value);
    if (value) {
      setFilteredData(filterItems(filteredData, value));
    } else {      
      if (activeCategory !== "") {
        getFilteredProductList(activeCategory);
      } else {
        getProductsList();
      }
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
      <StockTabs value={activeTab} onChange={handleTabChangeEvent}></StockTabs>
      <Divider className={classes.divider}></Divider>
      <Search value={searchBy} onChange={handleSearchChangeEvent}></Search>
      <Divider className={classes.divider}></Divider>
      <ProductList selectedProduct={selectedProduct} list={filteredData}></ProductList>
    </>
  );
};
const StyledStock = withStyles(style)(StockComponent);
export { StyledStock as Stock };
