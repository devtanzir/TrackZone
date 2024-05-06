import React, { useState } from "react";
import {
  Input,
  InputGroup,
  InputWrapper,
  Label,
  ModalForm,
  ModalFormTitle,
  SubmitBtn,
  TextArea,
} from "../ui/button/AllFormItem";
import useEventForm from "./Hook/useEventForm";

const EventForm = ({
  values = { title: "", des: "", startDate: "", endDate: "" },
  handleEvent,
  isEdit,
  handleModal,
  createEvent,
  updateEvent,
  clockId,
}) => {
  const { events, handleChange, handleSubmit } = useEventForm(
    values,
    handleEvent,
    isEdit,
    handleModal,
    updateEvent,
    clockId
  );
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
          <Label htmlFor="des">Event Details</Label>
          <TextArea
            name="des"
            id="des"
            value={events.des}
            onChange={handleChange}
          ></TextArea>
        </InputGroup>
        <InputGroup>
          <Label htmlFor="startDate">Enter Start date</Label>
          <Input
            type="datetime-local"
            name="startDate"
            id="startDate"
            value={events.startDate}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="endDate">Enter End date</Label>
          <Input
            type="datetime-local"
            name="endDate"
            id="endDate"
            value={events.endDate}
            onChange={handleChange}
          />
        </InputGroup>
      </InputWrapper>
      <SubmitBtn type="submit">{isEdit ? "Update" : "Create"}</SubmitBtn>
    </ModalForm>
  );
};

export default EventForm;
