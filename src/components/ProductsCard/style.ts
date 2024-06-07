import { Button, Grid } from "@mui/material";
import styled from "styled-components";

export const Card = styled(Grid)`
  width: 218px;
  height: 285px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: flex-end;
  margin: 10px 10px;
  cursor: default;
`;

export const ImageContainer = styled(Grid)`
  text-align: center;

  img {
    width: 130px;
    height: 130px;
  }
`;
export const Name = styled(Grid)`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
`;

export const Price = styled(Grid)`
  width: 64px;
  height: 26px;
  border-radius: 5px;
  background-color: black;
  justify-content: center;
  align-items: center;

  p {
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    text-align: left;
    color: white;
  }
`;
export const Description = styled(Grid)`
  max-width: 100%;
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
  text-align: left;
  color: #2c2c2c;
`;

export const BuyButton = styled(Button)`
  transition: 0.5s;

  background-color: #0f52ba;
  width: 218px;
  height: 31.91px;
  border-radius: 0px 0px 8px 8px;

  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  text-align: left;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: #0f52ba;
  }

  img {
    margin-right: 10px;
  }
`;
