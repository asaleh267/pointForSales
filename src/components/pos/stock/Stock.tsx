import React, { useState } from "react";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import { StockTabs } from "./stockTabs/StockTabs";
import { Search } from "./search/Search";
import  Divider from "@material-ui/core/Divider";
import ProductList from "./products/productList/ProductList";
import style from "./style";
import {
  getProducts,
  getProductsFilteredByCategory,
} from "../../../api/server";
import { Product } from "../../../types/Product";
export interface StockProps {
  selectProduct?: (product: Product) => void;
}
export const StockComponent: React.FunctionComponent<
  StockProps & WithStyles<typeof style>
> = (props) => {
  const { classes, selectProduct } = props;
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const [activeTab, setActiveTab] = useState("all");
  const [searchBy, setSearchBy] = useState("");

  React.useEffect(() => {
    getProductsList();
  }, []);

  const handleTabChangeEvent = (value: string) => {
    setActiveTab(value);
    setSearchBy("");
    if (value === "all") {
      getProductsList();
    } else {
      getFilteredProductList(value);
    }
  };

  const handleSearchChangeEvent = (value: any) => {
    setSearchBy(value);
    if (value) {
      setFilteredData(filterItems(filteredData, value));
    } else {
      if (activeTab !== "all") {
        getFilteredProductList(activeTab);
      } else {
        getProductsList();
      }
    }
  };

  const filterItems = (productList: Product[], query: any) => {
    return productList.filter(
      (product) =>
        product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
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
      <ProductList
        selectProduct={selectProduct}
        list={filteredData}
      ></ProductList>
    </>
  );
};
const StyledStock = withStyles(style)(StockComponent);
export { StyledStock as Stock };
