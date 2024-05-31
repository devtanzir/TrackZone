import { useState } from "react";
import { generateId } from "../utils/Id_Generator/GenerateId";
import axios from "axios";

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

  const addEvent = async (event, clockId) => {
    try {
      // Send the data to the API using Axios
      const response = await axios.post(
        `http://localhost:4000/api/v1/event/${clockId}`,
        event
      );

      // Handle the response
      if (response.status === 201) {
        alert("Form submitted successfully!");
      } else {
        alert("Failed to submit the form");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred while submitting the form");
    }
  };
  const deleteEvent = async (id) => {
    try {
      // Send the data to the API using Axios
      const response = await axios.delete(
        `http://localhost:4000/api/v1/event/${id}`
      );

      // Handle the response
      if (response.status === 203) {
        alert("Event Is Delete");
      } else {
        alert("Failed to delete the Event");
      }
    } catch (error) {
      console.error("Error delete the Event:", error);
      alert("An error occurred while deleting the Event");
    }
  };
  const deleteEventByClockId = async (clockId) => {
    try {
      // Send the data to the API using Axios
      const response = await axios.delete(
        `http://localhost:4000/api/v1/event/delete-all/${clockId}`
      );

      // Handle the response
      if (response.status === 203) {
        alert("Event Is Delete");
      } else {
        alert("Failed to delete the Event");
      }
    } catch (error) {
      console.error("Error delete the Event:", error);
      alert("An error occurred while deleting the Event");
    }
  };
  const updateEvent = async (updatedEvent, id) => {
    console.log(updatedEvent);
    try {
      // Send the data to the API using Axios
      const response = await axios.patch(
        `http://localhost:4000/api/v1/event/${id}`,
        updatedEvent
      );

      // Handle the response
      if (response.status === 200) {
        alert("Form submitted successfully!");
      } else {
        alert("Failed to submit the form");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred while submitting the form");
    }
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
