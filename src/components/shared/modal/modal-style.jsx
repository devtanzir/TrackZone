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

  @media (min-width: 640px) {
    width: 500px;
  }
`;
export const ModalSvg = styled.svg`
  margin-left: 425px;
  margin-right: 0;
  fill: #000;
  width: 2.5rem;
  cursor: pointer;
  padding-top: 1.25rem;
`;
