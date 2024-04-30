import React, { useState } from "react";
import {
  Input,
  InputGroup,
  InputWrapper,
  Label,
  ModalForm,
  ModalFormTitle,
  SubmitBtn,
} from "../ui/button/AllFormItem";

const EventForm = ({
  values = { title: "", startDate: "", endDate: "" },
  handleEvent,
  handleModal,
  createEvent,
}) => {
  const [events, setEvents] = useState({ ...values });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvents((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEvent(events);
    handleModal();
  };
  return (
    <ModalForm onSubmit={handleSubmit}>
      <ModalFormTitle>
        {createEvent ? "Create Event" : "Edit Event"}
      </ModalFormTitle>
      <InputWrapper>
        <InputGroup>
          <Label htmlFor="title">Enter Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            value={events.title}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="startDate">Enter Start date</Label>
          <Input
            type="date"
            name="startDate"
            id="startDate"
            value={events.startDate}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="endDate">Enter End date</Label>
          <Input
            type="date"
            name="endDate"
            id="endDate"
            value={events.endDate}
            onChange={handleChange}
          />
        </InputGroup>
      </InputWrapper>
      <SubmitBtn type="submit">Create</SubmitBtn>
    </ModalForm>
  );
};

export default EventForm;
