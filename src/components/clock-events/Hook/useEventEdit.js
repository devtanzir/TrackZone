import { useState } from "react";

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
