import { useState } from "react";
import styled from "styled-components";

const BasicSelect = ({ options, label, value, name, handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  // array of options
  //   const options = ["Apple", "banana", "chips"];

  return (
    <Boss>
      <label htmlFor={name}>{label}</label>
      {/* dropdown - btn */}
      <DropdownButtonWrapper id={name} onClick={() => setIsOpen(!isOpen)}>
        <ButtonText>{selectedValue}</ButtonText>
        <Svg
          $isOpen={isOpen}
          width={25}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M7 10L12 15L17 10"
              stroke="#4B5563"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </Svg>
      </DropdownButtonWrapper>
      {/* dropdown - options  */}
      <OptionWrapper $isOpen={isOpen}>
        {options?.map((option, idx) => (
          <Option
            key={idx}
            onClick={(e) => {
              setSelectedValue(e.target.textContent);
              setIsOpen(false);
              handleChange({ target: { name, value: option } });
            }}
          >
            {option}
          </Option>
        ))}
      </OptionWrapper>
    </Boss>
  );
};
export default BasicSelect;

const Boss = styled.div`
  position: relative;
`;
const DropdownButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.5rem;
  background-color: #ffffff;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border: 2px solid #000000;
`;
const ButtonText = styled.h1`
  font-weight: 500;
  font-size: 18px;
  color: black;
  font-family: "Poppins", sans-serif;
`;

const Svg = styled.svg`
  transition: transform 0.3s;
  transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;
const OptionWrapper = styled.div`
  position: absolute;
  margin: 1rem auto;
  width: 80%;
  height: 76px;
  border-radius: 0.5rem;
  background-color: #fff;
  padding: 1rem;
  border: 1px solid;
  transition: top 0.3s, opacity 0.3s;
  z-index: 9;
  transform: translateX(73px);
  overflow-y: scroll;
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  top: ${(props) => (props.$isOpen ? "55px" : "-1rem")};
  opacity: ${(props) => (props.$isOpen ? "100" : "0")};
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
`;
const Option = styled.div`
  padding: 0.75rem 1.5rem;
  font-family: "Poppins", sans-serif;
  color: #718096;
  &:hover {
    background-color: #f7fafc;
  }
`;
