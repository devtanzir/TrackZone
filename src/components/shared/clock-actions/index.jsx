import Button from "../../ui/button/button";
import Modal from "../modal/modal";
import useAction from "./hook/useAction";
import { ButtonWrapper } from "./action-style";
import useEventEdit from "../../clock-events/Hook/useEventEdit";
import Confirm from "../confirm-modal/confirm-modal";
import PropTypes from "prop-types";

const ClockActions = ({
  local = false,
  clock,
  updateClock,
  createClock,
  deleteClock,
}) => {
  const {
    isEdit,
    isCreate,
    handleModal,
    handleEditModal,
    handleClock,
    handleEditClock,
  } = useAction(createClock);
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
            handleClock={handleEditClock}
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

ClockActions.propTypes = {
  local: PropTypes.bool,
  clock: PropTypes.shape({
    offset: PropTypes.number.isRequired,
    timezone: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  updateClock: PropTypes.func,
  createClock: PropTypes.func,
  deleteClock: PropTypes.func,
};

export default ClockActions;
