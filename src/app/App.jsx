import React, { useState } from "react";
import LocalClock from "../components/local-clock";
import ClockList from "../components/clock-list";
import { generateId } from "../utils/Id_Generator/GenerateId";

const LOCAL_CLOCK_INIT = {
  title: "My Clock",
  timezone: "",
  offset: 0,
  date: null,
};

const App = () => {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
  const [clocks, setClocks] = useState([]);
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
    console.log("from app", updateData.id);
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
    <div>
      <LocalClock
        clock={localClock}
        UpdateLocalClock={UpdateLocalClock}
        createClock={createClock}
      />
      <hr />
      <ClockList
        localClock={localClock.date}
        clocks={clocks}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />
    </div>
  );
};

export default App;
