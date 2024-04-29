import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getOffset, getTimeZone } from "../../../utils/timezone";
import { generateId } from "../../../utils/Id_Generator/GenerateId";
import { TIMEZONE_OFFSET } from "../../../constants/timezone";

const ClockForm = ({
  values = { title: "", timezone: "UTC", offset: 0 },
  handleClock,
  title = true,
  edit = false,
  handleModal,
  createForm = false,
}) => {
  const [formValues, setFormValues] = useState({ ...values });
  useEffect(() => {
    if (TIMEZONE_OFFSET[formValues.timezone]) {
      setFormValues((prev) => ({
        ...prev,
        offset: TIMEZONE_OFFSET[formValues.timezone],
      }));
    }
  }, [formValues.timezone]);
  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "offset") {
      value = +value * 60;
    }
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClock(formValues);
    handleModal();
  };
  return (
    <ModalForm onSubmit={handleSubmit}>
      <ModalFormTitle>
        {createForm ? "Create a New Clock" : "Edit Clock"}
      </ModalFormTitle>
      <InputWrapper>
        <InputGroup>
          <Label htmlFor="title">Enter Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            value={formValues.title}
            onChange={handleChange}
            disabled={!title}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="timezone">Enter Timezone : </label>
          <Select
            onChange={handleChange}
            name="timezone"
            id="timezone"
            value={formValues.timezone}
          >
            {getTimeZone().map((timezone) => {
              return (
                <Option key={generateId()} value={timezone}>
                  {timezone}
                </Option>
              );
            })}
          </Select>
        </InputGroup>
        {(formValues.timezone === "GMT" || formValues.timezone === "UTC") && (
          <InputGroup>
            <label htmlFor="offset">Enter Offset : </label>
            <Select
              onChange={handleChange}
              id="offset"
              name="offset"
              value={formValues.offset / 60}
            >
              {getOffset().map((offset) => {
                return (
                  <option key={offset} value={offset}>
                    {offset}
                  </option>
                );
              })}
            </Select>
          </InputGroup>
        )}
      </InputWrapper>
      <SubmitBtn>{edit ? "Update" : "Create"}</SubmitBtn>
    </ModalForm>
  );
};

export default ClockForm;

const ModalForm = styled.form`
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-bottom: 1.25rem;

  @media (min-width: 1024px) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    padding-bottom: 2.5rem;
  }
`;
const ModalFormTitle = styled.h2`
  padding-bottom: 2rem;
  font-size: 2.25rem;
  line-height: 2.5rem;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;
const Label = styled.label`
  display: block;
  margin-bottom: 6px;
`;
const InputGroup = styled.div`
  position: relative;
`;
const Input = styled.input`
  display: block;
  padding: 0.75rem;
  border-radius: 0.5rem;
  outline-style: none;
  font-size: 18px;
  width: 100%;
  background-color: #ffffff;
  filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04))
    drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1));
`;
const SubmitBtn = styled.button`
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
const Select = styled.select`
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
const Option = styled.option`
  background-color: #dfe4ea;
`;
