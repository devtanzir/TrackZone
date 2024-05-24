import React from "react";
import ClockListItem from "./clock-list-item";
import { ClockListWrapper, H4 } from "./clock-list-style";
import PropTypes from "prop-types";
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
ClockList.propTypes = {
  clocks: PropTypes.arrayOf(PropTypes.object),
  updateClock: PropTypes.func.isRequired,
  deleteClock: PropTypes.func.isRequired,
  getEventsByClockId: PropTypes.func.isRequired,
  addEvent: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  updateEvent: PropTypes.func.isRequired,
  deleteAllEvent: PropTypes.func.isRequired,
};
export default ClockList;
