import { Button, Grid } from "@mui/material";
import styled from "styled-components";

export const Main = styled(Grid)`
  height: 101px;
  background-color: #0f52ba;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled(Grid)``;

export const Text = styled(Grid)`
  font-family: "Montserrat", sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 19px;
  text-align: left;
  color: white;

  span {
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 300;
    line-height: 19px;
    text-align: left;
    color: white;
  }
`;
