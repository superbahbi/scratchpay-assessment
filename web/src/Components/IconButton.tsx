import React from "react";
import styled from "styled-components";
import { IIconButtonProps } from "../Utils/Iterfaces";
const StyledIconButton = styled.button<IIconButtonProps>`
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
`;

const IconButton: React.FC<IIconButtonProps> = ({
  index,
  color,
  children,
  onHandleClick,
}) => {
  return (
    <StyledIconButton index={index} onClick={onHandleClick} color={color}>
      {children}
    </StyledIconButton>
  );
};
export default IconButton;
