/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CloseButton,
  Content,
  EndBuy,
  Heading,
  Main,
  Name,
  Price,
  Product,
  ProductSession,
  ShoppingBtn,
  TotalPrice,
} from "./style";
import { Grid } from "@mui/material";

interface ProductProps {
  cart: any;
  setCart: any;
}

export default function ShoppingCar(props: ProductProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  console.log(props.cart);

  return (
    <Main>
      <ShoppingBtn onClick={toggleSidebar}>
        <img src="images/shopping-car.svg" alt="shopping-car" />
        &nbsp;
        <p>0</p>
      </ShoppingBtn>
      <motion.div
        className="sidebar"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Content container>
          <Heading container item lg={10}>
            <Grid item lg={7}>
              <h1>Carrinho de Compras</h1>
            </Grid>
            <Grid
              container
              item
              lg={5}
              justifyContent="flex-end"
              alignItems="center"
            >
              <CloseButton onClick={toggleSidebar}>X</CloseButton>
            </Grid>
          </Heading>
          <ProductSession container item lg={10}>
            {props.cart.map((product) => {
              return (
                <Product container item lg={12} key={product}>
                  <Grid item lg={4}>
                    <img src={product.photo} alt="products" />
                  </Grid>
                  <Name item lg={4}>
                    {product.name}
                  </Name>
                  <Price container item lg={4}>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      max="5"
                    />
                    <p>{product.price}</p>
                  </Price>
                </Product>
              );
            })}
          </ProductSession>
          <TotalPrice container item lg={10}>
            <Grid item lg={6}>
              Total:
            </Grid>
            <Grid container item lg={6} justifyContent="flex-end">
              R$600.00
            </Grid>
          </TotalPrice>
          <motion.div whileTap={{ scale: 0.8 }}>
            <EndBuy>FINALIZAR COMPRA</EndBuy>
          </motion.div>
        </Content>
      </motion.div>
    </Main>
  );
}
