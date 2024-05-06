import LocalClock from "../components/local-clock";
import ClockList from "../components/clock-list";
import styled from "styled-components";
import useApp from "./hook/useApp";
import { MainWrapper } from "./app-style";

const App = () => {
  const {
    localClock,
    clocks,
    addEvent,
    getEventsByClockId,
    updateEvent,
    deleteEvent,
    deleteEventByClockId,
    UpdateLocalClock,
    createClock,
    updateClock,
    deleteClock,
  } = useApp();
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
        deleteEvent={deleteEvent}
        getEventsByClockId={getEventsByClockId}
        updateEvent={updateEvent}
        deleteAllEvent={deleteEventByClockId}
        clocks={clocks}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />
    </MainWrapper>
  );
};

export default App;
