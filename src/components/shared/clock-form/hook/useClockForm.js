import { useEffect, useState } from "react";
import { TIMEZONE_OFFSET } from "../../../../constants/timezone";

const useClockForm = (values, handleClock, handleModal) => {
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
    handleModal();
  };
  return {
    formValues,
    handleChange,
    handleSubmit,
  };
};

export default useClockForm;
