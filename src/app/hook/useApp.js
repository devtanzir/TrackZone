import { useState } from "react";
import useEvent from "../../hooks/useEvent";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { toast } from "react-toastify";
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

  const { state, getData, loading } = useFetch();

  /**
   * Call the Custom Event hook
   */
  const {
    addEvent,
    updateEvent,
    deleteEvent,
    deleteEventByClockId,
    eventLoading,
  } = useEvent(getData);
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
  const createClock = async (values) => {
    try {
      // Send the data to the API using Axios
      const response = await axios.post(
        "http://localhost:4000/api/v1/clock/clock-create",
        values
      );

      // Handle the response
      if (response.status === 201) {
        toast.success("Clock Created successfully!");
        getData();
      } else {
        toast.error("Failed to create the clock");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("An error occurred while submitting the form");
    }
  };
  /**
   * Update the dynamic clocks
   * @param {Object} updateData
   */
  const updateClock = async (updateData, clockId) => {
    try {
      // Send the data to the API using Axios
      const response = await axios.patch(
        `http://localhost:4000/api/v1/clock/${clockId}`,
        updateData
      );

      // Handle the response
      if (response.status === 200) {
        toast.success("Clock Updated successfully!");
        getData();
      } else {
        toast.error("Failed to update the clock");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("An error occurred while submitting the form");
    }
  };
  /**
   * delete dynamic clock
   * @param {String} id
   */
  const deleteClock = async (id) => {
    try {
      // Send the data to the API using Axios
      const response = await axios.delete(
        `http://localhost:4000/api/v1/clock/${id}`
      );

      // Handle the response
      if (response.status === 203) {
        toast.success("Clock Is Deleted");
        getData();
      } else {
        toast.error("Failed to delete the clock");
      }
    } catch (error) {
      console.error("Error delete the clock:", error);
      toast.error("An error occurred while deleting the clock");
    }
  };

  return {
    localClock,
    state,
    loading,
    eventLoading,
    addEvent,
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
