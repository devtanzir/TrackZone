import { useEffect, useState } from "react";
import useForm from "../../../../hooks/useForm";

/**
 * custom clock form hook
 * @param {Object} clockValues
 * @param {Function} handleClock
 * @param {Function} handleModal
 * @returns call the use form hook and pass the value
 */
const useClockForm = (
  clockValues,
  handleClock,
  handleModal,
  getOffset,
  getTimeZone
) => {
  const init = { ...clockValues };
  const [offset, setOffset] = useState(null);
  const [timezone, setTimezone] = useState(null);
  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Title is Required";
    }
    return errors;
  };

  const {
    formState: state,
    handleBlur,
    handleChange,
    handleFocus,
    handleSubmit,
    setErrorOnSubmit,
  } = useForm({ init, validate });

  /**
   * Handle Submit function
   * @param {*} param0
   */
  const cb = ({ hasError, values, errors }) => {
    if (hasError) {
      setErrorOnSubmit(errors);
    } else {
      handleClock(values, clockValues._id);
      handleModal();
    }
  };
  useEffect(() => {
    let o = [];
    let t = [];
    getOffset().map((item) => {
      o.push(item);
    });
    getTimeZone().map((item) => {
      t.push(item);
    });
    setOffset(o);
    setTimezone(t);
  }, []);
  return {
    formState: state,
    handleBlur,
    handleChange,
    handleFocus,
    handleSubmit,
    cb,
    offset,
    timezone,
  };
};

export default useClockForm;
