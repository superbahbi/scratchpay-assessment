import React from "react";
import styled from "styled-components";
import { IButtonProps } from "../Utils/Iterfaces";

const StyledButton = styled.div<IButtonProps>`
  display: flex;
  .button {
    display: flex;
    font-family: "Hero", sans-serif;
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
      height: 1rem;
      width: 1rem;
      padding-right: 0.2rem;
    }
  }
`;
/**
 * Button component
 * @param onHandleClick function to handle click event
 * @param children React node to render inside the button
 * @param type "button" | "submit" | "reset";
 * @param disabled true | false;
 */
const Button: React.FC<IButtonProps> = ({
  onHandleClick,
  children,
  type,
  disabled,
  role,
}) => {
  return (
    <StyledButton disabled>
      <button
        role={role}
        className="button"
        type={type}
        onClick={onHandleClick}
        disabled={disabled}
      >
        {children}
      </button>
    </StyledButton>
  );
};
export default Button;
