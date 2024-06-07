/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CloseButton,
  CloseButton2,
  Content,
  EndBuy,
  Heading,
  Main,
  Name,
  Price,
  Product,
  ProductSession,
  QuantityMenu,
  QuantitySelect,
  ShoppingBtn,
  TotalPrice,
} from "./style";
import { Grid } from "@mui/material";

interface ProductProps {
  cart: any;
  setCart: any;
}

export default function ShoppingCar(props: ProductProps) {
  function decreaseQty(id: number) {
    props.setCart((prevState: any) => {
      const decreaseAmount = prevState.find((item: any) => item.id === id);
      if (decreaseAmount) {
        const updatecart = prevState.map((item: any) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        );
        if (decreaseAmount.qty <= 1) {
          return updatecart.filter((item: any) => item.id !== id);
        }
        return updatecart;
      }
      return prevState;
    });
  }

  function increaseQty(id: number) {
    props.setCart((prevState: any) => {
      const increaseAmount = prevState.find((item: any) => item.id === id);
      if (increaseAmount) {
        return prevState.map((item: any) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      }
    });
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const removeItem = (id: number) => {
    props.setCart((prevState: any) => {
      return prevState.filter((item: any) => item.id !== id);
    });
  };

  console.log(props.cart);

  return (
    <Main>
      <ShoppingBtn onClick={toggleSidebar}>
        <img src="images/shopping-car.svg" alt="shopping-car" />
        &nbsp;
        <p>
          {props.cart.reduce((acc: any, product: any) => {
            return acc + product.qty;
          }, 0)}
        </p>
      </ShoppingBtn>
      <motion.div
        className="sidebar"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Content container>
          <Heading container item xs={10} sm={10} md={10} lg={10}>
            <Grid item xs={7} sm={7} md={7} lg={7}>
              <h1>Carrinho de Compras</h1>
            </Grid>
            <Grid
              container
              item
              xs={5}
              sm={5}
              md={5}
              lg={5}
              justifyContent="flex-end"
              alignItems="center"
            >
              <CloseButton onClick={toggleSidebar}>X</CloseButton>
            </Grid>
          </Heading>
          <ProductSession container item xs={11} sm={10} md={10} lg={10}>
            {props.cart.map((product: any) => {
              return (
                <Product
                  container
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  key={product}
                >
                  <CloseButton2 onClick={() => removeItem(product.id)}>
                    X
                  </CloseButton2>
                  <Grid item xs={4} sm={4} md={4} lg={4}>
                    <img src={product.photo} alt="products" />
                  </Grid>
                  <Name item xs={2} sm={2} md={2} lg={2}>
                    {product.name}
                  </Name>
                  <Price container item xs={6} sm={6} md={6} lg={6}>
                    <QuantityMenu container item xs={5} sm={5} md={5} lg={5}>
                      <p>Qty:</p>
                      <QuantitySelect container>
                        <Grid
                          container
                          xs={8}
                          sm={8}
                          md={8}
                          lg={8}
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Grid item xs={1} sm={1} md={1} lg={1}>
                            <button
                              className="decrease"
                              onClick={() => decreaseQty(product.id)}
                            >
                              -
                            </button>
                          </Grid>
                          <Grid item xs={5} sm={5} md={5} lg={5}>
                            <h2>{product.qty}</h2>
                          </Grid>
                          <Grid item xs={1} sm={1} md={1} lg={1}>
                            <button
                              className="increase"
                              onClick={() => increaseQty(product.id)}
                            >
                              +
                            </button>
                          </Grid>
                        </Grid>
                      </QuantitySelect>
                    </QuantityMenu>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <p>R${product.price}</p>
                    </Grid>
                  </Price>
                </Product>
              );
            })}
          </ProductSession>
          <TotalPrice container item xs={11} sm={10} md={10} lg={10}>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              Total:
            </Grid>

            <Grid
              container
              item
              xs={6}
              sm={6}
              md={6}
              lg={6}
              justifyContent="flex-end"
            >
              R$
              {props.cart.reduce((acc: any, product: any) => {
                return acc + product.qty * product.price;
              }, 0)}
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
