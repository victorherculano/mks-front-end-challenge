import { Button, Grid, IconButton } from "@mui/material";
import styled from "styled-components";

export const ShoppingBtn = styled(Button)`
  width: 90px;
  height: 45px;
  border-radius: 8px;
  background-color: white;

  &:hover {
    background-color: white;
  }

  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.94px;
  text-align: left;
  color: #000;
`;

export const Main = styled(Grid)`
  .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 486px;
    height: 100%;
    z-index: 2;
    background-color: #0f52ba;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

    @media (max-width: 500px) {
      width: 100%;
    }
  }
`;

export const Content = styled(Grid)`
  justify-content: center;
  height: 100%;
`;

export const Heading = styled(Grid)`
  justify-content: center;
  height: 50px;

  h1 {
    margin: 20px 0;
    font-family: Montserrat;
    font-size: 27px;
    font-weight: 700;
    line-height: 32.91px;
    text-align: left;
    color: #fff;
  }
`;

export const CloseButton = styled(IconButton)`
  background-color: black;
  width: 38px;
  height: 38px;

  &:hover {
    background-color: black;
  }

  font-family: Montserrat;
  font-size: 20px;
  font-weight: 400;
  line-height: 15px;
  color: white;
`;
export const CloseButton2 = styled(IconButton)`
  position: absolute;
  background-color: black;
  top: -7px;
  right: -7px;
  width: 18px;
  height: 18px;
  z-index: 4;
  &:hover {
    background-color: black;
  }

  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-align: center;
  color: white;
`;

export const ProductSession = styled(Grid)`
  height: 350px;
  overflow-y: auto;
  & {
    scrollbar-width: none;
  }
`;

export const QuantityMenu = styled(Grid)`
  flex-direction: column;

  p {
    font-family: Montserrat;
    font-size: 10px;
    font-weight: 400;
    line-height: 6.1px;
    text-align: left;
    margin: 0px 0px 5px 0px;
  }
`;

export const QuantitySelect = styled(Grid)`
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 19px;
  border-radius: 4px;
  border: 1px solid #bfbfbf;

  .decrease {
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 400;
    line-height: 14.63px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  h2 {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 9.75px;
  }

  .increase {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 9.75px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const Product = styled(Grid)`
  position: relative;
  align-items: center;
  justify-content: flex-start;
  max-width: 375px;
  z-index: 2;
  height: 101px;
  background-color: white;
  border-radius: 8px;
  margin: 10px 10px;
  img {
    width: 70px;
    height: 70px;
    margin: 10px 10px 10px 30px;
  }
`;

export const Name = styled(Grid)`
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  text-align: left;
`;

export const Price = styled(Grid)`
  justify-content: space-evenly;
  align-items: flex-end;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-align: left;
`;

export const TotalPrice = styled(Grid)`
  align-items: center;
  font-family: Montserrat;
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  text-align: left;
  color: #fff;
`;

export const EndBuy = styled(Button)`
  background-color: #000000;
  width: 486px;
  height: 100%;
  @media (max-width: 500px) {
    width: 100%;
  }

  &:hover {
    background-color: #000000;
  }

  font-family: Montserrat;
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  color: white;
`;
