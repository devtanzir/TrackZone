import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const useEvent = (getData) => {
  const addEvent = async (event, clockId) => {
    try {
      // Send the data to the API using Axios
      const response = await axios.post(
        `http://localhost:4000/api/v1/event/${clockId}`,
        event
      );

      // Handle the response
      if (response.status === 201) {
        toast.success("Event Created successfully!");
        getData();
      } else {
        toast.error("Failed to Create the event");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("An error occurred while submitting the form");
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
        toast.success("Event Is Delete");
        getData();
      } else {
        toast.error("Failed to delete the Event");
      }
    } catch (error) {
      console.error("Error delete the Event:", error);
      toast.error("An error occurred while deleting the Event");
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
        toast.success("All Event Is Deleted");
        getData();
      } else {
        toast.error("Failed to delete all Event");
      }
    } catch (error) {
      console.error("Error delete the Event:", error);
      toast.error("An error occurred while deleting the Event");
    }
  };
  const updateEvent = async (updatedEvent, id) => {
    try {
      // Send the data to the API using Axios
      const response = await axios.patch(
        `http://localhost:4000/api/v1/event/${id}`,
        updatedEvent
      );

      // Handle the response
      if (response.status === 200) {
        toast.success("Event Updated successfully!");
        getData();
      } else {
        toast.error("Failed to update the event");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("An error occurred while submitting the form");
    }
  };

  return {
    addEvent,
    deleteEvent,
    deleteEventByClockId,
    updateEvent,
  };
};

export default useEvent;
