import axios from "axios";
import { useEffect, useState } from "react";
import { structureClockObject } from "../utils/timezone";
const useFetch = () => {
  const [state, setState] = useState(null);
  const [events, setEvents] = useState(null);
  const [clock, setClock] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        // Fetch data from the backend
        const response = await axios.get("http://localhost:4000/api/v1/clock");
        setState(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
    (async () => {
      try {
        // Fetch data from the backend
        const response = await axios.get("http://localhost:4000/api/v1/event");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);

  // if (state && events) {
  //   const finalClock = structureClockObject(state, events);
  //   // setClock(finalClock);
  // }

  return {
    state,
    events,
    clock,
  };
};

export default useFetch;
