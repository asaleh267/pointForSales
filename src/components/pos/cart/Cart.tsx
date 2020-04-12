import React, { useState, useEffect } from "react";
import { WithStyles, withStyles, Grid, Divider } from "@material-ui/core";
import styles from "./styles";
import { Client } from "./client/Client";
import BarcodeScanner from "./barcodeScanner";
import CartTable from "./cartTable";
import { ProductType } from "../../../types/Product";
import { CartTabs } from "./cartTabs/CartTabs";

export interface IProps {
  product?: ProductType;
}

// Component
export const CartComponent: React.FunctionComponent<
  IProps & WithStyles<typeof styles>
> = ({ classes, product }) => {
  const [cartList, setCartList] = useState<ProductType[]>([]);
  const [showConfirmDeleteDialog, setConfirmDialog] = useState(false);

  const handleBarcodeChange = (product: ProductType) => {
    addProductToCart(product);
  };

  useEffect(() => {
    if (product) {
      addProductToCart(product);
    }
  }, [product]);

  const addProductToCart = (product: any) => {
    let productIndex = cartList.findIndex(
      (element) => element.id === product.id
    );
    if (productIndex === -1) {
      setCartList([...cartList, product]);
    } else {
      let newArray = [...cartList];
      newArray[productIndex].quantity = ++newArray[productIndex].quantity;
      setCartList([...newArray]);
    }
  };

  const handleDeleteItem = (productID: number) => {
    let productIndex = cartList.findIndex(
      (element) => element.id === productID
    );
    let array = [...cartList];
    array[productIndex].quantity = 1;
    array.splice(productIndex, 1);
    setCartList([...array]);
  };

  const handleQuantityChange = (productID: number, quantity: number) => {
    let productIndex = cartList.findIndex(
      (element) => element.id === productID
    );
    let array = [...cartList];
    array[productIndex].quantity = quantity;
    setCartList([...array]);
  };

  return (
    <Grid className={classes.cartContainer}>
      <CartTabs value={1}></CartTabs>
      <Divider className={classes.divider}></Divider>
      <Client></Client>
      <BarcodeScanner onChangeBarcode={handleBarcodeChange}></BarcodeScanner>
      <CartTable
        deleteItem={handleDeleteItem}
        data={cartList}
        changeQuantity={handleQuantityChange}
      ></CartTable>
    </Grid>
  );
};

const StyledCart = withStyles(styles)(CartComponent);
export { StyledCart as Cart };
