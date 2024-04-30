import React, { useEffect, useState } from "react";
import LocalClock from "../components/local-clock";
import ClockList from "../components/clock-list";
import { generateId } from "../utils/Id_Generator/GenerateId";
import styled from "styled-components";
import useEvent from "../hooks/useEvent";
const LOCAL_CLOCK_INIT = {
  title: "My Clock",
  timezone: "",
  offset: 0,
  date: null,
};

const App = () => {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
  const [clocks, setClocks] = useState([]);

  const { addEvent, events, getEventsByClockId, getEvents } = useEvent();

  // useEffect(() => {
  //   // const clockEvents = getEventsByClockId(clocks.id);
  //   // console.log("clock events", clockEvents);
  //   console.log("all events", events);
  //   console.log("get events", getEvents());
  // }, [events]);

  const UpdateLocalClock = (data) => {
    setLocalClock((prev) => ({
      ...prev,
      ...data,
    }));
  };
  const createClock = (clock) => {
    clock.id = generateId();
    setClocks((prev) => [clock, ...prev]);
  };
  const updateClock = (updateData) => {
    const updatedData = clocks.map((clock) => {
      if (clock.id === updateData.id) {
        return updateData;
      }
      return clock;
    });
    setClocks(updatedData);
  };
  const deleteClock = (id) => {
    const updatedData = clocks.filter((clock) => clock.id !== id);
    setClocks(updatedData);
  };
  return (
    <MainWrapper>
      <LocalClock
        clock={localClock}
        UpdateLocalClock={UpdateLocalClock}
        createClock={createClock}
      />
      <ClockList
        localClock={localClock.date}
        addEvent={addEvent}
        getEventsByClockId={getEventsByClockId}
        clocks={clocks}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />
    </MainWrapper>
  );
};

export default App;

const MainWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
