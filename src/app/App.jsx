import LocalClock from "../components/local-clock";
import ClockList from "../components/clock-list";
import useApp from "./hook/useApp";
import { MainWrapper } from "./app-style";

const App = () => {
  const {
    localClock,
    state,
    addEvent,
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
        clock={localClock} // pass the clock object from state
        UpdateLocalClock={UpdateLocalClock} // pass the function to upgrade the local clock
        createClock={createClock} // pass the function to Create multiple clocks
      />
      <ClockList
        localClock={localClock.date} // pass the time to calculate the difference between two clocks
        addEvent={addEvent} // to add the event on parent clock
        deleteEvent={deleteEvent} // to delete event from state
        updateEvent={updateEvent} // event updater function
        deleteAllEvent={deleteEventByClockId} // delete all event with 1 button from targeted clock
        clocks={state} // pass all the clocks
        updateClock={updateClock} // update clocks
        deleteClock={deleteClock} // delete clocks
      />
    </MainWrapper>
  );
};

export default App;
