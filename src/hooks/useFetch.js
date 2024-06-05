import axios from "axios";
import { useEffect, useState } from "react";
const useFetch = () => {
  const [state, setState] = useState(null);
  const [events, setEvents] = useState(null);
  const [needLoad, setNeedLoad] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_PREFIX = import.meta.env.VITE_API_PREFIX;
    // Using IIFE
    (async () => {
      try {
        // Fetch data from the backend
        const response = await axios.get(`${API_PREFIX}/clock`);
        setState(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
    // Using IIFE
    (async () => {
      try {
        // Fetch data from the backend
        const response = await axios.get(`${API_PREFIX}/event`);
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, [needLoad]);

  useEffect(() => {
    if (state && events) {
      // customize the state add event in clock
      state.forEach((clock) => {
        clock.events = events.filter((event) => event.clockId === clock._id);
      });
      setLoading(false);
    }
  }, [state, events]);

  const getData = () => {
    // when data add , edit , delete update rerender the component
    setNeedLoad((prev) => !prev);
  };

  return {
    state,
    getData,
    loading,
  };
};

export default useFetch;
