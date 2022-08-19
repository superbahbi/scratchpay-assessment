import React from "react";
import styled from "styled-components";
import { IButtonProps } from "../Utils/Iterfaces";

const StyledButton = styled.div`
  display: flex;
  .button {
    display: flex;
    align-items: flex-end;
    font-family: "Hero", sans-serif;
    font-size: 1rem;
    background-color: ${(props) => props.theme.color.primary.midnight50};
    color: ${(props) => props.theme.color.default.white};

    border-radius: 9999em;
    padding: 0.5em 1.5em;
    border: none;
    &:hover {
      opacity: 0.9;
    }
    svg {
      fill: ${(props) => props.theme.color.default.white};
    }
  }
`;

const Button: React.FC<IButtonProps> = ({ onHandleClick, children, type }) => {
  return (
    <StyledButton>
      <button className="button" type={type} onClick={onHandleClick}>
        {children}
      </button>
    </StyledButton>
  );
};
export default Button;
