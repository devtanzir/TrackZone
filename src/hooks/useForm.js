import { useState } from "react";
import {
  deepClone,
  mapValuesToState,
  mapStateToKeys,
  isObjectEmpty,
} from "../utils/object-utils";

/**
 *
 * @param {Object} initialValue
 * @param {it could be a function || boolean} validate
 * @returns
 */
const useForm = ({ init, validate }) => {
  const [state, setState] = useState(mapValuesToState(init));

  const handleBlur = (e) => {
    // call error function & pass the value
    const { errors } = getErrors(state);
    const { name } = e.target;
    // deep clone the function
    const oldState = deepClone(state);
    if (errors[name] && state[name].touched) {
      oldState[name].error = errors[name];
    } else {
      oldState[name].error = "";
    }
    oldState[name].focused = false;
    // set new data to state
    setState(oldState);
  };
  const handleFocus = (e) => {
    const { name } = e.target;
    // deep clone the function
    const oldState = deepClone(state);
    oldState[name].focused = true;
    if (!oldState[name].touched) {
      oldState[name].touched = true;
    }
    // set new data to state
    setState(oldState);
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // deep clone the function
    const oldState = deepClone(state);
    if (type === "checkbox") {
      oldState[name].value = checked;
    } else if (name === "offset") {
      oldState[name].value = +value * 60;
    } else {
      oldState[name].value = value;
    }
    // call error function & pass the value
    const { errors } = getErrors(oldState);

    if (oldState[name] && state[name].touched) {
      oldState[name].error = errors[name];
    } else {
      oldState[name].error = "";
    }
    // set new data to state
    setState(oldState);
  };
  const handleSubmit = (e, cb) => {
    e.preventDefault();

    const { errors, values, hasError } = getErrors(state);
    // when submit targeted from this function will call with value
    cb({
      hasError,
      errors,
      values,
      touched: mapStateToKeys(state, "touched"),
      focused: mapStateToKeys(state, "focused"),
    });
  };

  const setErrorOnSubmit = (errors) => {
    const oldState = deepClone(state);
    Object.keys(oldState).forEach((key) => {
      oldState[key].error = errors[key];
    });
    setState(oldState);
  };

  const resetForm = () => {
    const newState = mapValuesToState(init, true);
    setState(newState);
  };

  const getErrors = (state) => {
    let hasError = null,
      errors = null;

    const values = mapStateToKeys(state, "value");

    if (typeof validate === "boolean") {
      hasError = validate;
      errors = mapStateToKeys(state, "error");
    } else if (typeof validate === "function") {
      const errorsFromCB = validate(values);
      hasError = !isObjectEmpty(errorsFromCB);
      errors = errorsFromCB;
    } else {
      throw new Error("validate property must be boolean or function");
    }

    return {
      values,
      errors,
      hasError,
    };
  };

  return {
    formState: state,
    handleBlur,
    handleChange,
    handleFocus,
    handleSubmit,
    resetForm,
    setErrorOnSubmit,
  };
};

export default useForm;
