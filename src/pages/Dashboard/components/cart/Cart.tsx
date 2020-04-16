import React, { useState, useEffect } from "react";
import { WithStyles, withStyles, Grid, Divider } from "@material-ui/core";
import styles from "./styles";
import { Client } from "./client/Client";
import BarcodeScanner from "./barcodeScanner";
import CartTable from "./cartTable";
import { Product } from "../../../../types/Product";
import { CartTabs } from "./cartTabs/CartTabs";

export interface CartProps {
  product?: Product;
}

// Component
export const CartComponent: React.FunctionComponent<
CartProps & WithStyles<typeof styles>
> = ({ classes, product }) => {
  const [cartList, setCartList] = useState<Product[]>([]);
  const [client, setClient] = useState<string>("Walk of customer");

  const handleBarcodeChange = (product: Product) => {
    addProductToCart(product);
  };

  useEffect(() => {
    let activeSession = localStorage.getItem("activeSession");
    let sessionCartsData = localStorage.getItem("sessionsCarts");
    if (sessionCartsData) {
      let sessionCarts = JSON.parse(sessionCartsData);
      let sessionIndex = sessionCarts.findIndex(
        (element: any) => element.sessionID === activeSession
      );
      if (sessionIndex !== -1) {
        setCartList(sessionCarts[sessionIndex].cartListData);
      } else {
        setCartList([]);
      }
    }
  }, []);

  useEffect(() => {
    if (product) {
      addProductToCart(product);
    }
  }, [product]);

  useEffect(() => {
    if (cartList.length > 0) {
      let activeSession = localStorage.getItem("activeSession");
      let sessionCartsData = localStorage.getItem("sessionsCarts");
      if (!sessionCartsData) {
        let sessionsCarts = [
          { sessionID: activeSession, cartListData: cartList },
        ];
        localStorage.setItem("sessionsCarts", JSON.stringify(sessionsCarts));
      } else {
        let sessionCarts = JSON.parse(sessionCartsData);
        let sessionIndex = sessionCarts.findIndex(
          (element: any) => element.sessionID === activeSession
        );
        if (sessionIndex !== -1) {
          sessionCarts[sessionIndex].cartListData = cartList;
          localStorage.setItem("sessionsCarts", JSON.stringify(sessionCarts));
        } else {
          let sessionsCarts = {
            sessionID: activeSession,
            cartListData: cartList,
          };
          sessionCarts.push(sessionsCarts);
          localStorage.setItem("sessionsCarts", JSON.stringify(sessionCarts));
        }
      }
    }
  }, [cartList]);

  const addProductToCart = (product: Product) => {
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

  const handleTabChange = (value: string) => {
    let activeSession = localStorage.getItem("activeSession");
    let sessionCartsData = localStorage.getItem("sessionsCarts");
    if (sessionCartsData) {
      let sessionCarts = JSON.parse(sessionCartsData);
      let sessionIndex = sessionCarts.findIndex(
        (element: any) => element.sessionID === activeSession
      );
      if (sessionIndex !== -1) {
        setCartList(sessionCarts[sessionIndex].cartListData);
      } else {
        setCartList([]);
      }
    }
  };

  const handleOnAdd = () => {
    setCartList([]);
  };

  const handleChangeCustomer = (value: string) => {
    setClient(value);
  };

 
  return (
    <Grid container direction="column">
      <CartTabs onChange={handleTabChange} onAdd={handleOnAdd}></CartTabs>
      <Divider className={classes.divider}></Divider>
      <Client onChange={handleChangeCustomer}></Client>
      <BarcodeScanner onChangeBarcode={handleBarcodeChange}></BarcodeScanner>
      <CartTable
        deleteItem={handleDeleteItem}
        data={cartList}
        changeQuantity={handleQuantityChange}
        client={client}
      ></CartTable>
    </Grid>
  );
};

const StyledCart = withStyles(styles)(CartComponent);
export { StyledCart as Cart };
