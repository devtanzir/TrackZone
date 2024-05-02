import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../shared/modal/modal";

const EventEdit = ({ values, clockId, updateEvent }) => {
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(!edit);
  };
  return (
    <>
      <EventButton onClick={() => setEdit(true)}>Edit</EventButton>
      {edit && (
        <Modal
          isEventForm
          handleModal={handleEdit}
          values={values}
          isEdit
          updateEvent={updateEvent}
          clockId={clockId}
        />
      )}
    </>
  );
};

export default EventEdit;

const EventButton = styled.button`
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
