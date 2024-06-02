import Button from "../../ui/button/button";
import Modal from "../modal/modal";
import useAction from "./hook/useAction";
import { ButtonWrapper } from "./action-style";
import useEventEdit from "../../clock-events/Hook/useEventEdit";
import Confirm from "../confirm-modal/confirm-modal";
import PropTypes from "prop-types";
import { Skeleton } from "../loader-skeleton/skeleton";

const ClockActions = ({
  local = false,
  loading,
  clock,
  updateClock,
  createClock,
  deleteClock,
}) => {
  const { isEdit, isCreate, handleModal, handleEditModal, handleClock } =
    useAction(createClock);
  const { handleState, state } = useEventEdit();
  if (loading) {
    return (
      <ButtonWrapper>
        <Skeleton $width={"49%"} $height={"41px"} />
        <Skeleton $width={"49%"} $height={"41px"} />
      </ButtonWrapper>
    );
  }
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
              clockId={clock._id}
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
