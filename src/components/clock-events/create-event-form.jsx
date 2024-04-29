import React, { useState } from "react";
import Button from "../ui/button/button";

const EventForm = ({
  values = { title: "", startDate: "", endDate: "" },
  handleEvent,
}) => {
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
    handleEvent(events);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Enter Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={events.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="startDate">Enter Start date</label>
        <input
          type="date"
          name="startDate"
          id="startDate"
          value={events.startDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="endDate">Enter End date</label>
        <input
          type="date"
          name="endDate"
          id="endDate"
          value={events.endDate}
          onChange={handleChange}
        />
      </div>
      <Button type="submit">Create</Button>
    </form>
  );
};

export default EventForm;
