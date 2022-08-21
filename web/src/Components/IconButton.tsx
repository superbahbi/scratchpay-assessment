import React from "react";
import styled from "styled-components";
import { IIconButtonProps } from "../Utils/Iterfaces";
const StyledIconButton = styled.div<IIconButtonProps>`
.button {
  padding: 0;
  border: none;
  background-color: ${(props) => props.theme.color.default.border};
  border-radius: 50%;
  margin: 0.2em;
  cursor: pointer;
  svg {
    padding: 0.5rem;
    width: 1rem;
    height: 1rem;
    fill: ${(props) => props.theme.color.primary.midnight100};
    &:hover {
      fill: ${(props) => props.theme.color.default.white};
      background-color: ${(props) => props.color};
      border-radius: 50%;
  }
}
`;
/**
 * Icon Button component
 * @param { number } index - index of user
 * @param { string } color - color of icon button hover
 * @param { React.ReactNode } children - children of icon button
 * @param { () => void } onHandleClick function to handle click event
 */
const IconButton: React.FC<IIconButtonProps> = ({
  index,
  color,
  children,
  onHandleClick,
}) => {
  return (
    <StyledIconButton index={index} color={color}>
      <button role="iconbutton" className="button" onClick={onHandleClick}>
        {children}
      </button>
    </StyledIconButton>
  );
};
export default IconButton;
