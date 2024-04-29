import React, { useState } from "react";
import EventForm from "./create-event-form";
import Button from "../ui/button/button";

const CreateEvent = ({ addClock, clockId }) => {
  const [isCreate, setIsCreate] = useState(false);
  const handleEvent = (events) => {
    events.clockId = clockId;
    addClock(events);
  };
  return (
    <div>
      <Button onClick={() => setIsCreate(!isCreate)}>Create Event</Button>
      {isCreate && <EventForm handleEvent={handleEvent} />}
    </div>
  );
};

export default CreateEvent;
