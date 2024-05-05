import { useState } from "react";
import { generateId } from "../utils/Id_Generator/GenerateId";

const useEvent = () => {
  const [state, setState] = useState({});
  const getEventsByClockId = (clockId) => {
    const keys = Object.keys(state).filter((item) => item.startsWith(clockId));
    return keys.map((item) => state[item]);
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
  const deleteEvent = (clockId, id) => {
    const events = { ...state };
    delete events[`${clockId}|${id}`];
    setState(events);
  };
  const deleteEventByClockId = (clockId) => {
    const events = Object.keys(state).filter(
      (item) => !item.startsWith(clockId)
    );
    const filteredEvent = events.reduce((acc, cur) => {
      acc = {
        ...acc,
        [cur]: state[cur],
      };
      return acc;
    }, {});

    setState(filteredEvent);
  };
  const updateEvent = (updatedEvent, clockId, id) => {
    const key = `${clockId}|${id}`;
    const events = { ...state };
    events[key] = {
      ...events[key],
      ...updatedEvent,
    };
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
