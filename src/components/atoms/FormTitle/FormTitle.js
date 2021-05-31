import styled from "styled-components";

const FormTitle = ({ title }) => {
  const FormTitle = styled.h3`
    font-size: 1.7rem;
    margin: 16px 0;
    font-family: arial;
  `;

  return <FormTitle>{title}</FormTitle>;
};

export default FormTitle;
