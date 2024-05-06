import { useState } from "react";
import {
  deepClone,
  mapValuesToState,
  mapStateToKeys,
  isObjectEmpty,
} from "../utils/object-utils";
import { TIMEZONE_OFFSET } from "../constants/timezone";

/**
 *
 * @param {Object} param0
 * @param {it could be a function || boolean} param1
 * @returns
 */
const useForm = ({ init, validate }) => {
  const [state, setState] = useState(mapValuesToState(init));

  const handleBlur = (e) => {
    const { errors } = getErrors(state);
    const { name } = e.target;
    const oldState = deepClone(state);
    if (errors[name] && state[name].touched) {
      oldState[name].error = errors[name];
    } else {
      oldState[name].error = "";
    }
    oldState[name].focused = false;
    setState(oldState);
  };
  const handleFocus = (e) => {
    const { name } = e.target;

    const oldState = deepClone(state);
    oldState[name].focused = true;
    if (!oldState[name].touched) {
      oldState[name].touched = true;
    }
    setState(oldState);
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const oldState = deepClone(state);

    if (type === "checkbox") {
      oldState[name].value = checked;
    } else {
      if (oldState[name] === "offset") {
        oldState[name].value = +value * 60;
      } else {
        oldState[name].value = value;
      }
    }
    const { errors } = getErrors(oldState);

    if (oldState[name] && state[name].touched) {
      oldState[name].error = errors[name];
    } else {
      oldState[name].error = "";
    }
    setState(oldState);
  };
  const handleSubmit = (e, cb) => {
    e.preventDefault();

    const { errors, values, hasError } = getErrors(state);
    cb({
      hasError,
      errors,
      values,
      touched: mapStateToKeys(state, "touched"),
      focused: mapStateToKeys(state, "focused"),
    });
  };
  const handleTimeZone = () => {
    if (TIMEZONE_OFFSET[state.timezone.value]) {
      console.log("before state", state);
      setState((prev) => ({
        ...prev,

        offset: {
          ...prev,
          value: TIMEZONE_OFFSET[state.timezone.value],
        },
      }));
      console.log("after state", state);
    }
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
    handleTimeZone,
  };
};

export default useForm;
