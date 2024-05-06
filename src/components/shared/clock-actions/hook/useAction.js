import { useState } from "react";

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
