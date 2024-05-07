import styled from "styled-components";

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: absolute;
  width: 18rem;
  align-items: center;
  justify-content: center;
`;
export const BoxOutside = styled.div`
  z-index: 100;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  transition-duration: 100ms;
`;
export const BoxInside = styled.div`
  width: 322px;
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 11px;
`;
export const H6 = styled.h6`
  text-align: center;
  font-size: 1.875rem;
  font-weight: 500;
`;
export const ButtonWrap = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const TrueBtn = styled.button`
  border-radius: 0.375rem;
  border: 2px solid #42ba00;
  background-color: #42ba00;
  cursor: pointer;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #fff;
  &:hover {
    color: #42ba00;
    background-color: #fff;
  }
`;
export const FalseBtn = styled.button`
  border-radius: 0.375rem;
  border: 2px solid #ff0000;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #ff0000;
  background-color: white;
  outline: none;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #ff0000;
  }
`;
export const Svg = styled.svg`
  width: 4rem;
  stroke: #ff0000;
`;
