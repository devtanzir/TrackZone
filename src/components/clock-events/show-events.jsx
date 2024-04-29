import React, { useState } from "react";
import EventItem from "./event-item";
import Button from "../ui/button/button";

const ShowEvents = ({ events, getEventsByClockId, clockId }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(!show)}>Show Event</Button>
      {show && (
        <EventItem
          Event={events}
          getEventsByClockId={getEventsByClockId}
          clockId={clockId}
        />
      )}
    </>
  );
};

export default ShowEvents;
