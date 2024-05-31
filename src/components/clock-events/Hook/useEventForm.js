import useForm from "../../../hooks/useForm";
/**
 * custom hook to handle event
 * @param {Object} values
 * @param {Function} handleEvent
 * @param {Boolean} isEdit
 * @param {Function} handleModal
 * @param {Function} updateEvent
 * @param {String} clockId
 * @returns
 */
const useEventForm = (
  values,
  handleEvent,
  isEdit,
  handleModal,
  updateEvent,
  clockId
) => {
  const init = { ...values };
  /**
   * set custom error validator on form
   * @param {Object} values
   * @returns custom error
   */
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
  /**
   * use the form validator hook
   */
  const {
    formState: state,
    handleBlur,
    handleChange,
    handleFocus,
    handleSubmit,
    setErrorOnSubmit,
  } = useForm({ init, validate });
  /**
   * what to do when submit function
   * @param {*} param0
   */
  const cb = ({ hasError, values, errors }) => {
    if (hasError) {
      setErrorOnSubmit(errors); // if form has error
    } else {
      if (!isEdit) handleEvent(values); // if create form
      if (isEdit) updateEvent(values, values._id); // if edit form
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

export default useEventForm;
