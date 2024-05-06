import { useState } from "react";
import useEvent from "../../hooks/useEvent";
import { generateId } from "../../utils/Id_Generator/GenerateId";

const useApp = () => {
  const LOCAL_CLOCK_INIT = {
    title: "Universal Clock",
    timezone: "",
    offset: 0,
    date: null,
  };
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
  const [clocks, setClocks] = useState([]);

  const {
    addEvent,
    getEventsByClockId,
    updateEvent,
    deleteEvent,
    deleteEventByClockId,
  } = useEvent();

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

  return {
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
  };
};

export default useApp;
