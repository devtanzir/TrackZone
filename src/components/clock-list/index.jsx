import React from "react";
import ClockListItem from "./clock-list-item";
import styled from "styled-components";
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
    <Wrapper>
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
    </Wrapper>
  );
};

export default ClockList;

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;
const H4 = styled.h4`
  font-size: 25px;
  text-transform: uppercase;
  text-align: center;
`;
