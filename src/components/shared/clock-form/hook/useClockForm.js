import useForm from "../../../../hooks/useForm";

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
