import { useState } from "react";

const useEventForm = (
  values,
  handleEvent,
  isEdit,
  handleModal,
  updateEvent,
  clockId
) => {
  const [events, setEvents] = useState({ ...values });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvents((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEdit) handleEvent(events);
    if (isEdit) updateEvent(events, clockId, events.id);
    handleModal();
  };
  return {
    events,
    handleChange,
    handleSubmit,
  };
};

export default useEventForm;
