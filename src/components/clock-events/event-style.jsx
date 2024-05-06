import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  gap: 17px;
  max-height: 600px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const EventTitle = styled.h3`
  font-size: 26px;
  text-transform: capitalize;
  margin-bottom: 5px;
`;
export const ItemDiv = styled.div`
  background: #f7f7f7;
  border-radius: 7px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f1f2f6;
  }
`;
export const P = styled.p`
  font-size: 15px;
  margin-bottom: 5px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  color: #888585;
`;
export const EventButton = styled.button`
  color: #fff;
  padding: 6px 10px;
  font-size: 13px;
  font-weight: 400;
  background-color: rgb(28, 34, 43);
  border-radius: 5px;
  border: none;
  outline: none;
  border: 2px solid transparent;
  cursor: pointer;
  &:hover {
    background: transparent;
    border: 2px solid black;
    color: black;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const Finish = styled.p`
  margin-bottom: 5px;
  color: #78e08f;
`;
export const End = styled.p`
  margin-bottom: 5px;
  color: #eb2f06;
`;
export const Start = styled.p`
  margin-bottom: 5px;
  color: #f6b93b;
`;
