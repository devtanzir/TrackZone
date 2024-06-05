import { useState } from "react";

/**
 *
 * @param {Function} createClock
 * @returns custom clock action hook
 */
const useAction = (createClock) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  const handleModal = () => {
    setIsCreate(!isCreate);
  };
  const handleEditModal = () => {
    setIsEdit(!isEdit);
  };

  const handleClock = (values) => {
    // invoke the create clock function and pass the value
    createClock(values);
  };

  return {
    isEdit,
    isCreate,
    handleModal,
    handleEditModal,
    handleClock,
  };
};

export default useAction;
