import styled from "styled-components";

export const Input = styled.input`
  display: block;
  padding: 0.75rem;
  border-radius: 0.5rem;
  outline: none;
  font-size: 18px;
  border: ${({ error }) => (error ? "2px solid #ff0000" : "2px solid #000")};
  width: 100%;
  background-color: #ffffff;
  filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04))
    drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1));
  &:focus {
    border: 2px solid #535c68;
  }
`;
export const TextArea = styled.textarea`
  height: 90px;
  padding: 0.75rem;
  border-radius: 0.5rem;
  resize: none;
  border: 2px solid;
  outline: none;
  font-size: 18px;
  width: 100%;
  background-color: #ffffff;
  filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04))
    drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1));
`;

export const ModalForm = styled.form`
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-bottom: 1.25rem;

  @media (min-width: 1024px) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    padding-bottom: 2.5rem;
  }
`;
export const ModalFormTitle = styled.h2`
  padding-bottom: 2rem;
  font-size: 2.25rem;
  line-height: 2.5rem;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;
export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
`;
export const InputGroup = styled.div`
  position: relative;
`;

export const SubmitBtn = styled.button`
  position: relative;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin-top: 1.5rem;
  border-radius: 0.5rem;
  background-color: #ffffff;
  border: none;
  outline: none;
  font-size: 17px;
  cursor: pointer;
  filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04))
    drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1));

  &:hover {
    background-color: #d1d5db;
  }
`;
export const Select = styled.select`
  width: 96px;
  padding: 7px;
  padding-right: 0;
  background-color: #dfe4ea3b;
  border-radius: 6px;
  font-size: 19px;
  cursor: pointer;
  &:hover {
    background-color: #dfe4ea;
  }
`;
export const Option = styled.option`
  background-color: #dfe4ea;
`;
export const Error = styled.div`
  font-size: 1rem;
  color: red;
  margin-top: 7px;
`;
