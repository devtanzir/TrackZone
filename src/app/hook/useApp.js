import { useState } from "react";
import useEvent from "../../hooks/useEvent";
import { generateId } from "../../utils/Id_Generator/GenerateId";
import useFetch from "../../hooks/useFetch";
import { structureClockObject } from "../../utils/timezone";
/**
 * Custom app hook
 * @returns localClock, clocks, addEvent, getEventsByClockId, updateEvent, deleteEvent, deleteEventByClockId, UpdateLocalClock, createClock, updateClock, deleteClock,
 */
const useApp = () => {
  /**
   * Initial value of localClock state
   */
  const LOCAL_CLOCK_INIT = {
    title: "Universal Local Clock",
    timezone: "",
    offset: 0,
    date: null,
  };
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
  const [clocks, setClocks] = useState([]);

  const { state } = useFetch();

  /**
   * Call the Custom Event hook
   */
  const {
    addEvent,
    getEventsByClockId,
    updateEvent,
    deleteEvent,
    deleteEventByClockId,
  } = useEvent();
  /**
   * This will be update the local data
   * @param {Object} data
   */
  const UpdateLocalClock = (data) => {
    setLocalClock((prev) => ({
      ...prev,
      ...data,
    }));
  };
  /**
   * Create list of dynamic Clocks
   * @param {Object} clock
   */
  const createClock = (clock) => {
    clock.id = generateId(); // generate custom id
    setClocks((prev) => [clock, ...prev]);
  };
  /**
   * Update the dynamic clocks
   * @param {Object} updateData
   */
  const updateClock = (updateData) => {
    const updatedData = clocks.map((clock) => {
      // map on the clock state
      if (clock.id === updateData.id) {
        return updateData; // update the data
      }
      return clock;
    });
    setClocks(updatedData);
  };
  /**
   * delete dynamic clock
   * @param {String} id
   */
  const deleteClock = (id) => {
    const updatedData = clocks.filter((clock) => clock.id !== id);
    setClocks(updatedData);
  };

  return {
    localClock,
    clocks,
    state,
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
