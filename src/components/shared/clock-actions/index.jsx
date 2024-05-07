import Button from "../../ui/button/button";
import Modal from "../modal/modal";
import useAction from "./hook/useAction";
import { ButtonWrapper } from "./action-style";
import useEventEdit from "../../clock-events/Hook/useEventEdit";
import Confirm from "../confirm-modal/confirm-modal";
const ClockActions = ({
  local = false,
  clock,
  updateClock,
  createClock,
  deleteClock,
}) => {
  const { isEdit, isCreate, handleModal, handleEditModal, handleClock } =
    useAction(createClock);
  const { handleState, state } = useEventEdit();
  return (
    <ButtonWrapper>
      <Button onClick={handleEditModal}>Edit</Button>
      {local ? (
        <Button onClick={handleModal}>Create</Button>
      ) : (
        <>
          <Button onClick={handleState}>Delete</Button>
          {state && (
            <Confirm
              handleState={handleState}
              deleteClock={deleteClock}
              clockId={clock.id}
            />
          )}
        </>
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
