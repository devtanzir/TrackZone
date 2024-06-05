import useForm from "../../../../hooks/useForm";

/**
 * custom clock form hook
 * @param {Object} clockValues
 * @param {Function} handleClock
 * @param {Function} handleModal
 * @returns call the use form hook and pass the value
 */
const useClockForm = (clockValues, handleClock, handleModal) => {
  const init = { ...clockValues };
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
  return {
    formState: state,
    handleBlur,
    handleChange,
    handleFocus,
    handleSubmit,
    cb,
  };
};

export default useClockForm;
