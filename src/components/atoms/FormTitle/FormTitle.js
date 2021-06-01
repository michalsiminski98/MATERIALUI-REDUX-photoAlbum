import styled from "styled-components";

const Title = styled.h3`
  font-size: 1.7rem;
  margin: 16px 0;
  font-family: arial;
`;
const FormTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

export default FormTitle;
