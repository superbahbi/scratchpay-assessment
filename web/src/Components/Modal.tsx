import React from "react";
import styled from "styled-components";
import { IModalProps } from "../Utils/Iterfaces";

const StyledModal = styled.div`
  .modal {
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .modal-content {
    background-color: ${(props) => props.theme.color.default.white};
    margin: auto;
    padding: 20px;
    border: 1px solid ${(props) => props.theme.color.default.border};
    border-radius: 1rem;
    width: 30%;
  }
  .close {
    color: ${(props) => props.theme.color.primary.midnight50};
    background-color: ${(props) => props.theme.color.default.border};
    float: right;
    padding: 0 0.5rem;
    border-radius: 50%;
    font-size: 1.5rem;
  }
  .close:hover,
  .close:focus {
    opacity: 0.9;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Modal: React.FC<IModalProps> = ({ show, close, children }) => {
  return (
    <>
      {show ? (
        <StyledModal>
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={close}>
                &times;
              </span>
              {children}
            </div>
          </div>
        </StyledModal>
      ) : null}
    </>
  );
};
export default Modal;
