import React, { useState } from "react";
import Button from "../ui/button/button";
import Modal from "../shared/modal/modal";

const ShowEvents = ({ getEventsByClockId, clockId }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <Button onClick={() => setShow(!show)}>Show Event</Button>
      {show && (
        <Modal
          handleShow={handleShow}
          showEvent
          getEventsByClockId={getEventsByClockId}
          clockId={clockId}
        />
      )}
    </>
  );
};

export default ShowEvents;
