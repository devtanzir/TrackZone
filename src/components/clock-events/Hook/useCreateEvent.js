import { useState } from "react";

const useCreateEvent = (addClock, clockId) => {
  const [isCreate, setIsCreate] = useState(false);
  const handleEvent = (events) => {
    events.clockId = clockId;
    addClock(events);
  };
  const handleModal = () => {
    setIsCreate(!isCreate);
  };
  return {
    isCreate,
    handleEvent,
    handleModal,
  };
};

export default useCreateEvent;
