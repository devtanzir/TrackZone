import axios from "axios";
import { useEffect, useState } from "react";
import shortid from "shortid";
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
  const create = (values) => {
    values._id = shortid.generate();
    setState((prev) => [...prev, values]);
  };
  const update = (clockId, values) => {
    const updateState = state.map((item) => {
      if (item._id == clockId) {
        return {
          ...item,
          ...values,
        };
      }
      return item;
    });
    setState(updateState);
  };
  const deleteOne = (id) => {
    const data = state.filter((item) => item._id !== id);
    setState(data);
  };
  const createEvent = (event, clockId) => {
    event._id = shortid.generate();
    event.clockId = clockId;
    setEvents((prev) => [...prev, event]);
  };
  const patchEvent = (values, id) => {
    const updateState = events.map((item) => {
      if (item._id == id) {
        return {
          ...item,
          ...values,
        };
      }
      return item;
    });
    setEvents(updateState);
  };
  const deleteOneEvent = (id) => {
    const data = events.filter((item) => item._id !== id);
    setEvents(data);
  };
  const deleteByClockId = (clockId) => {
    const data = events.filter((item) => item.clockId !== clockId);
    setEvents(data);
  };
  return {
    state,
    getData,
    loading,
    create,
    update,
    deleteOne,
    createEvent,
    patchEvent,
    deleteOneEvent,
    deleteByClockId,
  };
};

export default useFetch;
