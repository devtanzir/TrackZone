import { useState } from "react";
/**
 * create event custom hook
 * @param {Function} addClock
 * @param {String} clockId
 * @returns create a event on targeted clock
 */
const useCreateEvent = (addClock, clockId) => {
  const [isCreate, setIsCreate] = useState(false);
  const handleEvent = (events) => {
    // when event form submit
    events.clockId = clockId; // to target e clock
    addClock(events); // function invoke
  };
  const handleModal = () => {
    setIsCreate(!isCreate); // handle the modal open & close
  };
  return {
    isCreate,
    handleEvent,
    handleModal,
  };
};

export default useCreateEvent;
