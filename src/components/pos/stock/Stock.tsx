import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FilterByTabs from "./filter/FilterByTabs";
import SearchBar from "./filter/SearchBar";
import { Divider } from "@material-ui/core";
import ProductList from "./products/ProductList";

const useStyles = makeStyles(theme => ({
  divider: {
    margin: 8
  }
}));

export default function Stock() {
  const classes = useStyles();

  return (
    <>
      <FilterByTabs></FilterByTabs>
      <Divider className={classes.divider}></Divider>
      <SearchBar></SearchBar>
      <Divider className={classes.divider}></Divider>
      <ProductList></ProductList>
    </>
  );
}
