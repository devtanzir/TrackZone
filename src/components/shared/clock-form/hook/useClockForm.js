import useForm from "../../../../hooks/useForm";

const useClockForm = (values, handleClock, handleModal) => {
  const init = { ...values };
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
      handleClock(values);
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
