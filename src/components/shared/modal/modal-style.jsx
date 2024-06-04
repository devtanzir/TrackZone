import styled from "styled-components";
export const ModalBody = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition-duration: 100ms;
  background-color: #ffffffbf;
`;
export const ModalInner = styled.div`
  position: absolute;
  border-radius: 0.5rem;
  width: 100%;
  background-color: #ffffff;
  filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15));
  padding: 20px;
  max-height: 500px;
  &::-webkit-scrollbar {
    width: 7px;
    display: block;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ced0d4;
    border-radius: 5px;
    cursor: pointer;
    visibility: hidden;
  }
  &::-webkit-scrollbar-thumb {
    visibility: visible;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-button {
    display: none;
  }
  overflow-y: scroll;
  @media (min-width: 640px) {
    width: 500px;
  }
`;
export const ModalSvg = styled.svg`
  fill: #000;
  width: 2.5rem;
  cursor: pointer;
  position: absolute;
  right: 0px;
  margin-right: 12px;
`;
