import React from "react";
import ClockListItem from "./clock-list-item";

const ClockList = ({ clocks, updateClock, deleteClock, localClock }) => {
  return (
    <div>
      {clocks.length === 0 ? (
        <h4>There is no clock. Please enter one</h4>
      ) : (
        clocks.map((clock) => (
          <ClockListItem
            key={clock.id}
            localClock={localClock}
            clock={clock}
            updateClock={updateClock}
            deleteClock={deleteClock}
          />
        ))
      )}
    </div>
  );
};

export default ClockList;
