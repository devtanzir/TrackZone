import useForm from "../../../hooks/useForm";

const useEventForm = (
  values,
  handleEvent,
  isEdit,
  handleModal,
  updateEvent,
  clockId
) => {
  const init = { ...values };
  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Title is Required";
    }
    if (!values.des) {
      errors.des = "Description is Required";
    }
    if (!values.startDate) {
      errors.startDate = "Invalid Date";
    } else if (new Date(values.startDate) <= new Date()) {
      errors.startDate = "Invalid Date";
    }
    if (!values.endDate) {
      errors.endDate = "Invalid Date";
    } else if (new Date(values.endDate) <= new Date(values.startDate)) {
      errors.endDate = "Invalid Date";
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
      if (!isEdit) handleEvent(values);
      if (isEdit) updateEvent(values, clockId, values.id);
      handleModal();
    }
  };
  return {
    formState: state,
    handleBlur,
    handleChange,
    handleFocus,
    handleSubmit,
    setErrorOnSubmit,
    cb,
  };
};

export default useEventForm;
