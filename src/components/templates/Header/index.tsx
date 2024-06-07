/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Logo, Main, Text } from "./style";
import { Grid } from "@mui/material";
import ShoppingCar from "@/components/shopping-menu";

interface ProductProps {
  cart: any;
  setCart: any;
}

export default function Header(props: ProductProps) {
  return (
    <Main container>
      <Logo container item xs={5} sm={5} md={5} lg={5.5}>
        <Text>
          MKS <span>Sistemas</span>
        </Text>
      </Logo>
      <Grid
        container
        item
        xs={5}
        sm={5}
        md={5}
        lg={5.5}
        justifyContent="flex-end"
      >
        <ShoppingCar cart={props.cart} setCart={props.setCart} />
      </Grid>
    </Main>
  );
}
