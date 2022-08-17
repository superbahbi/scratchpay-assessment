import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.color.primary.midnight50};
  color: ${(props) => props.theme.color.default.white};
  font-size: 1rem;
  border-radius: 0.5em;
  padding: 0.5em 1em;
  margin: 0.5em 0;
  border: none;
  &:hover {
    opacity: 0.9;
  }
`;

interface ButtonProps {}

const Button: React.FC<ButtonProps> = () => {
  return <StyledButton>Add New User</StyledButton>;
};
export default Button;
