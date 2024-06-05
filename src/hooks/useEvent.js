import axios from "axios";
import { toast } from "react-toastify";

/**
 * handle all event with api
 * @param {Function} getData
 * @returns
 */
const useEvent = (getData) => {
  const API_PREFIX = import.meta.env.VITE_API_PREFIX;
  /**
   * add event function
   * @param {Object} event
   * @param {String} clockId
   */
  const addEvent = async (event, clockId) => {
    try {
      // Send the data to the API using Axios
      const response = await axios.post(
        `${API_PREFIX}/event/${clockId}`,
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
  /**
   * delete event
   * @param {String} id
   */
  const deleteEvent = async (id) => {
    try {
      // Send the data to the API using Axios
      const response = await axios.delete(`${API_PREFIX}/event/${id}`);

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
  /**
   * Delete event by clock id
   * @param {String} clockId
   */
  const deleteEventByClockId = async (clockId) => {
    try {
      // Send the data to the API using Axios
      const response = await axios.delete(
        `${API_PREFIX}/event/delete-all/${clockId}`
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
  /**
   * update event function
   * @param {Function} updatedEvent
   * @param {String} id
   */
  const updateEvent = async (updatedEvent, id) => {
    try {
      // Send the data to the API using Axios
      const response = await axios.patch(
        `${API_PREFIX}/event/${id}`,
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
