import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

export const StyledSection = styled.section`
  margin-top: 120px;
`;
export const StyledPaper = styled(Paper)`
  width: 25vw;
  margin-left: 50%;
  transform: translateX(-50%);
`;
export const Form = styled(Paper)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
