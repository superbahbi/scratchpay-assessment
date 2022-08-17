import React from "react";
import styled from "styled-components";
const StyledIconButton = styled.button<IconButtonProps>`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  svg {
    padding: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    fill: ${(props) => props.color};
  }
`;
interface IconButtonProps {
  color?: string;
  children: React.ReactNode;
  onHandleClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ color, children }) => {
  const onHandleClick = () => {
    console.log("onHandleClick");
  };
  return (
    <StyledIconButton onClick={onHandleClick} color={color}>
      {children}
    </StyledIconButton>
  );
};
export default IconButton;
