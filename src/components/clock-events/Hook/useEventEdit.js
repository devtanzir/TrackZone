import { useState } from "react";
/**
 * a custom hook to handle the state of modal
 * @returns current boolean state
 */
const useEventEdit = () => {
  const [state, setState] = useState(false);
  const handleState = () => {
    setState(!state);
  };
  return {
    state,
    handleState,
  };
};

export default useEventEdit;
