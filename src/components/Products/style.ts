import { Grid, Skeleton } from "@mui/material";
import styled from "styled-components";

export const Main = styled(Grid)`
  margin: 50px 0 50px;
  justify-content: center;
  align-items: center;
`;
export const Loading = styled(Skeleton)`
  width: 218px;
  height: 285px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: flex-end;
  margin: 10px 10px;
  cursor: default;
`;
