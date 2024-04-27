import React, { useState } from "react";
import LocalClock from "../components/local-clock";
import ClockList from "../components/clock-list";

const LOCAL_CLOCK_INIT = {
  title: "My Clock",
  timezone: "",
  offset: 0,
  date: null,
};

const App = () => {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
  const UpdateLocalClock = (data) => {
    setLocalClock((prev) => ({
      ...prev,
      ...data,
    }));
  };
  return (
    <div>
      <LocalClock clock={localClock} UpdateLocalClock={UpdateLocalClock} />
      <ClockList />
    </div>
  );
};

export default App;
