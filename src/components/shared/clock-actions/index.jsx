import Button from "../../ui/button/button";
import Modal from "../modal/modal";
import useAction from "./hook/useAction";
import { ButtonWrapper } from "./action-style";
const ClockActions = ({
  local = false,
  clock,
  updateClock,
  createClock,
  deleteClock,
}) => {
  const { isEdit, isCreate, handleModal, handleEditModal, handleClock } =
    useAction(createClock);
  return (
    <ButtonWrapper>
      <Button onClick={handleEditModal}>Edit</Button>
      {local ? (
        <Button onClick={handleModal}>Create</Button>
      ) : (
        <Button onClick={() => deleteClock(clock.id)}>Delete</Button>
      )}
      {isEdit && (
        <>
          <Modal
            handleModal={handleEditModal}
            handleClock={updateClock}
            isCreateForm
            values={clock}
            title={!local}
            edit={true}
          />
        </>
      )}
      {isCreate && (
        <Modal
          handleModal={handleModal}
          createForm
          handleClock={handleClock}
          isCreateForm
        />
      )}
    </ButtonWrapper>
  );
};

export default ClockActions;
