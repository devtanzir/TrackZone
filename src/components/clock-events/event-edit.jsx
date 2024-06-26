import Modal from "../shared/modal/modal";
import { EventButton } from "./event-style";
import useEventEdit from "./Hook/useEventEdit";
import PropTypes from "prop-types";

const EventEdit = ({ values, updateEvent }) => {
  const { state, handleState } = useEventEdit();
  return (
    <>
      <EventButton onClick={handleState}>Edit</EventButton>
      {state && (
        <Modal
          isEventForm
          handleModal={handleState}
          values={values}
          isEdit
          updateEvent={updateEvent}
        />
      )}
    </>
  );
};
EventEdit.propTypes = {
  values: PropTypes.shape({
    clockId: PropTypes.string,
    des: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    title: PropTypes.string,
  }),
  updateEvent: PropTypes.func,
};

export default EventEdit;
