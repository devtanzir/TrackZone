import axios from "axios";
import { useState } from "react";

const useAction = (createClock) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  const handleModal = () => {
    setIsCreate(!isCreate);
  };
  const handleEditModal = () => {
    setIsEdit(!isEdit);
  };

  const handleClock = async (values) => {
    // createClock(values);

    try {
      // Send the data to the API using Axios
      const response = await axios.post(
        "http://localhost:4000/api/v1/clock/clock-create",
        values
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
  const handleEditClock = async (values) => {
    // createClock(values);

    try {
      // Send the data to the API using Axios
      const response = await axios.patch(
        `http://localhost:4000/api/v1/clock/6653102df52d9ccb2a633d6d`,
        values
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
    isEdit,
    isCreate,
    handleModal,
    handleEditModal,
    handleClock,
    handleEditClock,
  };
};

export default useAction;
