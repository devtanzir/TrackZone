import React, { useState } from "react";
import Button from "../ui/button/button";
import Modal from "../shared/modal/modal";

const CreateEvent = ({ addClock, clockId }) => {
  const [isCreate, setIsCreate] = useState(false);
  const handleEvent = (events) => {
    events.clockId = clockId;
    addClock(events);
  };
  const handleModal = () => {
    setIsCreate(!isCreate);
  };
  return (
    <div>
      <Button onClick={() => setIsCreate(!isCreate)}>Create Event</Button>
      {isCreate && (
        <Modal
          isEventForm
          createEvent
          handleEvent={handleEvent}
          handleModal={handleModal}
        />
      )}
    </div>
  );
};

export default CreateEvent;
