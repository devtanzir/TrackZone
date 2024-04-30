import React, { useState } from "react";
import ClockForm from "../clock-form";
import Button from "../../ui/button/button";
import styled from "styled-components";
import Modal from "../modal/modal";
const ClockActions = ({
  local = false,
  clock,
  updateClock,
  createClock,
  deleteClock,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  const handleModal = () => {
    setIsCreate(!isCreate);
  };
  const handleEditModal = () => {
    setIsEdit(!isEdit);
  };

  const handleClock = (values) => {
    createClock(values);
  };
  return (
    <ButtonWrapper>
      <Button onClick={() => setIsEdit(!isEdit)}>Edit</Button>
      {local ? (
        <Button onClick={() => setIsCreate((prev) => !prev)}>Create</Button>
      ) : (
        <Button onClick={() => deleteClock(clock.id)}>Delete</Button>
      )}
      {isEdit && (
        <>
          <Modal
            handleModal={handleEditModal}
            handleClock={updateClock}
            values={clock}
            title={!local}
            edit={true}
          />
        </>
      )}
      {isCreate && (
        <Modal handleModal={handleModal} createForm handleClock={handleClock} />
      )}
    </ButtonWrapper>
  );
};

export default ClockActions;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 3px;
  justify-content: space-between;
  margin: 10px 0;
`;
