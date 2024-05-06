import React, { useState } from "react";
import Button from "../ui/button/button";
import Modal from "../shared/modal/modal";
import useEventEdit from "./Hook/useEventEdit";

const ShowEvents = ({
  getEventsByClockId,
  updateEvent,
  clockId,
  deleteEvent,
  deleteAllEvent,
}) => {
  const { state, handleState } = useEventEdit();

  return (
    <>
      <Button onClick={handleState}>Show Event</Button>
      {state && (
        <Modal
          handleShow={handleState}
          showEvent
          getEventsByClockId={getEventsByClockId}
          clockId={clockId}
          deleteEvent={deleteEvent}
          updateEvent={updateEvent}
          deleteAllEvent={deleteAllEvent}
        />
      )}
    </>
  );
};

export default ShowEvents;
