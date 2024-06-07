/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  BuyButton,
  Card,
  Description,
  ImageContainer,
  Name,
  Price,
} from "./style";
import { motion } from "framer-motion";

interface CardProps {
  id: number;
  photo: string;
  name: string;
  price: string;
  description: string;
  setCart: any;
}

export default function ProductCard(props: CardProps) {
  function addToCart(id: number, photo: string, name: string, price: string) {
    props.setCart((prevState: any) => [
      ...prevState,
      {
        id,
        photo,
        name,
        price,
        qty: 1,
      },
    ]);
  }
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Card container>
        <ImageContainer item xs={12} sm={12} md={12} lg={12}>
          <img src={props.photo} alt="products" />
        </ImageContainer>
        <Name item xs={6} sm={6} md={6} lg={6}>
          {props.name}
        </Name>
        <Price container item xs={5} sm={5} md={5} lg={5}>
          <p>R${props.price}</p>
        </Price>
        <Description container item xs={11} sm={11} md={11} lg={11}>
          {props.description}
        </Description>
        <motion.div whileTap={{ scale: 0.8 }}>
          <BuyButton
            onClick={() =>
              addToCart(props.id, props.photo, props.name, props.price)
            }
          >
            <img src="images/shopping-bag.svg" alt="shopping-bag" />
            COMPRAR
          </BuyButton>
        </motion.div>
      </Card>
    </motion.div>
  );
}
