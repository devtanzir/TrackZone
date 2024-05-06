import React, { useEffect, useState } from "react";
import { getOffset, getTimeZone } from "../../../utils/timezone";
import { generateId } from "../../../utils/Id_Generator/GenerateId";
import { TIMEZONE_OFFSET } from "../../../constants/timezone";
import {
  Input,
  InputGroup,
  InputWrapper,
  Label,
  ModalForm,
  ModalFormTitle,
  Option,
  Select,
  SubmitBtn,
} from "../../ui/button/AllFormItem";
import useClockForm from "./hook/useClockForm";

const ClockForm = ({
  values = { title: "", timezone: "UTC", offset: 0 },
  handleClock,
  title = true,
  edit = false,
  handleModal,
  createForm = false,
}) => {
  const { formValues, handleChange, handleSubmit } = useClockForm(
    values,
    handleClock,
    handleModal
  );
  // const [formValues, setFormValues] = useState({ ...values });
  // useEffect(() => {
  //   if (TIMEZONE_OFFSET[formValues.timezone]) {
  //     setFormValues((prev) => ({
  //       ...prev,
  //       offset: TIMEZONE_OFFSET[formValues.timezone],
  //     }));
  //   }
  // }, [formValues.timezone]);
  // const handleChange = (e) => {
  //   let { name, value } = e.target;
  //   if (name === "offset") {
  //     value = +value * 60;
  //   }
  //   setFormValues((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleClock(formValues);
  //   handleModal();
  // };
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
