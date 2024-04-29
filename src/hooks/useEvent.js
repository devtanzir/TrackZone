import { useState } from "react";
import { generateId } from "../utils/Id_Generator/GenerateId";

const useEvent = () => {
  const [state, setState] = useState({});
  const getEventsByClockId = (clockId) => {
    return Object.keys(state).filter((item) => item.startsWith(clockId));
  };
  const getEvents = (isArray = false) => {
    if (!isArray) return state;

    return Object.values(state);
  };

  const addEvent = (event) => {
    event.id = generateId();

    setState((prev) => ({
      ...prev,
      [`${event.clockId}|${event.id}`]: event,
    }));
    return event;
  };
  const deleteEvent = (id) => {
    const updatedData = Object.keys(state).filter((item) => item.id !== id);
    setState(updatedData);
  };
  const deleteEventByClockId = (clockId) => {
    const events = Object.keys(state).filter(
      (item) => !item.startsWith(clockId)
    );
    setState(events);
  };
  const updateEvent = (updatedEvent, id) => {
    const events = Object.keys(state).map((item) => {
      if (item.id === id) {
        return updatedEvent;
      }
      return item;
    });
    setState(events);
  };

  return {
    getEventsByClockId,
    getEvents,
    addEvent,
    deleteEvent,
    deleteEventByClockId,
    updateEvent,
    events: state,
  };
};

export default useEvent;
