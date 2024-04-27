import React, { useState } from "react";
import ClockForm from "../clock-form";

const ClockActions = ({ local = false, clock, updateClock }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  const handleClock = (values) => {
    console.log(values);
  };
  return (
    <div>
      <button onClick={() => setIsEdit(!isEdit)}>
        {isEdit ? "DONE" : "Edit"}
      </button>
      {local ? (
        <button onClick={() => setIsCreate((prev) => !prev)}>Create</button>
      ) : (
        <button>Delete</button>
      )}
      {isEdit && (
        <>
          <h4>Edit Form</h4>
          <ClockForm
            values={clock}
            handleClock={updateClock}
            title={!local}
            edit={true}
          />
        </>
      )}
      {isCreate && (
        <>
          <h4>Create a New Clock</h4>
          <ClockForm handleClock={handleClock} />
        </>
      )}
    </div>
  );
};

export default ClockActions;
