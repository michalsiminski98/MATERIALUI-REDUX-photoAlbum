import { Grid } from "@material-ui/core";
import styled from "styled-components";

export const StyledGridContainer = styled(Grid)`
  width: 90%;
  margin: 80px 0 0 50%;
  transform: translateX(-50%);
  text-align: center;
`;

export const StyledGridItem = styled(Grid)`
  height: 320px;
  margin-bottom: 8px;
`;

export const Img = styled.img`
  width: calc(100% - 16px);
`;
