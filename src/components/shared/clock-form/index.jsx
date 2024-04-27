import React, { useEffect, useState } from "react";
import { getOffset, getTimeZone } from "../../../utils/timezone";
import { generateId } from "../../../utils/Id_Generator/GenerateId";
import { TIMEZONE_OFFSET } from "../../../constants/timezone";

const ClockForm = ({
  values = { title: "", timezone: "UTC", offset: 0 },
  handleClock,
  title = true,
  edit = false,
}) => {
  const [formValues, setFormValues] = useState({ ...values });
  useEffect(() => {
    if (TIMEZONE_OFFSET[formValues.timezone]) {
      setFormValues((prev) => ({
        ...prev,
        offset: TIMEZONE_OFFSET[formValues.timezone],
      }));
    }
  }, [formValues.timezone]);
  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "offset") {
      value = +value * 60;
    }
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClock(formValues);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Enter Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formValues.title}
          onChange={handleChange}
          disabled={!title}
        />
      </div>
      <div>
        <label htmlFor="timezone">Enter Timezone</label>
        <select
          onChange={handleChange}
          name="timezone"
          id="timezone"
          value={formValues.timezone}
        >
          {getTimeZone().map((timezone) => {
            return (
              <option key={generateId()} value={timezone}>
                {timezone}
              </option>
            );
          })}
        </select>
      </div>
      {(formValues.timezone === "GMT" || formValues.timezone === "UTC") && (
        <div>
          <label htmlFor="offset">Enter Offset</label>
          <select
            onChange={handleChange}
            id="offset"
            name="offset"
            value={formValues.offset / 60}
          >
            {getOffset().map((offset) => {
              return (
                <option key={offset} value={offset}>
                  {offset}
                </option>
              );
            })}
          </select>
        </div>
      )}

      <button>{edit ? "Update" : "Create"}</button>
    </form>
  );
};

export default ClockForm;
