import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Loading, Main } from "./style";
import ProductCard from "../ProductsCard";
import { Grid, Skeleton } from "@mui/material";
import { todo } from "node:test";

interface ProductsProps {
  setCart: any;
}

export default function Products(props: ProductsProps) {
  const { data, isLoading, error } = useQuery(
    "todos",
    () => {
      return axios
        .get(
          "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"
        )
        .then((response) => response.data.products);
    },
    {
      retry: 5,
      refetchOnWindowFocus: true,
    }
  );

  if (isLoading) {
    return <Loading animation="wave" />;
  }

  if (error) {
    return <div>Algo deu errado</div>;
  }

  return (
    <Main container>
      <Grid
        item
        container
        xs={12}
        sm={12}
        md={11}
        lg={10}
        justifyContent="center"
      >
        {data.map((todo: any) => (
          <ProductCard
            id={todo.id}
            key={todo}
            name={todo.name}
            photo={todo.photo}
            price={todo.price}
            description={todo.description}
            setCart={props.setCart}
          />
        ))}
      </Grid>
    </Main>
  );
}
