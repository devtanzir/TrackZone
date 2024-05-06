import React from "react";
import ClockListItem from "./clock-list-item";
import styled from "styled-components";
import { ClockListWrapper, H4 } from "./clock-list-style";
const ClockList = ({
  clocks,
  updateClock,
  deleteClock,
  getEventsByClockId,
  localClock,
  addEvent,
  deleteEvent,
  updateEvent,
  deleteAllEvent,
}) => {
  return (
    <ClockListWrapper>
      {clocks.length === 0 ? (
        <H4>There is no clock. Please enter one</H4>
      ) : (
        clocks.map((clock) => (
          <ClockListItem
            key={clock.id}
            localClock={localClock}
            getEventsByClockId={getEventsByClockId}
            addEvent={addEvent}
            deleteEvent={deleteEvent}
            updateEvent={updateEvent}
            deleteAllEvent={deleteAllEvent}
            clock={clock}
            updateClock={updateClock}
            deleteClock={deleteClock}
          />
        ))
      )}
    </ClockListWrapper>
  );
};

export default ClockList;
